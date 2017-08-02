<template>
    <div class="index">
        <div class="con">
            <!--头部部分-->
            <div class="t-line">
                {{title}}
                <router-link class="t-details" to='/incomeDetails' tag='a'>
                    {{details}}
                    <i class="iconfont icon-dayuhao"></i>
                </router-link>
            </div>
            <!--收益情况-->
            <div class="t-cen">
                <span class="t-num">{{total}}</span>
                <ul class="t-menu clear">
                    <li v-for="(item,i) in incomeData" :key="i">
                        <span>{{item.incomeTitle}}</span>
                        <span>{{item.incomeNum}}</span>
                    </li>
                </ul>
            </div>
            <!--充电桩部分-->
            <div class="t-item tfs-item">
                <router-link to="/chargeDataDetails" tag="a">
                    <div class="t-title">
                        {{chargeTitle}}
                        <span class="i-details">
                            {{details}}
                            <i class="iconfont icon-dayuhao"></i>
                        </span>
                    </div>
                    <div class="t-itemcon">
                        <span v-for="(charge,i) in chargingPileData" :key="i">
                            <small>{{charge.chargingPileTitle}}</small>
                            <small>{{charge.chargingPileNum}}</small>
                        </span>
                    </div>
                </router-link>
            </div>
            <!--用户数据部分-->
            <div class="t-item tss-item">
                <router-link to="/userDataDetails" tag="a">
                    <div class="t-title">
                        {{userTitle}}
                        <span class="i-details">
                            {{details}}
                            <i class="iconfont icon-dayuhao"></i>
                        </span>
                    </div>
                    <div class="t-itemcon clear">
                        <span v-for="(user,i) in userData" :key="i">
                            <small>{{user.userDataTitle}}</small>
                            <small>{{user.userDataNum}}</small>
                        </span>
                    </div>
                </router-link>
            </div>
            <!--待检查部分-->
            <div class="t-item">
                <router-link to="/checkDataDetails" tag="a">
                    <div class="t-title">
                        {{checkTitle}}
                        <span class="i-details">
                            {{details}}
                            <i class="iconfont icon-dayuhao"></i>
                        </span>
                    </div>
                    <div class="t-itemcon t-check clear">
                        <ol>
                            <li v-for="(check,i) in checkData" :key="i">{{check}}</li>
                        </ol>
                    </div>
                </router-link>
            </div>
        </div>
        <!--底部固定栏-->
        <footerBar></footerBar>
    </div>
</template>

<script>
import footerBar from '../../components/footerBar/footerBar'
export default {
    name: 'index',
    components: {
        footerBar
    },
    data() {
        return {
            title: '今日收益',
            details: '详情',
            total: '24,333',
            chargeTitle: '充电桩',
            userTitle: '用户数据',
            checkTitle: '待审核',
            incomeData: [
                { incomeTitle: '总收入(元)', incomeNum: '6,666' },
                { incomeTitle: '净利润(%)', incomeNum: '4,3333' },
            ],
            chargingPileData: [
                { chargingPileTitle: '站点', chargingPileNum: '6' },
                { chargingPileTitle: '充电桩', chargingPileNum: '26' },
                { chargingPileTitle: '故障(台)', chargingPileNum: '3' }
            ],
            userData: [
                { userDataTitle: '今日增长(%)', userDataNum: '4' },
                { userDataTitle: '总增长(%)', userDataNum: '3' }
            ],
            checkData: ['7月3日充电桩007已维修，待审核。', '7月3日充电桩008已维修，待审核。']
        }
    }
}
</script>

<style lang="less">
@import './index.less';
</style>

