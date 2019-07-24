<template>
    <div class="giftList">
      <div class="list_d" v-for="item in list">
        <div class="d_image">
          <img src="./images/img-idx.png" class="images"/>
        </div>
        <div class="d_detail">
          <p class="p_1">垃圾桶</p>
          <p class="p_2">
            <span>价格</span>
            <span class="sp_1">
              <i>&yen</i>
              <i>100</i>
            </span>
          </p>
          <p class="p_3" @click="goTo">选择</p>
        </div>
      </div>
      <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        name: "giftList",
      data(){
          return {
            list:10,
          }
      },
      methods:{
           goTo(){
             this.$router.replace("/detail")
           }
      },
      mounted() {

      }
    }
</script>

<style lang="scss" scoped>
  .giftList{
    width: 7.5rem;
    height: auto;
    overflow: hidden;

    .footer{
      width: 100%;
      height: 2rem;
    }
    .list_d{
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 1rem;
      .d_image{
        width: 3rem;
        height: 3rem;
        float: left;
        .images{
          width: 100%;
          height: 100%;
        }
      }
      .d_detail{
        float: left;
        margin-left: 0.1rem;
        .p_1{
          font-size: 0.56rem;
        }
        .p_2{
          font-size: 0.36rem;
          color: #a71d5d;
          span{
            width: 50%;
            float: left;
          }
          .sp_1{
            float: right;
          }
        }
        .p_3{
          font-size: 0.48rem;
          color: #55a532;
        }
        p{
          float: left;
          width: 100%;
          height: 1rem;
          line-height: 1rem;
          text-align: left;

        }

      }
    }
  }
</style>
