<template>
  <div>
    <div class="h"></div>
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-xuhanglicheng"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">汽车总里程</p>
            <input
              class="data1"
              v-model="totalDis"
              readonly
              unselectable="on"
            />
          </div>
          <hr class="wire" />
          <!-- 底部 -->
          <svg class="icons icon1" aria-hidden="true">
            <use xlink:href="#icon-shangsheng"></use>
          </svg>
          <p class="data2">公里(KM)</p>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-jiayou"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">加油总量</p>
            <input
              class="data1"
              v-model="totalOil"
              readonly
              unselectable="on"
            />
          </div>
          <hr class="wire" />
          <!-- 底部 -->
          <svg class="icons icon1" aria-hidden="true">
            <use xlink:href="#icon-shangsheng"></use>
          </svg>
          <p class="data2">升(L)</p>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-qicheqianlian-"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">百公里油耗</p>
            <input
              class="data1"
              v-model="fuelConsumption"
              readonly
              unselectable="on"
            />
          </div>
          <hr class="wire" />
          <!-- 底部 -->
          <svg class="icons icon1" aria-hidden="true">
            <use xlink:href="#icon-shangsheng"></use>
          </svg>
          <p class="data2">升/百公里</p>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-zhichu"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">百公里支出</p>
            <input class="data1" v-model="expense" readonly unselectable="on" />
          </div>
          <hr class="wire" />
          <!-- 底部 -->
          <svg class="icons icon1" aria-hidden="true">
            <use xlink:href="#icon-shangsheng"></use>
          </svg>
          <p class="data2">元/百公里</p>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 展示栏 -->
        <div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-zhichu1"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">每天成本</p>
            <input class="data1" v-model="dayCost" readonly unselectable="on" />
          </div>
          <hr class="wire" />
          <!-- 底部 -->
          <svg class="icons icon1" aria-hidden="true">
            <use xlink:href="#icon-shangsheng"></use>
          </svg>
          <p class="data2">元/天</p>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use
              xlink:href="#icon---disanfangchengbenyingfufapiaozangubaozhangdan"
            ></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">总支出</p>
            <input
              class="data1"
              v-model="totalCost"
              readonly
              unselectable="on"
            />
          </div>
          <hr class="wire" />
          <!-- 底部 -->
          <svg class="icons icon1" aria-hidden="true">
            <use xlink:href="#icon-shangsheng"></use>
          </svg>
          <p class="data2">元(￥)</p>
        </div></el-col
      >
    </el-row>
    <!-- <v-FuellogPro /> -->
    <div>
      <!-- 加油记录 -->
      <div class="boxs">
        <table>
          <thead>
            <th class="box1">序号</th>
            <th class="box1">加油时间</th>
            <th class="box1">加油量(升)</th>
            <th class="box1">单价(元)</th>
            <th class="box1">金额(元)</th>
            <th class="box1">行驶里程(公里)</th>
            <th class="box1">燃油标号</th>
            <th class="box1"></th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td class="box2">{{ index + 1 }}</td>
              <td class="box2">{{ item.time }}</td>
              <td class="box2">{{ item.amount }}</td>
              <td class="box2">{{ item.price }}</td>
              <td class="box2">{{ item.totalprice }}</td>
              <td class="box2">{{ item.totaldistance }}</td>
              <td class="box2">{{ item.grade }}</td>
              <td class="box2">
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  class="ys"
                  @click="rem(index)"
                  v-on:click="show"
                ></el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 添加加油记录 -->
      <div class="refuel">
        <p class="refuel-1">添加加油记录</p>
        <!-- 加油时间 -->
        <div>
          <p class="refuel-2">加油时间</p>
          <el-input
            v-model="time"
            type="date"
            placeholder="年/月/日"
            class="refuel-3"
            style="width: 200px"
          >
          </el-input>
        </div>
        <!-- 加油量 -->
        <div>
          <p class="refuel-2" style="left: 400px">加油量(升)</p>
          <el-input
            v-model="amount"
            class="refuel-3"
            style="width: 200px; left: 400px"
          >
          </el-input>
        </div>
        <!-- 单价 -->
        <div>
          <p class="refuel-2" style="left: 800px">单价(元/升)</p>
          <el-input
            v-model="price"
            class="refuel-3"
            style="width: 200px; left: 800px"
          >
          </el-input>
        </div>
        <!-- 燃油标号 -->
        <div>
          <p class="refuel-2" style="left: 1200px">燃油标号</p>
          <el-input
            v-model="grade"
            class="refuel-3"
            style="width: 200px; left: 1200px"
          >
          </el-input>
        </div>
        <!-- 驾驶总里程 -->
        <div>
          <p class="refuel-4">驾驶里程</p>
          <el-input
            v-model="totaldistance"
            class="refuel-4"
            style="top: 210px; width: 600px"
          >
          </el-input>
        </div>
        <!-- 总金额 -->
        <div>
          <p class="refuel-5">金额(元)</p>
          <el-input
            v-model="totalprice"
            class="refuel-5"
            style="top: 210px; width: 250px"
            :disabled="true"
          >
          </el-input>
        </div>
        <!-- 添加 -->
        <div>
          <el-button class="refuel-6" @click="submit" v-on:click="show"
            >添加</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "", //时间
      amount: "", //加油量
      price: "", //单价
      grade: "", //燃油标号
      totalprice: "", //金额
      totaldistance: "", //总里程
      data: JSON.parse(localStorage.data).data,
      totalDis: "", //汽车总里程
      totalOil: "", //加油总量
      fuelConsumption: "", //百公里油耗
      expense: "", //百公里支出
      dayCost: "", //每日支出
      totalCost: "", //总支出
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    submit: function () {
      this.totalprice = this.amount * this.price;
      if (localStorage.data == undefined) {
        localStorage.data = JSON.stringify({ data: [] }); //转换为JSON字符串
      }
      let obj = JSON.parse(localStorage.data); //转换为对象
      obj.data.push({
        time: this.time,
        amount: this.amount,
        price: this.price,
        grade: this.grade,
        totalprice: this.totalprice,
        totaldistance: this.totaldistance,
      });
      localStorage.data = JSON.stringify(obj);
      this.time = "";
      this.grade = "";
      this.amount = "";
      this.price = "";
      // this.totalprice = "";
      this.totaldistance = "";
      this.data = JSON.parse(localStorage.data).data;
    },
    show() {
      let len = Object.keys(this.data).length;
      let dis = 0;
      let oil = 0;
      let per = 0;
      let tol = 0;
      const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
        (dateFinal - dateInitial) / (1000 * 3600 * 24);
      let tim = getDaysDiffBetweenDates(
        new Date(this.data[0].time),
        new Date(this.data[len - 1].time)
      );

      for (let i = 0; i < len; i++) {
        dis += parseFloat(this.data[i].totaldistance);
        oil += parseFloat(this.data[i].amount);
        per += parseFloat(this.data[i].price);
        tol += parseFloat(this.data[i].totalprice);
      }
      this.fuelConsumption = ((oil / dis) * 100).toFixed(1);
      this.expense = ((oil / dis) * 100 * (per / len)).toFixed(1);
      this.totalDis = dis.toFixed(1);
      this.totalOil = oil.toFixed(1);
      this.totalCost = tol.toFixed(1);
      if (tim == 0) {
        this.dayCost = 0;
      } else {
        this.dayCost = (tol / tim).toFixed(1);
      }
    },
    // 删除
    rem: function (index) {
      let data = JSON.parse(localStorage.data); //转换为js类
      data.data.splice(index, 1); //删除数组[index]处1个数据
      this.data.splice(index, 1); //删除数组[index]处1个数据
      localStorage.data = JSON.stringify(data); //本地缓存
    },
  },
};
</script>
<style scoped>
.format {
  position: relative;

  width: 335px;
  margin-top: 20px;
  margin: 20px 0px 10px 35px;
  border-radius: 10px;
  min-height: 175px;
  background: #ffffff;
}
.icon {
  position: absolute;
  left: 40px;
  top: 20px;
  font-size: 60px;
  font-weight: bold;
  display: block;
  width: 80px;
  height: 70px;
}
.data {
  position: absolute;
  right: 50px;
  top: 15px;
  color: #252423;
  /* font-weight: 700; */
  font-size: 16px;
}
.data1 {
  position: absolute;
  /* right: 30px; */
  top: 45px;
  width: 110px;
  border: 0;
  color: #252423;
  font-weight: 700;
  font-size: 30px;
}
.data2 {
  position: absolute;
  left: 45px;
  bottom: 15px;
  color: #a9a9a9;

  font-size: 14px;
}
.wire {
  position: absolute;
  display: block;
  width: 100%;
  bottom: 50px;
  border-bottom: 1px solid #dadab077;
}
.icons {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon1 {
  position: absolute;
  bottom: 5px;
  width: 40px;
  height: 35px;
  color: #a9a9a9;
}
.refuel {
  position: relative;
  top: 20px;
  left: 82px;
  width: 1500px;
  height: 400px;
  border-radius: 5px;
  background-color: #ffffff;
}
.refuel-1 {
  position: absolute;
  left: 20px;
  top: 15px;
  color: #7f7f7f;
  font-size: 22px;
}
.refuel-2 {
  position: absolute;
  left: 20px;
  top: 65px;
  color: #7f7f7f;
  font-size: 16px;
}
.refuel-3 {
  position: absolute;
  left: 20px;
  top: 95px;

  font-size: 16px;
}
.refuel-4 {
  position: absolute;
  left: 20px;
  top: 170px;
  color: #7f7f7f;
  font-size: 16px;
}
.refuel-5 {
  position: absolute;
  left: 800px;
  top: 170px;
  color: #7f7f7f;
  font-size: 16px;
}
.refuel-6 {
  position: absolute;
  right: 100px;
  top: 210px;
  border-radius: 10px;
  color: #7f7f7f;
  font-size: 16px;
  width: 120px;
  background-color: #f4f3ef;
}
.boxs {
  padding-top: 35px;
  padding-left: 85px;
  width: 1500px;
}
.box1 {
  width: 187.5px;
}
.box2 {
  text-align: center;
}
.ys {
  width: 40px;
}
</style>
