export interface SongItem {
  name: string
  id: number
  ar: {
    id: number
    name: string
    tns: []
  }[]
  al: {
    id: number
    name: string
    pic: number
    picUrl: string
    pic_str: string
    tns: string[]
  }
}
export interface PlayListItem {
  algTags: string[]
  commentCount: number
  coverImgUrl: string
  coverStatus: number
  creator?: {
    accountStatus: number
    anchor: boolean
    authStatus: number
    authenticationTypes: number
    authority: number
    avatarUrl: string
    backgroundUrl: string
    nickname: string
    userId: number
    userType: number
  }
  name: string
}
//url类型
export interface MusicUrlItem {
  br: number
  encodeType: string
  id: number
  musicId: number
  url: string
}
