import axios, { Axios } from 'axios'
const requestInstance = axios.create({
  baseURL: 'http://catseven.site',
  timeout: 5000,
})
//请求拦截器
requestInstance.interceptors.request.use(
  (config) => {
    const defaultData = {
      cookie:
        'MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/api/feedback; HTTPOnly;MUSIC_U=0072BC35A8C98FD7D752E97FBBF471F5622120A7B6C61A58B141D9C15134CD673F43926A89D6953995AD4D2BF13DC5CDE73D728A0591C549E43C8A28D0485BBB7CE4792CED4CB1F5EE0F437445075637A2C31A506A294B25B52922C86F2FEFD091F718FFAD1BB626EAD91E3CBAD09A2AE1D5B5218C9D2885F42515106831C8BAC1A7088C108800C59D7CB3011A95BF518B9C150E12D45BEBF68048C0E6230B7E1803F88744D8982CBD60A0B64980A4589BAC2785ACF608E4D2525FF3FBD0C5AD935BB77AC7DDD9594EBCE201CBCC8793FD6AC3D2B8A2F7D1F9D63B0F3FD34BF0ADA21EEB6E4AD34DA9B1DCFE5B93376DC6F4E396FCFE688F8867401B60D75DBAC662F87D28BBFCC932723A15A49B5BEE6F5C79B58915D7544BC14E9E0AE8CE397959BA38278043FE4424522D2E03C504BE; Max-Age=15552000; Expires=Sat, 08 Nov 2025 09:14:58 GMT; Path=/; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/neapi/clientlog; HTTPOnly;NMTID=00O0Mbt8UD_tutOKU1-rkakIwcFjZgAAAGWw8ao2Q; Max-Age=315360000; Expires=Thu, 10 May 2035 09:14:58 GMT; Path=/;;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1485325767662; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/api/feedback; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_R_T=1485325842710; Max-Age=2147483647; Expires=Sat, 30 May 2093 12:29:05 GMT; Path=/openapi/clientlog; HTTPOnly;__csrf=f79cff410aaa867af3c5a668835bf5dc; Max-Age=1296010; Expires=Tue, 27 May 2025 09:15:08 GMT; Path=/;;MUSIC_SNS=; Max-Age=0; Expires=Mon, 12 May 2025 09:14:58 GMT; Path=/',
      timestamp: Date.now(),
    }

    // POST/PUT/PATCH 请求：合并默认数据到请求体
    if (['post', 'put', 'patch'].includes((config.method || '').toLowerCase())) {
      config.data = {
        ...(config.data || {}),
        ...defaultData,
        // 合并用户传入的 data
      }
    }
    // GET 请求：合并到 params（或自行调整）
    else if (config.method?.toLowerCase() === 'get') {
      config.params = {
        ...(config.params || {}),
        ...defaultData,
      }         
    }
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
