<template>
  <div class="border-b border-gray-200">
    <div class="m-2">
      <div class="flex items-center mb-1">
        <h1 class="">{{ prop.playList?.uiElement?.subTitle?.title }}</h1>
        <i class="iconfont icon-jiantou2"></i>
      </div>
      <div class="box flex overflow-x-scroll pb-1.5">
        <div
          class="flex flex-col"
          v-for="item in prop.playList?.creatives"
          :key="item.creativeId"
          @click="router.push('/music')"
        >
          <div class="mr-2 w-30 h-30 shrink-0 scroll-auto flex flex-col justify-between">
            <!-- <img src="/src/assets/" alt="">/ -->
            <img :src="item.uiElement?.image?.imageUrl" alt="" class="h-full rounded-md" />
          </div>
          <div class="w-30 mt-1">
            <p class="text-xs">{{ item.uiElement?.mainTitle?.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const prop = defineProps({
  playList: {
    type: Object,
    default: null,
  },
})
</script>
