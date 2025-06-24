<template>
  <div class="px-2">
    <Banner :bannerList="bannerList"></Banner>
    <PlayList :playList="playListitem || {}"></PlayList>
    <!-- {{ hotTicData }} -->
    <HotTic :hotTicData="hotTicData || []"></HotTic>
    <PlayList :playList="radarListitem || {}" title="私人雷达"></PlayList>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getBannerService, getPageService, getHotService } from '@/apis/find'
import PlayList from './PlayList.vue'
import Banner from './Banner.vue'
import type { HomepageBlock, HotTopic } from '@/types/apis'
import HotTic from './HotTic.vue'

const router = useRouter()
//获取轮播图数据
const bannerList = ref<[{ pic: string; bannerId: string }]>()
//歌单推荐数据
const playListitem = ref<HomepageBlock | null>()
//雷达歌单数据
const radarListitem = ref<HomepageBlock | null>()
//热门话题数据
const hotTicData = ref<HomepageBlock | null>()

const getBannerList = async () => {
  const { banners } = await getBannerService(2)
  bannerList.value = banners
}
//获取首页数据
const getPage = async () => {
  const { data } = await getPageService()
  data.blocks.forEach((item) => {
    switch (item.blockCode) {
      //歌单推荐
      case 'HOMEPAGE_BLOCK_PLAYLIST_RCMD':
        playListitem.value = item
        // console.log(item)
        // console.log(item.uiElement?.subTitle.title)
        // console.log(playListitem.value)
        break
      //雷达歌单
      case 'HOMEPAGE_BLOCK_MGC_PLAYLIST':
        radarListitem.value = item
        break
      //热门话题
      case 'HOMEPAGE_BLOCK_HOT_TOPIC':
        hotTicData.value = item
        break
    }
  })
}
//获取热门话题

onMounted(() => {
  getBannerList()
  getPage()
})
</script>
<style lang="scss">
.butten_block {
  .el-carousel__button {
    width: 5px;
  }
  .el-carousel__container {
    height: 150px;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.box::-webkit-scrollbar {
  display: none;
}
</style>
