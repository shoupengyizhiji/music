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
    <div class="flex bg-white mt-0.5 rounded-md max-w-screen">
      <div class="p-3">
        <div class="flex">
          <div class="h-30 w-30">
            <img class="rounded-md aspect-square" src="@/assets/imgs/log.jpg" alt="" />
          </div>
          <div class="m-1.5">
            <div><p class="truncate">野树与野生生详乐队202500000</p></div>
            <div>
              <img src="@/assets/imgs/log.jpg" class="h-7 w-7 rounded-full aspect-square" alt="" />
            </div>
          </div>
        </div>
        <div class="my-3 flex justify-around">
          <el-button color="red" round class="min-w-25">
            <div><i class="iconfont icon-zhuanfa1"></i></div>
            <div class="pl-1"><p>26</p></div>
          </el-button>
          <el-button color="red" round class="min-w-25">
            <div><i class="iconfont icon-xiaoxi" @click="pushComment"></i></div>
            <div class="pl-1"><p>26</p></div>
          </el-button>
          <el-button color="red" round class="min-w-25">
            <div><i class="iconfont icon-jiahaozhankai"></i></div>
            <div class="pl-1"><p>26</p></div></el-button
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-white h-full mt-3 rounded-md">
      <div class="mx-3 pt-3">
        <i class="iconfont icon-bofang text-red-500"></i>
        <span class="pl-3">播放全部 (191)</span>
      </div>
      <div v-for="item in 5" :key="item" class="border-b border-gray-100">
        <div class="flex justify-between py-3 mx-3">
          <div>
            <div class="flex items-center">
              <div>1</div>
              <div class="pl-2">
                <div>把回忆拼好给你</div>
                <div class="text-xs text-gray-400">陈奕迅</div>
              </div>
            </div>
          </div>
          <div><i class="iconfont icon-sandian"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const pushFind = () => {
  router.push('/find')
}
const pushComment = () => {
  router.push('/comment')
}
</script>
