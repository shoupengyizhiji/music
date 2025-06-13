<template>
  <div class="bg-gray-100 h-full flex flex-col">
    <div class="flex items-center py-2 border-b border-gray-100">
      <div>
        <i class="iconfont icon-zuojiantou px-2" style="font-size: 20px" @click="pushMy"></i>
      </div>
      <div class="flex bg-gray-200 rounded-[20px] items-center flex-1">
        <div><i class="iconfont icon-sousuo px-2"></i></div>
        <input placeholder="搜索音乐、视频、播客、歌词" class="py-1 w-full placeholder:text-xs" />
        <div><i class="iconfont icon-saomiaoerweima px-2"></i></div>
      </div>
      <div class="px-1"><button>搜索</button></div>
    </div>
    <div class="flex-1">
      <div class="flex overflow-x-auto">
        <el-card class="min-w-60 mr-2 last:mr-0">
          <template #header>
            <div class="card-header">
              <span>热歌榜</span>
            </div>
          </template>
          <div class="p-4 flex justify-between" v-for="item in 10" :key="item">
            <p>两难</p>
            <i class="iconfont icon-jiantou2"></i>
          </div>
        </el-card>
        <el-card class="min-w-60 mr-2 last:mr-0">
          <template #header>
            <div class="card-header">
              <span>热歌榜</span>
            </div>
          </template>
          <div class="p-4 flex justify-between" v-for="item in 10" :key="item">
            <p>两难</p>
            <i class="iconfont icon-jiantou2"></i>
          </div>
        </el-card>
        <el-card class="min-w-60 mr-2 last:mr-0">
          <template #header>
            <div class="card-header">
              <span>热歌榜</span>
            </div>
          </template>
          <div class="p-4 flex justify-between" v-for="item in 10" :key="item">
            <p>两难</p>
            <i class="iconfont icon-jiantou2"></i>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const pushMy = () => {
  router.push('/my')
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
