import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        userInfo:{},
    },
    mutations:{
        // 更新用户信息
        setUserInfo:(state,payload)=>{
            state.userInfo = payload
        },
    },
    actions:{

    },
    getters:{

    },
})


