<template>
    <div class="set">
        <div class="s-line">{{title}}</div>
        <div class="s-item">
            <ul>
                <router-link to="item.path" tag="li" v-for="(item,i) in items" :key="i">
                    {{item.txt}}
                    <i class="iconfont icon-dayuhao"></i>
                </router-link>
            </ul>
            <router-link to='' tag='span' class="exit">退出登录</router-link>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
import footerBar from '../../../components/footerBar/footerBar'
export default {
    name: 'set',
    components: {
        footerBar
    },
    data() {
        return {
            title: "设置",
            items: [
                { path: '/', txt: '清除缓存' },
                { path: '/', txt: '关于我们' }
            ]
        }
    }
}
</script>

<style lang="less">
@import '../../../assets/style/mixin.less';
.set {
    .s-line {
        .mx_fc(.46rem, #fff);
        .mx_whlh(100%, .96rem, .96rem);
        text-align: center;
        background-color: #0ea4ff;
    }
    .s-item {
        width: 100%;
        ul {
            li {
                .mx_fc(.3rem, #797878);
                .mx_whlh(100%, .6rem, .6rem);
                padding: 0 3%;
                box-sizing: border-box;
                background-color: #fff;
                margin: .2rem 0;
                box-shadow: 0px 1px 0px 0px rgba(68, 68, 68, 0.22);
                position: relative;
                i {
                    position: absolute;
                    top: 0;
                    right: 3%;
                }
            }
        }
        .exit {
            .mx_fc(.3rem, #171717);
            .mx_whlh(94%, .8rem, .8rem);
            display: block;
            margin: 1rem auto;
            line-height: .8rem;
            text-align: center;
            background-color: #fff;
            box-shadow: 0px 4px 9px 1px rgba(0, 0, 0, 0.22);
        }
    }
}
</style>

