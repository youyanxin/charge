<template>
  <div class="checkDataDetails">
    <headerBar :title="parentTitle"></headerBar>
    <div class="check-con">
      <div class="check-item" v-for="(check,i) in checkData" :key="i">
        <h4 class="check-title">{{check}}</h4>
        <div class="check-btn-item clear">
          <span class="check-btn check-unfinished">未完成</span>
          <span class="check-btn check-finished">已完成</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '../../components/headerBar/headerBar'
export default {
  name: 'checkDataDetails',
  components: {
    headerBar
  },
  data() {
    return {
      parentTitle: '待审核',
      checkData: ['1.软件园编号007充电桩已维修，待审核。', '2.软件园编号007充电桩已维修，待审核。', '3.软件园编号007充电桩已维修，待审核。']
    }
  }
}
</script>

<style lang="less">
@import './checkDataDetails.less';
</style>

