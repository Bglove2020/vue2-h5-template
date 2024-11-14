<template>
  <div id="app">
    <keep-alive :include="[]">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    if(localStorage.getItem('token')) this.getUserInfo()
  },
  methods:{
  }
}
</script>

<style src="@/assets/style/index.scss" lang="scss"></style>
<style>
#app{
  height: 100%;
  font-size: 0.28rem;
  font-weight: 500;
  color: #3E3E59 ;
  background-color:#F6F8F9 ;
}
</style>
