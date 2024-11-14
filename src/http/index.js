import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Qs from 'qs';
import { Toast } from 'vant';
Vue.use(VueAxios, axios)

// axios的default默认配置
axios.defaults.baseURL = window.serverConfig.VUE_APP_BASE_API;
axios.defaults.withCredentials = false;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Authorization'] = (localStorage.getItem('token')) || '';
console.log('token初始化',axios.defaults.headers['Authorization'])
axios.defaults.timeout = 600000;

// 数据转换器
axios.defaults.transformRequest = function (data, headers) {
    if (headers['Content-Type'] === 'multipart/form-data') {
        // 当请求头为Content-Type时，浏览器会自动检测，并将传入的data对象转换为formData对象，无需自行转换
        let formData = new FormData()
        for(let key of Object.keys(data)){
            formData.append(key,data[key])
        }
        return formData;
    } else if(headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8'){
        return Qs.stringify(data);
    } else {
        return JSON.stringify(data);
    }
};

axios.interceptors.request.use(config => {
    // console.log('前token',localStorage.getItem('token'))
    // 如果没有自行配置，就从vuex的state中读取token
    if (!config.headers['Authorization']) {
        config.headers['Authorization'] = 'Bearer ' + (localStorage.getItem('token')) || '';
    }
    return config
}, error => {
    return  Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(
    res => {
        if(res.data.code !== 200 ){
            Toast(res.data.msg)
            if(res.data.code === 401){
                console.log('触发401跳转去login')
                localStorage.removeItem('token')
                location.href = '/login'
            }
        }
        return res.data
    },
    error => {
        console.log(error)
        Toast(error)
        return Promise.reject(error)
    }
)


export default axios



