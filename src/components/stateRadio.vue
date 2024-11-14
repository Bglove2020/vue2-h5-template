<template>
  <div class="state-radio" style="">

    <div v-for="(item,index) in radioList" :key="index" class="item"  @click="handleClick(item.value)" :class="{active:value === item.value}">
      {{radioList[index].label}}
      <img v-if="value === item.value" src="@/assets/img/correct.png" alt="" class="bottom-correct">
    </div>
<!--    <div class="item" style="" @click="handleClick(2)" :class="{active:state === 2}">-->
<!--      {{radioList[1].label}}-->
<!--      <img v-if="state === 2" src="@/assets/img/correct.png" alt="" class="bottom-correct">-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name:'stateRadio',
  props:['value','radioList'],

  data(){
    return{
      // state:this.value,
    }
  },
  methods:{
    handleClick(value){
      // this.state = value
      this.$emit('input',value)
    }
  }
}
</script>

<style scoped lang="scss">
.state-radio{
  display: flex;
  gap: 0.3rem;
  color: #3E3E59;
  .item{
    padding: 0.02rem 0.2rem 0.02rem 0.2rem;
    position: relative;
    border: 0.02rem solid #EAEAEA;
    border-radius: 0.1rem;
  }
  .active{
    background-color: #EDF8FF;
    border: 0.02rem solid #A4D5FF;
    color: #38A0FA;
  }
  .bottom-correct{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.3rem;
  }
}
</style>
