//接口调用返回类型
export interface HttpResponse {
  code: number
  message?: string
}
export interface ResourceItem {
  action: string
  actionType: string
  alg: string
  logInfo: string
  resourceExtInfo?: {
    hasListened: boolean
    highQuality: boolean
    playCount: number
    specialType: number
  }
  resourceId: string
  resourceType: string
  uiElement: {
    image: {
      imageUrl: string
    }
    labelTexts: string[]
    mainTitle: {
      canShowTitleLogo: boolean
      title: string
    }
  }
  valid: boolean
}
export interface UiElement {
  image: {
    imageUrl: string
    purePicture: boolean
  }
  labelText: {
    text: string
  }
  mainTitle: {
    canShowTitleLogo: boolean
    title: string
  }
}

export interface CreativesItem {
  creativeID: string
  resources: ResourceItem[]
  uiElement?: UiElement[]
}
//首页数据返回类型
export interface HomepageBlock {
  action: string
  actionType: string
  blockCode:
    | 'HOMEPAGE_BLOCK_PLAYLIST_RCMD'
    | 'HOMEPAGE_BLOCK_STYLE_RCMD'
    | 'HOMEPAGE_BLOCK_MGC_PLAYLIST'
    | 'HOMEPAGE_BLOCK_LISTEN_LIVE'
    | 'HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG'
  blockDemote: boolean
  blockStyle: number
  canClose: boolean
  canFeedback: boolean
  creatives?: CreativesItem[]
  dislikeShowType: number
  extInfo: object
  showType: string
  sort: number
  uiElement?: {
    subTitle: {
      canShowTitleLogo: false
      title: string
    }
    button: {
      text: string
    }
  }
}
//热门话题数据返回类型
export interface HotTopic {
  actId: number
  participateCount: number
  sharePicUrl: string
  text?: string[]
  title: string
}
