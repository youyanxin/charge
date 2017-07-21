<template>
    <div class="index">
        <div class="con">
            <div class="t-line">
                {{title}}
                <router-link class="t-details" to='/incomeDetails' tag='a'>
                    {{details}}
                    <i class="iconfont icon-dayuhao"></i>
                </router-link>
            </div>
            <div class="t-cen">
                <span class="t-num">{{total}}</span>
                <ul class="t-menu clear">
                    <li v-for="(item,i) in incomeData" :key="i">
                        <span>{{item.incomeTitle}}</span>
                        <span>{{item.incomeNum}}</span>
                    </li>
                </ul>
            </div>
            <div class="t-item tfs-item">
                <div class="t-title">
                    {{chargeTitle}}
                    <router-link to="/chargeDataDetails" tag="a" class="i-details">
                        {{details}}
                        <i class="iconfont icon-dayuhao"></i>
                    </router-link>
                </div>
                <div class="t-itemcon">
                    <span v-for="(charge,i) in chargingPileData" :key="i">
                        <small>{{charge.chargingPileTitle}}</small>
                        <small>{{charge.chargingPileNum}}</small>
                    </span>
                </div>
            </div>
            <div class="t-item tss-item">
                <div class="t-title">
                    {{userTitle}}
                    <router-link to="/userDataDetails" tag="a" class="i-details">
                        {{details}}
                        <i class="iconfont icon-dayuhao"></i>
                    </router-link>
                </div>
                <div class="t-itemcon clear">
                    <span v-for="(user,i) in userData" :key="i">
                        <small>{{user.userDataTitle}}</small>
                        <small>{{user.userDataNum}}</small>
                    </span>
                </div>
            </div>
            <div class="t-item">
                <div class="t-title">
                    {{checkTitle}}
                    <router-link to="/checkDataDetails" tag="a" class="i-details">
                        {{details}}
                        <i class="iconfont icon-dayuhao"></i>
                    </router-link>
                </div>
                <div class="t-itemcon t-check clear">
                    <ol>
                        <li v-for="(check,i) in checkData" :key="i">{{check}}</li>
                    </ol>
                </div>
            </div>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
import footerBar from '../../../components/footerBar/footerBar'
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
@import '../../../assets/style/mixin.less';
.index {
    .con {
        width: 100%;
        margin-bottom: 1.5rem;
    }

    .t-line {
        .mx_fc(.46rem,#fff);
        width: 100%;
        height: .96rem;
        line-height: .96rem;
        text-align: center;
        background-color: #0ea4ff;
    }

    .t-details {
        font-size: .32rem;
        color: #fff;
        position: absolute;
        right: 3%;
        top: 0;
        display: block;
    }

    .t-cen {
        margin-top: -1px;
        background: -moz-linear-gradient( -90deg, rgb(14, 164, 255) 0%, rgb(163, 222, 250) 89%);
        background: -ms-linear-gradient( -90deg, rgb(14, 164, 255) 0%, rgb(163, 222, 250) 89%);
        background: -webkit-linear-gradient( -90deg, rgb(14, 164, 255) 0%, rgb(163, 222, 250) 89%);
    }

    .t-num {
        display: block;
        color: #fff;
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: .41rem;
    }

    .t-menu li {
        float: left;
        width: 50%;
        text-align: center;
        color: #fff;
        font-size: .38rem;
    }

    .t-menu li span {
        display: block;
        margin-bottom: .4rem;
    }

    .t-item {
        width: 94%;
        margin: .2rem auto;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 5px 5px 0px rgba(5, 57, 89, 0.22);
    }

    .t-title {
        position: relative;
        width: 100%;
        font-size: .32rem;
        color: #292929;
        height: .6rem;
        line-height: .6rem;
        border-bottom: 1px solid rgb(230, 229, 229);
        padding-left: .4rem;
        box-sizing: border-box;
    }

    .i-details {
        font-size: .32rem;
        color: #febdbd;
        position: absolute;
        right: 3%;
        top: 0;
        display: block;
    }

    .t-itemcon {
        padding: .2rem .4rem .35rem .4rem;
        box-sizing: border-box;
        position: relative;
    }

    .t-itemcon span {
        text-align: center;
        display: block;
    }

    .t-itemcon span small {
        display: block;
        font-size: .32rem;
        color: #353434;
    }

    .t-itemcon span small:first-child {
        margin-bottom: .32rem;
    }

    .tfs-item .t-itemcon span:first-child,
    .tfs-item .t-itemcon span:last-child {
        position: absolute;
        top: .2rem;
    }

    .tfs-item .t-itemcon span:first-child {
        left: .4rem;
    }

    .tfs-item .t-itemcon span:last-child {
        right: .4rem;
    }

    .tss-item .t-itemcon span:first-child {
        float: left;
    }

    .tss-item .t-itemcon span:last-child {
        float: right;
    }

    .t-check {
        padding-top: 0;
        padding-bottom: 0;
    }

    .t-itemcon ol li {
        color: #7f7e7e;
        font-size: .28rem;
        height: .7rem;
        line-height: .7rem;
        border-bottom: 1px solid rgb(230, 229, 229);
        list-style-type: decimal;
        list-style-position: inside;
    }

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        height: .96rem;
        line-height: .96rem;
        box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.28);
    }

    footer a {
        display: block;
        float: left;
        width: 50%;
        text-align: center;
        font-size: .2rem;
        color: #292929;
    }
}
</style>

