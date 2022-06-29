import axios from 'axios'

//axios的实例对象
// axios.request({
//   method: 'GET'
// })

//等同于,模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

//get请求并且传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// //post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//promise本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve('123')
// }).then((res) => {
//   console.log(res.length)
// })

//axios配置选项
//全局的配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

//没个请求单独的配置
//get请求并且传入参数
axios
  .get('/get', {
    params: {
      name: 'coderwhy',
      age: 18
    },
    timeout: 50000
  })
  .then((res) => {
    console.log(res.data)
  })

//post请求
axios
  .post('/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

//axios.all -> 多个请求数据一起返回
axios
  .all([
    axios.get('/get', {
      params: {
        name: 'coderwhy',
        age: 18
      }
    }),
    axios.post('/post', {
      data: {
        name: 'coderwhy',
        age: 18
      }
    })
  ])
  .then((res) => {
    console.log(res)
  })

//axios拦截器
//fn1；请求发送成功会执行的函数
//fn2；请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    //1.给请求添加token
    //2.isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发生错误')
    return err
  }
)
//fn1:服务器正常的返回了数据（20x）
axios.interceptors.response.use(
  (res) => {
    console.log('相应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器相应失败')
    return err
  }
)
