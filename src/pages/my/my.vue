<template>
    <div class="my">
      <hearder-top title="我的" />
      <router-link to="/login">
      <div class="my_deng" >
         <span>登录</span>
         <span>注册</span>
      </div>
      </router-link>
    </div>
</template>

<script>
  import hearderTop from "../../components/hearderTop/hearderTop"
    export default {
        name: "my",
      components:{
          hearderTop
      }

    }
</script>

<style lang="scss" scoped>
   .my{
     width: 7.5rem;
     height: auto;
     overflow: hidden;
     .my_deng{
       width: 100%;
       height: auto;
       span{
         width: 100%;
         height: 1rem;
         display: block;
         text-align: center;
         line-height: 1rem;
         font-size: 0.56rem;

       }

     }
   }
</style>
