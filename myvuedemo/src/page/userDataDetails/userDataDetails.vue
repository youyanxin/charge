<template>
  <div class="userDataDetails">
    <headerBar :title="parentTitle"></headerBar>
    <div class="user-chart">
      <div id="myChart"></div>
    </div>
  </div>
</template>
<script>
// 引入基本模板
let echarts =require('echarts/lib/echarts')
// 引入折线图组件
require('echarts/lib/chart/line')

import headerBar from '../../components/headerBar/headerBar'
export default {
  name: 'userDataDetails',
  components: {
    headerBar
  },
  data() {
    return {
      parentTitle: '数据分布',
    }
  },
  mounted() {
    var mychart = echarts.init(document.getElementById('myChart'));
    var option = {
      title: {
        text: '会员数据增长',
        left: 'center',
        textStyle: {
          color: '#0e0e0e',
          fontSize: '22',
          fontWeight: 'normal'
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '1%',
        containLabel: true
      },
      xAxis: [
        {
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#62b8fc'
            }
          },
          axisLabel:{
            interval:0,
            showMinLabel:false,
            showMaxLabel:true
          },
          name: '日期',
          nameGap:10,
          type: 'category',
          boundaryGap: false,
          nameLocation: 'start',
          nameTextStyle: {
            color: '#eda8aa',
            fontSize: '14'
          },
          data: ['0','1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
      ],
      yAxis: [
        {
          nameGap:10,
          axisLabel: {
            showMinLabel: false
          },
          min: 0,
          max: 110,
          splitNumber: 10,
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#62b8fc'
            }
          },
          splitLine: {
            show: false
          },
          type: 'value',
          name: '人数',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#eda8aa',
            fontSize: '14'
          }
        }
      ],
      series: [
        {
          symbol: 'circle',
          showSymbol: true,
          //showAllSymbol:false,
          lineStyle: {
            normal: {
              color: '#44b0f1'
            }
          },
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [,10, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
        }
      ]
    }
    mychart.setOption(option);
  }
}
</script>

<style lang="less">
@import '../../assets/style/mixin.less';
.userDataDetails {
  .user-chart {
    .mx_wh(94%, 6rem);
    margin: 1.8rem auto;
    #myChart {
      .mx_wh(100%, 100%);
    }
  }
}
</style>

