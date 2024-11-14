import Vue from 'vue';
import Router from 'vue-router';
import { Toast } from 'vant';
// 全局挂载路由插件
Vue.use(Router);

const router = new Router({
    mode:'history',
    // base:'/project-process/h5/',
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        // 登录页
        {
            path:'/login',
            name:'Login',
            component:()=> import('@/views/login.vue')
        },
    ]
})

router.beforeEach((to,from,next)=>{
    console.log(to,from)
    if(to.path === '/login' || localStorage.getItem('token')) next()

    else {
        console.log('未登录，请先登录')
        Toast('未登录，请先登录')
        next('/login')
    }
})

export default router
