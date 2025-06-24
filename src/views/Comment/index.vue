<template>
  <div class="flex flex-col h-screen">
    <div class="flex items-center">
      <i class="iconfont icon-zuojiantou p-3" @click="pushMusic"></i>
      <p>评论（{{ commentList?.totalCount }}）</p>
    </div>
    <div class="flex-1 bg-gray-50 overflow-y-auto">
      <div class="mt-0.5 p-3 bg-white">
        <div class="flex justify-between">
          <p>评论区</p>
          <ul class="flex items-center">
            <li
              class="px-2.5"
              v-for="item in list"
              :key="item.id"
              @click="getNewComment(item.id)"
              :class="{ 'text-red-500': item.id === activeId }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div v-loading="loading" element-loading-text="加载中..." class="h-screen">
          <div class="p-3 flex" v-for="item in commentList?.comments" :key="item.commentId">
            <div class="w-7.5 h-7.5">
              <img class="rounded-full aspect-square" v-lazy="item.user.avatarUrl" alt="" />
            </div>
            <div class="w-full">
              <div class="flex justify-between items-center">
                <div>{{ item.user.nickname }}</div>
                <div class="pl-3 text-xs text-gray-400">{{ item.timeStr }}</div>
              </div>
              <div class="py-1.5">{{ item.content }}</div>
              <div class="flex justify-end">
                <i class="iconfont icon-xiaoxitishi pl-2 mr-1"></i>
                <i class="iconfont icon-dianzan pl-2 mr-1">
                  <span v-if="item.likedCount > 0">{{ item.likedCount }}</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 flex justify-between">
      <input class="ml-2" type="text" placeholder="写评论..." />
      <el-button class="pl-1 my-0.5" type="danger" color="red">发送</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { getCommentService } from '@/apis/comment'
import type { CommentData } from '@/apis/comment'
import type { CommentItem } from '@/types/apis/comment'

const router = useRouter()
const route = useRoute()
const list = ref([
  { id: 1, name: '推荐' },
  { id: 2, name: '最热' },
  { id: 3, name: '最新' },
])
const activeId = ref<1 | 2 | 3>(1)
const loading = ref(false)
const commentList = ref<CommentItem | null>()
const pushMusic = () => {
  router.push({
    name: 'music',
    query: {
      id: route.query.id,
    },
  })
}
const id: number = Number(route.query.id)
// const commentData = ref({
//     id,
//     type: 2,
//     sortType:activeId,
//     pageNo:1,
//     pageSize:20
// })
//获取评论数据

async function getComment(cData: CommentData) {
  loading.value = true
  const { code, data } = await getCommentService(cData)
  if (code === 200) {
    commentList.value = data
  }
  loading.value = false
}

getComment({ id, type: 2, sortType: activeId.value, pageNo: 1, pageSize: 20 })

function getNewComment(itemId: number) {
  activeId.value = itemId as 1 | 2 | 3
  getComment({ id, type: 2, sortType: activeId.value, pageNo: 1, pageSize: 20 })
}
</script>
