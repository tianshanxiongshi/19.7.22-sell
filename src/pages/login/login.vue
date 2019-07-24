<template>
   <div class="login">
     <div class="login_top" @click="$router.back()">
       <span class="icon-xiala iconfont"></span>
     </div>
     <div class="login_may">
       <span :class="{spanOne:zdyClass}" @click="setColor">登录</span>
       <span :class="{spanOne:zdyClassOne}" @click="setColor">注册</span>
     </div>
   </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            zdyClass:true,
            zdyClassOne:false,
          }
      },
      methods:{
        setColor(){
          this.zdyClass=!this.zdyClass;
          this.zdyClassOne=!this.zdyClassOne;
        },
      }
    }
</script>

<style lang="scss" scoped>
  .login{
    width: 7.5rem;
    height: auto;
    overflow: hidden;
    .login_top{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: left;
      span{
        width: 1rem;
        height: 1rem;
        color: #42b983;
      }
    }
    .login_may{
      width: 100%;
      height: auto;

      span{
        float: left;
        width: 50%;
        height: 1rem;
        text-align: center;
        font-size: 0.56rem;
      }
      .spanOne{
        color: #42b983;
      }
      .spanTwo{
        color:#000000;
      }
    }
  }
</style>
