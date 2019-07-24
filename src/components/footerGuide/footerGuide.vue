<template>
    <div class="footer_guide">
      <div class="footer">
        <div class="footer_line"></div>
        <div @click="goTo('/home')"  >
          <span class="iconfont icon-xiala tubiao" :class="{setColor: '/home'===$route.path}"></span>
          <span  :class="{setColor:  '/home'===$route.path}"> 首页</span>
        </div>
        <div @click="goTo('/details')">
          <span class="iconfont icon-xiala tubiao" :class="{setColor:'/details'===$route.path}"></span>
          <span  :class="{setColor:'/details'===$route.path}">详情</span>
        </div>
        <div @click="goTo('/business')">
          <span class="iconfont icon-xiala tubiao" :class="{setColor:'/business'===$route.path}"> </span>
          <span :class="{setColor:'/business'===$route.path}">商圈</span>
        </div>
        <div @click="goTo('/my')">
          <span class="iconfont icon-xiala tubiao" :class="{setColor:'/my'===$route.path}"></span>
          <span :class="{setColor:'/my'===$route.path}">我的</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
     data(){
       return{

       }

     },
      mounted() {
      },
      methods:{
        goTo(path){
          this.$router.replace(path);
        },
      },
      components:{

      },
    }
</script>

<style lang="scss" scoped>
   .footer_guide{
     width: 7.5rem;
     height: auto;
     overflow: hidden;
     .footer{
       position: fixed;
       left: 0;
       bottom:0;
       float: left;
       width: 100%;
       height: auto;
       display: flex;
       flex-direction:row;
       background-color: #3190e8;
       /*border-top: 0.01rem solid #8E8E93;*/
       .footer_line{
         position: absolute;
         top: 0;
         left: 0;
         float: left;
         width: 100%;
         height: 0.01rem;
         background-color: #8E8E93;
         transform: rotateX(90.1deg);
       }
       div{
         height: auto;
         width: 25%;

         span{
           width: 100%;
           height: 1rem;
           display: block;
           line-height: 1rem;
           font-size: 0.56rem;
           text-align: center;
         }
         .tubiao{
           height: 0.5rem;
           line-height: 0.5rem;
         }

       }
     }
   }
   .setColor{
     color: #63a35c;

   }
</style>
