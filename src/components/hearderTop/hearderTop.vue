<template>
    <div class="header">
      <slot name="left"></slot>
      <span>{{title}}</span>
      <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "hearderTop",
      props:{title:''}
    }
</script>

<style lang="scss" scoped>
   .header{
     width: 7.5rem;
     height: 1rem;
     background-color: #3190e8;
     span{
       width: 4rem;
       height: 1rem;
       line-height: 1rem;
       display: block;
       margin: 0 auto;
       font-size: 0.36rem;
       text-align: center;
       color: #F7F7F7;
       overflow: hidden;
     }
   }
</style>
