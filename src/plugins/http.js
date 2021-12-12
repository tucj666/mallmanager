// axios插件开发
import axios from 'axios'

const MyServerHttp = {}

MyServerHttp.install = (Vue) => {
  
    // 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      Vue.prototype.$http = axios
    }
  }

  export default MyServerHttp