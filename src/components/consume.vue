<template>
  <div>
    <div class="h"></div>
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-icon270c_car"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">过路费</p>
            <input class="data1" v-model="toll1" readonly unselectable="on" />
          </div>
          <hr class="wire" />
          <!-- 底部 -->
          <svg class="icons icon1" aria-hidden="true">
            <use xlink:href="#icon-shangsheng"></use>
          </svg>
          <p class="data2">元(￥)</p>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-qicheqianlian-1"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">停车费</p>
            <input
              class="data1"
              v-model="parkcar1"
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
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-qicheqianlian-"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">保险</p>
            <input
              class="data1"
              v-model="insurance1"
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
      <el-col :span="6"
        ><div class="grid-content bg-purple format">
          <!-- 图片 -->
          <svg class="icons icon" aria-hidden="true">
            <use xlink:href="#icon-zhichu"></use>
          </svg>
          <!-- 数据显示 -->
          <div>
            <p class="data">罚款</p>
            <input class="data1" v-model="fine1" readonly unselectable="on" />
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
            <p class="data">大小保养</p>
            <input
              class="data1"
              v-model="maintain1"
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
            <p class="data">洗车费</p>
            <input
              class="data1"
              v-model="carwashing1"
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
            <p class="data">总花费</p>
            <input
              class="data1"
              v-model="totalcost"
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
    <!-- 消费记录 -->
    <div class="pay">
      <p class="pay1">消费记录</p>
      <div>
        <p class="pay2">消费类型：</p>
        <el-select v-model="value" placeholder="请选择" class="pay3">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <p class="pay2" style="top: 240px">消费金额：</p>
        <el-input
          placeholder="请输入金额"
          v-model="input"
          class="pay3"
          style="top: 240px; width: 200px"
        >
        </el-input>
      </div>
      <el-button round class="pay4" @click="submit" v-on:click="display"
        >添加</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "1",
          label: "过路费",
        },
        {
          value: "2",
          label: "停车费",
        },
        {
          value: "3",
          label: "保险",
        },
        {
          value: "4",
          label: "罚款",
        },
        {
          value: "5",
          label: "大小保养",
        },
        {
          value: "6",
          label: "洗车费",
        },
      ],
      toll: "0", //过路费
      parkcar: "0", //停车费
      insurance: "0", //保险
      fine: "0", //罚款
      maintain: "0", //保养
      carwashing: "0", //洗车费
      totalcost: "", //总花费
      value: "",
      input: 0,

      toll1: "", //过路费
      parkcar1: "", //停车费
      insurance1: "", //保险
      fine1: "", //罚款
      maintain1: "", //保养
      carwashing1: "", //洗车费
      databanse: JSON.parse(localStorage.databanse).databanse,
    };
  },
  mounted() {
    this.display();
  },
  methods: {
    submit: function () {
      if (localStorage.databanse == undefined) {
        localStorage.databanse = JSON.stringify({ databanse: [] }); //转换为JSON字符串
      }
      let obj = JSON.parse(localStorage.databanse); //转换为对象
      // console.log(this.value);
      if (this.value == "1") {
        this.toll = this.input;
      } else if (this.value == "2") {
        this.parkcar = this.input;
      } else if (this.value == "3") {
        this.insurance = this.input;
      } else if (this.value == "4") {
        this.fine = this.input;
      } else if (this.value == "5") {
        this.maintain = this.input;
      } else if (this.value == "6") {
        this.carwashing = this.input;
      }

      obj.databanse.push({
        toll: this.toll,
        parkcar: this.parkcar,
        insurance: this.insurance,
        fine: this.fine,
        maintain: this.maintain,
        carwashing: this.carwashing,
      });
      localStorage.databanse = JSON.stringify(obj);
      this.toll = "0";
      this.parkcar = "0";
      this.insurance = "0";
      this.fine = "0";
      this.maintain = "0";
      this.carwashing = "0";
      // this.totalcost= "";
      this.databanse = JSON.parse(localStorage.databanse).databanse;
    },
    display() {
      let len = Object.keys(this.databanse).length;
      let tl = 0;
      let pa = 0;
      let ins = 0;
      let fi = 0;
      let ma = 0;
      let ca = 0;
      for (let i = 0; i < len; i++) {
        tl += parseFloat(this.databanse[i].toll);
        pa += parseFloat(this.databanse[i].parkcar);
        ins += parseFloat(this.databanse[i].insurance);
        fi += parseFloat(this.databanse[i].fine);
        ma += parseFloat(this.databanse[i].maintain);
        ca += parseFloat(this.databanse[i].carwashing);
      }
      this.totalcost = (tl + pa + ins + fi + ma + ca).toFixed(1);
      this.toll1 = tl.toFixed(1);
      this.parkcar1 = pa.toFixed(1);
      this.insurance1 = ins.toFixed(1);
      this.fine1 = fi.toFixed(1);
      this.maintain1 = ma.toFixed(1);
      this.carwashing1 = ca.toFixed(1);
    },
  },
};
</script>
<style scoped>
.pay {
  position: relative;
}
.pay1 {
  position: absolute;
  left: 40px;
  top: 50px;
  color: black;
  font-weight: 700;
  font-size: 26px;
}
.pay2 {
  position: absolute;
  left: 300px;
  top: 140px;
  color: black;
  font-weight: 545;
  font-size: 22px;
}
.pay3 {
  position: absolute;
  left: 410px;
  top: 136px;
  width: 550px;
}
.pay4 {
  position: absolute;
  top: 240px;
  right: 715px;
  width: 120px;
  background: #ffcb34;
  font-size: 20px;
  line-height: 15px;
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
  right: 0px;
  top: 45px;
  width: 110px;
  border: 0;
  color: #252423;
  font-weight: 700;
  font-size: 30px;
}
</style>
