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
import footerBar from '../../components/footerBar/footerBar'
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
@import './set.less';
</style>

