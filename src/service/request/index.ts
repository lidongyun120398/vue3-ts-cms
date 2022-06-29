import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

//当传入的baseURL或者其他信息有变化的时候，通过创建两个实例的方法完成请求
class HYRequest {
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
  // get(){}
}

export default HYRequest
