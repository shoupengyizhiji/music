<template>
  <div class="flex flex-col bg-gray-100 h-screen">
    <div>
      <div class="flex justify-between items-center bg-white pt-2">
        <div class="flex">
          <div><i class="iconfont icon-zuojiantou p-2" @click="pushFind"></i></div>
          <div><span>歌单</span></div>
        </div>
        <div><i class="iconfont icon-sandian"></i></div>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto">
      <div class="flex bg-white mt-0.5 rounded-md max-w-screen">
        <div class="p-3 w-full">
          <div class="flex">
            <div class="h-30 w-30">
              <img class="rounded-md aspect-square" v-lazy="detailList?.coverImgUrl" alt="" />
            </div>
            <div class="m-1.5 overflow-hidden text-center w-full">
              <div class="overflow-hidden">
                <p class="truncate">{{ detailList?.name }}</p>
              </div>
              <div class="flex justify-items-center">
                <div>
                  <img
                    v-lazy="detailList?.creator?.avatarUrl"
                    class="h-7 w-7 rounded-full aspect-square"
                  />
                </div>
                <div class="ml-2 truncate">
                  <span>{{ detailList?.creator?.nickname }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="my-3 flex justify-around">
            <el-button color="red" round class="min-w-25">
              <div><i class="iconfont icon-zhuanfa1"></i></div>
              <div class="pl-1">
                <p>
                  {{
                    (dynamicList?.shareCount || 0) > 10000
                      ? ((dynamicList?.shareCount || 0) / 10000).toFixed(2) + '万'
                      : dynamicList?.shareCount
                  }}
                </p>
              </div>
            </el-button>
            <el-button color="red" round class="min-w-25" @click="pushComment">
              <div><i class="iconfont icon-xiaoxi"></i></div>
              <div class="pl-1">
                <p>
                  {{
                    (dynamicList?.commentCount || 0) > 10000
                      ? ((dynamicList?.commentCount || 0) / 10000).toFixed(2) + '万'
                      : dynamicList?.commentCount
                  }}
                </p>
              </div>
            </el-button>
            <el-button color="red" round class="min-w-25">
              <div><i class="iconfont icon-jiahaozhankai"></i></div>
              <div class="pl-1">
                <p>
                  {{
                    (dynamicList?.bookedCount || 0) > 10000
                      ? ((dynamicList?.bookedCount || 0) / 10000).toFixed(2) + '万'
                      : dynamicList?.bookedCount
                  }}
                </p>
              </div></el-button
            >
          </div>
        </div>
      </div>

      <div class="flex flex-col bg-white mt-3 rounded-md">
        <div class="mx-3 pt-3">
          <i class="iconfont icon-bofang text-red-500"></i>
          <span class="pl-3">播放全部 ({{ songList.length }})</span>
        </div>
        <div
          v-for="(item, index) in songList"
          :key="item.id"
          class="border-b border-gray-100"
          @click="radioMusic(item.id)"
          :class="{ 'text-red-500': urlId === item.id }"
        >
          <!-- @click="radioMusic(item.id)" -->
          <div class="flex justify-between py-3 mx-3">
            <div>
              <div class="flex items-center">
                <div>{{ index + 1 }}</div>
                <div class="pl-2">
                  <div>{{ item.name }}</div>
                  <div
                    class="text-xs"
                    :class="urlId === item.id ? 'text-red-500' : ' text-gray-400'"
                  >
                    {{ item.ar?.[0].name }}
                  </div>
                  <audio
                    v-if="urlId === item.id"
                    ref="rulRef"
                    :src="urlList"
                    @ended="nextMusic"
                  ></audio>
                </div>
              </div>
            </div>
            <div><i class="iconfont icon-sandian"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import {
  getSongsService,
  getDynamicService,
  getDetailService,
  getMusicUrlService,
  getCheckMusicService,
} from '@/apis/song'
import type { DynamicItem, PlayListItem } from '@/apis/song'
import { ref, nextTick } from 'vue'
import type { SongItem, MusicUrlItem } from '@/types/apis/song'
// import { getMusicDetailService } from '@/apis/music'
import { ElMessage } from 'element-plus'

const router = useRouter()
const route = useRoute()
const songList = ref<SongItem[]>([])
const dynamicList = ref<DynamicItem>()
const detailList = ref<PlayListItem>({})
const urlList = ref<string>('')

const pushFind = () => {
  router.push('/find')
}
const pushComment = () => {
  router.push({
    name: 'comment',
    query: {
      id: route.query.id,
    },
  })
}
const getPlayList = async () => {
  const id: number = Number(route.query.id)
  const { code, songs } = await getSongsService(id)
  if (code === 200) {
    songList.value = songs
  }
}

const getDynamic = async () => {
  const id: number = Number(route.query.id)
  const res = await getDynamicService(id)
  if (res.code === 200) {
    dynamicList.value = res
  }
}
const getDetail = async () => {
  const id: number = Number(route.query.id)
  const { code, playlist } = await getDetailService(id)
  if (code === 200) {
    detailList.value = playlist
  }
}
// async function getMusicUrl() {}
// async function getCheckMusicService() {
//   await getMusicLyricService(100)
// }
const urlId = ref<number>(0)
const rulRef = ref<HTMLAudioElement>()
// rulRef.value?.play()
async function radioMusic(id: number) {
  const { code, message } = await getCheckMusicService(id)
  if (code === 200 && message === 'ok') {
    const { code, data } = await getMusicUrlService(id)
    // urlId.value = id
      if (urlId.value !== id && code === 200 && data.length > 0) {
        urlList.value = data?.[0].url
        urlId.value = id
        nextTick(() => {
          rulRef.value[0].oncanplay = () => {
            rulRef.value[0]?.play()
          }
        })
      } else {
        rulRef.value[0]?.pause()
      }

      console.log(data)
      console.log(data?.[0].url)
    
  } else {
    ElMessage.error(message)
  }
}

getPlayList()
getDynamic()
getDetail()
// getMusicUrl()
</script>
