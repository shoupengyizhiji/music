<template>
  <div class="border-b pb-3 border-gray-200">
    <div class="py-1">
      <p>{{ props.hotTicData?.uiElement?.subTitle?.title }}</p>
    </div>
    <div class="flex overflow-x-scroll">
      <div
        class="bg-linear-to-r from-red-400 to-pink-400 min-w-60 rounded-md mr-2 last:mr-0 p-2"
        v-for="item in props.hotTicData?.creatives
          ?.map((item) =>
            item.resources.map((item) => ({ i: item.uiElement, j: item.resourceExtInfo })).flat(),
          )
          .flat()"
        :key="item"
      >
        <div>
          <p>{{ item.i?.mainTitle?.title }}</p>
        </div>
        <div class="text-xs overflow-clip">
          <p>{{ item.i?.subTitle?.title }}</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-xs overflow-hidden whitespace-nowrap">
            <p>{{ item.j?.eventMsg }}</p>
          </div>
          <div class="aspect-square h-8 w-8"><img v-lazy="item.j?.user?.avatarUrl" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
// import type { HomepageBlock } from '@/types/apis'

const props = defineProps({
  hotTicData: {
    type: Object,
    default: null,
  },
})
</script>
