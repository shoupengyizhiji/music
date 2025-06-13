<template>
  <div class="flex">
    <div class="flex-1 flex flex-col justify-center items-center">
      <div><i class="iconfont icon-faxian leading-none" style="font-size: 23px"></i></div>
      <div class="leading-none text-xs active_font">发现</div>
    </div>
    <div class="flex-1 flex flex-col justify-center items-center" data-id="2">
      <div><i class="iconfont icon-yinle1 leading-none" style="font-size: 20px"></i></div>
      <div class="leading-none text-xs">推荐</div>
    </div>
    <div class="flex-1 flex flex-col justify-center items-center">
      <div class="rounded-full active_bg">
        <i class="iconfont icon-a-xiaoxibiji leading-none" style="font-size: 20px"></i>
      </div>
      <div class="leading-none text-xs active_font">笔记</div>
    </div>
    <div class="flex-1 flex flex-col justify-center items-center" @click="pushMy">
      <div><i class="iconfont icon-wode leading-none" style="font-size: 20px"></i></div>
      <div class="leading-none text-xs">我的</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

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
