import request from '@/utils/request'
import type { HttpResponse, CreativesItem, HomepageBlock, HotTopic } from '@/types/apis'

interface BannerResponse extends HttpResponse {
  banners: [
    {
      pic: string
      bannerId: string
    },
  ]
}
interface HomeResponse extends HttpResponse {
  data: {
    blocks: HomepageBlock[]
  }
}
interface HotResponse extends HttpResponse {
  hot: HotTopic[]
}

//获取轮播图数据
export const getBannerService = (type?: 0 | 1 | 2 | 3): Promise<BannerResponse> => {
  return request({
    url: 'banner',
    method: 'get',
    params: {
      type,
    },
  })
}
//获取歌单页面数据
export const getPageService = (refresh: boolean = false): Promise<HomeResponse> => {
  return request({
    url: 'homepage/block/page',
    method: 'get',
    params: {
      refresh,
    },
  })
}
//获取热门话题数据
export const getHotService = (): Promise<HotResponse> => {
  return request({
    url: '/hot/topic',
    method: 'get',
  })
}
