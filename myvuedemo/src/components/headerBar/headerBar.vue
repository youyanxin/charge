<template>
    <div class="headerBar">
        <router-link to="/" class="detailBtn">
            <i class="iconfont icon-dayuhao"></i>
            <span v-text="txt"></span>
        </router-link>
        <span v-text="title"></span>
    </div>
</template>

<script>
export default {
    name: "headerBar",
    props: ["title"],
    data() {
        return {
            txt: "返回"
        }
    }
}
</script>

<style lang="less">
@import '../../assets/style/mixin.less';
.headerBar {
    .mx_fc(.48rem, #fff);
    .mx_whlh(100%, .96rem, .96rem);
    background-color: rgb(14, 164, 255);
    box-shadow: 0px 6px 5px 0px rgba(9, 103, 160, 0.22);
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .detailBtn {
        display: block;
        font-size: .38rem;
        position: absolute;
        left: 3%;
        top: 0;
        color: #fff;
        .iconfont {
            font-size: 0.3rem;
            display: inline-block;
            transform: translateY(-2px) rotate(180deg);
        }
    }
}
</style>


