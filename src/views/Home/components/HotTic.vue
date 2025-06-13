<template>
  <div class="border-b pb-3 border-gray-200">
    <div class="py-1"><p>热门话题</p></div>
    <div class="bg-linear-to-r from-red-400 to-pink-400 max-w-60 rounded-md">
      <div class="p-2" v-for="item in props.hotTicData" :key="item.actId">
        <div>
          <p>{{ item.title }}</p>
        </div>
        <div class="text-xs">
          <p>{{ item.participateCount }}万热度</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-xs">
            <p>{{ item.text?.[0] }}</p>
          </div>
          <div class="aspect-square h-8 w-8"><img :src="item.sharePicUrl" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import type { HotTopic } from '@/types/apis'

const props = defineProps({
  hotTicData: {
    type: Array<HotTopic>,
    default: [],
  },
})
</script>
