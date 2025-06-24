import request from '@/utils/request'
import type { HttpResponse } from '@/types/apis'
import type { CommentItem } from '@/types/apis/comment'
interface CommentResponse extends HttpResponse {
  data: CommentItem
}
export interface CommentData {
  id: number
  type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  sortType?: 1 | 2 | 3
  pageNo?: number
  pageSize?: number
}
export function getCommentService(data: CommentData): Promise<CommentResponse> {
  return request({
    url: '/comment/new',
    method: 'GET',
    params: data,
  })
}
