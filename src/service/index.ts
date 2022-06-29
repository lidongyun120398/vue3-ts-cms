//service的统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

//与第一个请求因为baseURl不同所以产生了两个实例
// export const hyRequest2 = new HYRequest({
//   baseURL: '地址2'
// })

export default hyRequest
