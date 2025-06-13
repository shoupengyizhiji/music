import axios, { Axios } from 'axios'
const requestInstance = axios.create({
  baseURL: 'http://catseven.site',
  timeout: 5000,
})
//请求拦截器
requestInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => Promise.reject(e),
)
//响应拦截器
requestInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e)
  },
)
export default requestInstance
