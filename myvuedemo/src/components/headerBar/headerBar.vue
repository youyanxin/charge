<template>
    <div class="headerBar">
        <span v-text="title"></span>
        <router-link to="/details" class="detailBtn">
            <span v-text="txt"></span>
            <i class="iconfont icon-dayuhao"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "headerBar",
    data() {
        return {
            title:"今日收益(元)",
            txt:"详情"
        }
    }
}
</script>

<style lang="less">
.headerBar {
    width: 100%;
    background-color: rgb(14, 164, 255);
    height: .96rem;
    line-height: .96rem;
    text-align: center;
    font-size:.46rem;
    color: #fff;
    position: relative;
    .detailBtn {
        display: block;
        font-size: .32rem;
        position: absolute;
        right: 3%;
        top: 0;
        color: #fff;
        .iconfont {
            font-size: 0.86rem;
            margin-left: 0.1rem;
        }
    }
}
</style>


