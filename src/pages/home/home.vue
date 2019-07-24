<template>
    <div class="idx">
      <hearder-top title="深圳市宝安区西乡盐田街">
        <span slot="left" class="icon-xiala iconfont xiala"></span>
        <span slot="right" class="denglu">登录注册</span>
      </hearder-top>
      <div>怀化风景</div>
      <giftList></giftList>
    </div>
</template>

<script>
    import HearderTop from "../../components/hearderTop/hearderTop";
    import giftList from "../../components/giftList/giftList"
    export default {
        name: "home",
      components: {
          HearderTop,
          giftList
      }
    }
</script>

<style lang="scss" scoped>
  .idx{
    width: 7.5rem;
    height: auto;
    .xiala{
      position: absolute;
      left: 0;
      width: 1rem;
      line-height: 1rem;
    }
    .denglu{
      position: absolute;
      right:0;
      top: 0;
      width: 1.5rem;
      line-height: 1rem;
      font-size: 0.36rem;
    }
    div{
      width: 100%;
      height: auto;
      font-size: 0.5rem;
      line-height: 1rem;
      text-align: center;
    }
  }
</style>
