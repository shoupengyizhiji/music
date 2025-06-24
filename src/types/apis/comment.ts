export interface CommentItem {
  comments: {
    commentId: number
    content: string
    time: number
    timeStr: string
    likedCount: number
    user: {
      avatarUrl: string
      encryptUserId: string
      nickname: string
      userId: number
    }
  }[]
  totalCount: number
}
