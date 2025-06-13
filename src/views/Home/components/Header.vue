<template>
  <div class="flex items-center">
    <div>
      <i class="iconfont icon-caidan px-2" style="font-size: 20px" @click="drawer = true"></i>
    </div>
    <!-- 抽屉展示用户设置 -->
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
    <div class="flex bg-gray-200 rounded-[20px] items-center flex-1">
      <div><i class="iconfont icon-sousuo px-2"></i></div>
      <input placeholder="搜索音乐、视频、播客、歌词" class="py-1 w-full placeholder:text-xs" />
      <div><i class="iconfont icon-saomiaoerweima px-2"></i></div>
    </div>
    <div><i class="iconfont icon-maikefeng-xianxing px-2" style="font-size: 20px"></i></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)
const outLogin = () => {
  router.push('/login')
}
</script>
<style lang="scss">
.el-drawer__body {
  padding: 0;
}
.el-card__body {
  padding: 0;
  // border-radius: 20px;
}
</style>
