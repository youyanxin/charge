<template>
  <div id="app">
    <!-- <loading v-model="isLoading"></loading> -->
    <router-view></router-view>
  </div>
</template>

<script>
import '../static/fontResize'
import {
  Loading
} from 'vux'
export default {
  name: 'app',
  components: {
    Loading
  },
  // computed: {
  //   isLoading() {
  //     return this.$store.state.isLoading;
  //   }
  // }
}
</script>

<style lang="less">
@import './assets/style/common.less';
@import './assets/font/iconfont.css';
@import './assets/style/mixin.less';
[v-cloak] {
  display: none;
}

@font-face {
  font-family: "PingFang";
  src: url("./assets/font/PingFang Regular.ttf");
}

#app {
  .mx_wh(100%,
  100%);
  font-family: "PingFang";
}
</style>
