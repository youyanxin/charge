<template>
    <div class="footerBar">
        <ul class="clear">
            <router-link to="/index" tag="li" active-class="active">
                <i class="iconfont icon-shouye"></i>
                首页
            </router-link>
    
            <router-link to="/set" tag="li" active-class="active">
                <i class="iconfont icon-set"></i>
                设置
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "footerBar"
}
</script>

<style lang="less">
.footerBar {
    background-color: #fff;
    box-shadow: 0 0.04rem 0.13rem 0 rgba(0, 0, 0, 0.28);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .96rem;
    ul li {
        float: left;
        width: 50%;
        text-align: center;
        font-size: 0.2rem;
        .iconfont {
            font-size: .4rem;
            display: block;
            margin-top:.02rem;
        }
    }
    .active {
        color: #2eaffe;
    }
}
</style>


