<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
        <footer-guide v-show="$route.meta.showFooter"></footer-guide>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <!--<svg-icon></svg-icon>	-->
  </div>
</template>

<script>
  import footerGuide from './components/footerGuide/footerGuide';
export default {
  components:{
    "footer-guide":footerGuide
  },
}
</script>

<style lang="scss">
  @import './style/common';
  @import "./iconfont/iconfont.css";
  @import "./style/mixin";
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
