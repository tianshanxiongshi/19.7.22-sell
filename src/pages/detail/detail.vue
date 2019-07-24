<template>
    <div class="detail">
      <div class="detail_back">
        <span class="iconfont icon-xiala xiala" @click="goTo"></span>
      </div>
      <div class="detail_top" v-for="item in list">
        <img src="./images/img-idx.png"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
      data(){
          return{
            list:10,
          }
      },
      methods:{
          goTo(){
            this.$router.replace('/home')
          }
      }
    }
</script>

<style lang="scss" scoped>
    .detail{
      width: 7.5rem;
      height: auto;
      overflow: hidden;
      .detail_back{
        float: left;
        width: 100%;
        height: 1rem;
        .xiala{
          float: left;
          width: 1rem;
          line-height: 1rem;
          font-size: 0.56rem;
          color: #a71d5d;
          text-align: center;
        }
      }
      .detail_top{
        float: left;
        width: 100%;
        height: 4.56rem;
        overflow: hidden;
        img{
          display: block;
          margin: 0 auto;
          width: 6.7rem;
          height: 6.66rem;
        }
      }
    }
</style>
