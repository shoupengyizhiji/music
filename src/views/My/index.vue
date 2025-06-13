<template>
  <div class="flex justify-between mt-1">
    <i class="iconfont icon-caidan px-2" style="font-size: 20px" @click="drawer = true"></i>
    <el-drawer v-model="drawer" direction="ltr" :with-header="false" size="80%">
      <div class="bg-gray-50 flex flex-col h-full">
        <div class="flex justify-between items-center mx-3 mt-2">
          <div class="flex items-center">
            <div>
              <i class="iconfont icon-lujing mr-4" style="font-size: 25px"></i>
            </div>
            <div class="">
              <p v-if="false">雨夹雪柔和粉乌龙奶茶</p>
              <p v-else>立即登录</p>
            </div>
            <div class=""><i class="iconfont icon-jiantou2"></i></div>
          </div>
          <div><i class="iconfont icon-saomiaoerweima"></i></div>
        </div>
        <div class="flex-1 ml-3 mr-1 overflow-auto pr-2">
          <el-card class="mt-2 shadow">
            <div class="border-b border-gray-300 mx-4 last:border-b-0 flex justify-between p-1">
              <div class="flex">
                <i class="iconfont icon-lujing mr-1"></i>
                <p>我的消息</p>
              </div>
              <div><i class="iconfont icon-jiantou2"></i></div>
            </div>
            <div class="border-b border-gray-300 mx-4 last:border-b-0 flex justify-between p-1">
              <div class="flex">
                <i class="iconfont icon-lujing mr-1"></i>
                <p>我的云贝</p>
              </div>
              <div><i class="iconfont icon-jiantou2"></i></div>
            </div>
          </el-card>
          <el-card class="mt-2 shadow">
            <div class="border-b-1 border-gray-300 pl-3"><p class="pl-1">其他</p></div>
            <div class="border-b border-gray-300 mx-4 last:border-b-0 flex justify-between p-1">
              <div class="flex">
                <i class="iconfont icon-lujing mr-1"></i>
                <p>设置</p>
              </div>
              <div><i class="iconfont icon-jiantou2"></i></div>
            </div>
            <div class="border-b border-gray-300 mx-4 last:border-b-0 flex justify-between p-1">
              <div class="flex">
                <i class="iconfont icon-lujing mr-1"></i>
                <p>深色模式</p>
              </div>
              <div><i class="iconfont icon-jiantou2"></i></div>
            </div>
          </el-card>

          <el-card class="mt-2 shadow" @click="outLogin">
            <div class="text-center p-1 text-red-500">
              <p>退出登录/关闭</p>
            </div>
          </el-card>
        </div>
      </div>
    </el-drawer>
    <i class="iconfont icon-sousuo px-2" style="font-size: 20px" @click="pushSearch"></i>
  </div>
  <div class="flex-1 overflow-auto bg-gray-100">
    <div class="mx-3 mt-3 bg-white py-3 flex flex-col justify-center items-center rounded-md">
      <i class="iconfont icon-lujing mr-1 leading-none" style="font-size: 60px"></i>
      <h1 class="text-xl font-bold leading-none">立即登录</h1>
    </div>
    <div class="mx-3 mt-3 bg-white flex items-center p-3 rounded-md">
      <div class="h-10 w-10 aspect-square leading-none">
        <img src="@/assets/imgs/log.jpg" alt="" />
      </div>
      <div class="pl-3 flex-1 flex justify-between items-center">
        <div>
          <p>喜欢的音乐</p>
          <p>0首</p>
        </div>
        <div class="border p-1 rounded-4xl text-xs border-red-200 bg-red-200 text-red-500">
          <p>心动模式</p>
        </div>
      </div>
      <div></div>
    </div>
    <div>
      <div class="flex justify-center">
        <div class="p-2.5 border-b">
          <p>创建歌单</p>
        </div>
        <div class="p-2.5">
          <p>收藏歌单</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const drawer = ref(false)
const router = useRouter()
const pushSearch = () => {
  router.push('/search')
}
const outLogin = () => {
  router.push('/login')
}
</script>
