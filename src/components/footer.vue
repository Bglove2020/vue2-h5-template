<template>
  <div class="footer-body">
    <div v-for="(item,index) in routerList" :key="index" class="footer-inner-body" @click="$router.push(item.to)">
      <div v-if="index === activeIndex" class="footer-item active-item">
        <van-badge v-if="index ===2 && $store.state.noReadMessageNum !== 0" dot>
          <img :src="item.activeIcon" alt="">
        </van-badge>
        <img v-else :src="item.activeIcon" alt="">
        <div>{{item.content}}</div>
      </div>
      <div v-else class="footer-item">
        <van-badge v-if="index ===2 && $store.state.noReadMessageNum!==0 " dot>
          <img :src="item.icon" alt="">
        </van-badge>
        <img v-else :src="item.icon" alt="">
        <div>{{item.content}}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:'pageFooter',
  props:['activeIndex'],
  data(){
    return{
      routerList:[
        {to:'/home',icon:require('@/assets/img/footer-home.png'),activeIcon:require('@/assets/img/footer-home-active.png'),content:'首页'},
        {to:'/work',icon:require('@/assets/img/footer-work.png'),activeIcon:require('@/assets/img/footer-work-active.png'),content:'工作'},
        {to:'/notice',icon:require('@/assets/img/footer-notice.png'),activeIcon:require('@/assets/img/footer-notice-active.png'),content:'消息'},
        {to:'/my',icon:require('@/assets/img/footer-my.png'),activeIcon:require('@/assets/img/footer-my-active.png'),content:'我的'},
      ]
    }
  }
}

</script>

<style lang="scss">
.footer-body{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1rem;
  background: white;
  font-weight: 400;

  display: flex;
  align-items: center;

  .footer-inner-body{
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-item{
    text-align: center;
    font-size: 0.26rem;
    img{
      height: 0.4rem;
    }
  }

}
</style>
