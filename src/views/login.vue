<template>
  <div class="login-body">
    <div style="position: absolute;top: 1.4rem;left: 0.5rem;color: #ffffff">
      <div style="font-size: 0.5rem;line-height: 0.5rem">欢迎登录</div>
      <div style="font-size: 0.32rem;line-height: 0.32rem;margin-top: 0.15rem">项目全过程管理</div>
    </div>
    <div style="border-radius: 0.4rem;background-color: white;height: 100%;padding: 0.45rem 0.7rem">
      <div style="font-size: 0.46rem;font-weight: 600;">账号登录</div>

      <van-form @submit="onSubmit" validate-trigger="onSubmit">

        <van-field v-model="form.username" placeholder="请输入用户名"  :rules="[{ required: true, message: '请输入用户名' }]">
          <template slot="left-icon">
            <img src="@/assets/img/login-user.png" alt="" style="width: 0.24rem;vertical-align: middle">
          </template>
        </van-field>

        <van-field v-model="form.password" :type="password?'password':'text'" placeholder="请输入密码"  :rules="[{ required: true, message: '请输入密码' }]" @click-right-icon="password=!password">
          <template slot="left-icon">
            <img src="@/assets/img/login-password.png" alt="" style="width: 0.24rem;vertical-align: middle">
          </template>
          <template slot="right-icon">
            <van-icon :name="password?'closed-eye':'eye-o'" />
          </template>
        </van-field>

        <van-button native-type="submit" type="info" style="margin-top: 0.5rem;width: 100%;border-radius: 0.42rem">登录</van-button>

      </van-form>
    </div>
  </div>
</template>

<style lang="scss">
.login-body{
  padding-top: 3.6rem;
  height: 100%;
  background-image: url("@/assets/img/login-bg.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  .van-cell{
    background-color: #F6F8F9 ;
    border-radius: 1rem;
    margin-top: 0.4rem;
    //padding: 0.2rem 0.4rem;
    padding: 0 0.4rem;
    height: 0.88rem;

    .van-field__left-icon{
      margin-right: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .van-field__value{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .van-field__body{
      line-height: 0.32rem;
    }
    .van-field__error-message{
      line-height: 0.26rem;
      font-size: 0.26rem;
      margin-top: 0.1rem;
    }
  }

}
</style>

<script>
export default {
  name:'loginPage',
  data(){
    return{
      form:{
        username:'',
        password:'',
      },
      password:true,
    }
  },
  mounted() {
    if(localStorage.getItem('token')){
      this.getUserInfo().then(()=>{
        //路由跳转
        this.$router.replace('/home')
      })
    }
  },

  methods:{
    onSubmit(){
    },
  }
}

</script>
