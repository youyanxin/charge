<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '../static/fontResize'
export default {
  name: 'app'
}
</script>

<style lang="less">
@import './assets/style/common.less';
@import './assets/font/iconfont.css';
@import './assets/style/mixin.less';
[v-cloak] {
  display: none;
}
@font-face{
  font-family: "PingFang";
  src:url("./assets/font/PingFang Regular.ttf");
}
#app {
  .mx_wh(100%,100%);
  font-family: "PingFang";
}
</style>
