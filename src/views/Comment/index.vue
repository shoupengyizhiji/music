<template>
  <div class="flex flex-col h-screen">
    <div class="flex items-center">
      <i class="iconfont icon-zuojiantou p-3" @click="pushMusic"></i>
      <p>评论（900）</p>
    </div>
    <div class="flex-1 bg-gray-50 overflow-y-auto">
      <div class="mt-0.5 p-3 bg-white">
        <div class="flex justify-between">
          <p>评论区</p>
          <ul class="flex items-center">
            <li class="px-2.5">推荐</li>
            <li class="px-2.5">最热</li>
            <li class="px-2.5">最新</li>
          </ul>
        </div>
        <div class="p-3 flex" v-for="item in 10" :key="item">
          <div class="w-7.5 h-7.5">
            <img class="rounded-full aspect-square" src="@/assets/imgs/log.jpg" alt="" />
          </div>
          <div class="w-full">
            <div class="flex justify-between items-center">
              <div>我不是悲伤情绪海</div>
              <div class="pl-3 text-xs text-gray-400">时间</div>
            </div>
            <div class="py-1.5">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
            <div class="flex justify-end">
              <i class="iconfont icon-xiaoxitishi pl-2 mr-1"></i>
              <i class="iconfont icon-dianzan pl-2 mr-1"></i>
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
import { useRouter } from 'vue-router'
const router = useRouter()
const pushMusic = () => {
  router.push('/music')
}
</script>
