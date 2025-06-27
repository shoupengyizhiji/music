import type { HttpResponse } from '@/types/apis'
import type { SongItem, PlayListItem, MusicUrlItem } from '@/types/apis/song'
import request from '@/utils/request'
interface SongResponse extends HttpResponse {
  songs: SongItem[]
}
interface MusicUrlResponse extends HttpResponse {
  data: MusicUrlItem[]
}
export interface DynamicItem {
  code: number
  bookedCount: number
  commentCount: number
  followed: boolean
  gradeStatus: string
  playCount: number
  score: string
  shareCount: number
  subscribed: boolean
}

export interface PlayListDetail extends HttpResponse {
  playlist: PlayListItem
}
//获取相关歌曲
export const getSongsService = (id: number): Promise<SongResponse> => {
  return request({
    url: '/playlist/track/all',
    method: 'get',
    params: {
      id,
    },
  })
}
//获取转发、评论、收藏
export const getDynamicService = (id: number): Promise<DynamicItem> => {
  return request({
    url: '/playlist/detail/dynamic',
    method: 'get',
    params: {
      id: id,
    },
  })
}
//获取歌单动态详情
export const getDetailService = (id: number): Promise<PlayListDetail> => {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params: {
      id,
    },
  })
}
//获取音乐url
export function getMusicUrlService(id: number, br: number = 999000): Promise<MusicUrlResponse> {
  return request({
    url: '/song/url',
    method: 'get',
    params: {
      id,
      br,
    },
  })
}
//判断歌曲是否可用
export function getCheckMusicService(id: number, br: number = 999000): promises<HttpResponse> {
  return request({
    url: '/check/music',
    method: 'get',
    params: {
      id,
      br,
    },
  })
}
