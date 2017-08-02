<template>
  <div class="incomeDetails">
    <headerBar :title="parentTitle"></headerBar>
    <div class="income-item">
      <div class="income-timeline">
        <!--@touchmove='touchmove(i)'-->
        <div class="income-con" :class="{active:i==0}" v-for="(incomeDetails,i) in incomeDetailsData" :key="i" :data-key="i">
          <p class="income-time">{{incomeDetails.date}}</p>
          <div class="income-content">
            <ul class="income-ul clear" v-for="(income,j) in incomeDetails.incomeData" :key="j">
              <li>
                <span>{{income.area}}</span>
              </li>
              <li>
                <small>充电次数</small>
                <small class="c-df">{{income.incomeNum}}</small>
              </li>
              <li>
                <small>金额 </small>
                <small class="c-df">{{income.incomeMoney}}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '../../components/headerBar/headerBar'
export default {
  name: 'incomeDetails',
  components: {
    headerBar
  },
  data() {
    return {
      scroll: '',
      parentTitle: '详情',
      incomeDetailsData: [
        {
          date: '2017-07-09', incomeData: [
            { area: "同安", incomeNum: "6", incomeMoney: "30" },
            { area: "集美", incomeNum: "3", incomeMoney: "15" },
            { area: "翔安", incomeNum: "4", incomeMoney: "17" }
          ]
        },
        {
          date: '2017-07-08', incomeData: [
            { area: "同安", incomeNum: "6", incomeMoney: "30" },
            { area: "集美", incomeNum: "3", incomeMoney: "15" },
            { area: "翔安", incomeNum: "4", incomeMoney: "17" },
            { area: "思明", incomeNum: "5", incomeMoney: "20" }
          ]
        },
        {
          date: '2017-07-07', incomeData: [
            { area: "同安", incomeNum: "6", incomeMoney: "30" },
            { area: "集美", incomeNum: "3", incomeMoney: "15" },
            { area: "翔安", incomeNum: "4", incomeMoney: "17" },
            { area: "思明", incomeNum: "5", incomeMoney: "20" }
          ]
        },
        {
          date: '2017-07-06', incomeData: [
            { area: "同安", incomeNum: "6", incomeMoney: "30" },
            { area: "集美", incomeNum: "3", incomeMoney: "15" },
            { area: "翔安", incomeNum: "4", incomeMoney: "17" },
            { area: "思明", incomeNum: "5", incomeMoney: "20" }
          ]
        }
      ]
    }
  },
  methods: {
    //这个滑动还是有问题
    touchmoves() {
      let app = document.getElementById("app");
      let atop = app.scrollTop;
      let stop = document.body.scrollTop;
      let ascroll = Math.abs(atop - stop);
      let incomeCon = document.getElementsByClassName('income-con');
      for (var i = 0; i < incomeCon.length; i++) {
        if (ascroll >= incomeCon[i].offsetTop && ascroll < incomeCon[i + 1].offsetTop) {
          incomeCon[i].classList.add("active")
        } else {
          incomeCon[i].classList.remove("active")
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.touchmoves)
  }
}
</script>

<style lang="less">
@import './incomeDetails.less';
</style>


