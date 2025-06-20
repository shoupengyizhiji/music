<template>
  <div class="flex">
    <div
      class="flex-1 flex flex-col justify-center items-center"
      v-for="(item, index) in icons"
      :key="index"
      @click="isActive = index"
    >
      <div>
        <i
          class="iconfont leading-none"
          :class="`${item.icon} ${isActive == index ? 'active_font' : ''}`"
          style="font-size: 23px"
        ></i>
      </div>
      <div class="leading-none text-xs">{{ item.name }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const isActive = ref(0)
const icons = [
  { name: '发现', icon: 'icon-faxian' },
  { name: '推荐', icon: 'icon-yinle1' },
  { name: '笔记', icon: 'icon-a-xiaoxibiji' },
  { name: '我的', icon: 'icon-wode' },
]
const router = useRouter()
const pushMy = () => {
  router.push('/my')
}
const selectId = ref(0)
// const pushFind = (a, e) => {
//   console.log(e)
//   router.push('/find')
// }
</script>

<style lang="scss" scoped>
.active_bg {
  background-color: red;
  color: #fff;
}
.active_font {
  color: red;
}
</style>
