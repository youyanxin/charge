<template>
  <div class="chargeDataDetails">
    <headerBar :title="parentTitle"></headerBar>
    <div class="charge-con">
      <div class="c-item" v-for="(charge,i) in chargeData" :key="i">
        <ul class="clear">
          <li>
            <span>
              <i class="iconfont"></i>
              {{charge.area}}
            </span>
          </li>
          <li>
            <small>站点</small>
            <small class="c-df">{{charge.chargeSite}}</small>
          </li>
          <li>
            <small>充电桩</small>
            <small class="c-df">{{charge.chargePile}}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '../../components/headerBar/headerBar'
export default {
  name: 'chargeDataDetails',
  components: {
    headerBar
  },
  data() {
    return {
      parentTitle: "充电桩分布",
      chargeData: [
        { area: "同安", chargeSite: "6", chargePile: "30" },
        { area: "集美", chargeSite: "3", chargePile: "15" },
        { area: "翔安", chargeSite: "4", chargePile: "17" },
        { area: "思明", chargeSite: "5", chargePile: "20" }
      ]
    }
  }
}
</script>

<style lang="less">
@import './chargeDataDetails.less';
</style>
