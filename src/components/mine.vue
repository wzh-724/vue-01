<template>
  <div>
    <div class="h"></div>
    <!-- 添加购车记录 -->
    <div class="refuel">
      <p class="refuel-1">添加购车记录</p>
      <!-- 购车时间 -->
      <div>
        <p class="refuel-2">购车时间</p>
        <el-input
          v-model="time"
          type="date"
          placeholder="年/月/日"
          class="refuel-3"
          style="width: 200px"
        >
        </el-input>
      </div>
      <!-- 车辆类型-->
      <div>
        <p class="refuel-2" style="left: 400px">车辆类型</p>
        <el-input
          v-model="type"
          class="refuel-3"
          style="width: 200px; left: 400px"
        >
        </el-input>
      </div>
      <!-- 车型款式 -->
      <div>
        <p class="refuel-2" style="left: 800px">车型款式</p>
        <el-input
          v-model="style"
          class="refuel-3"
          style="width: 200px; left: 800px"
        >
        </el-input>
      </div>
      <!-- 购买价格 -->
      <div>
        <p class="refuel-2" style="left: 1200px">购买价格(万元)</p>
        <el-input
          v-model="price"
          class="refuel-3"
          style="width: 200px; left: 1200px"
        >
        </el-input>
      </div>
      <!-- 车牌 -->
      <div>
        <p class="refuel-4">车牌</p>
        <el-input
          v-model="plate"
          class="refuel-4"
          style="top: 210px; width: 600px"
        >
        </el-input>
      </div>

      <div>
        <el-button class="refuel-6" @click="submit">添加</el-button>
      </div>
    </div>
    <!-- 购车记录 -->
    <div class="boxs">
      <table>
        <thead>
          <th class="box1">序号</th>
          <th class="box1">购车时间</th>
          <th class="box1">车辆类型</th>
          <th class="box1">车型款式</th>
          <th class="box1">购买价格(万元)</th>
          <th class="box1">车牌</th>
          <th class="box1"></th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in carData" :key="index">
            <td class="box2">{{ index + 1 }}</td>
            <td class="box2">{{ item.time }}</td>
            <td class="box2">{{ item.type }}</td>
            <td class="box2">{{ item.style }}</td>
            <td class="box2">{{ item.price }}</td>
            <td class="box2">{{ item.plate }}</td>
            <td class="box2">
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                class="ys"
                @click="del(index)"
              ></el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "", //构车时间
      type: "", //车辆类型
      style: "", //车辆款式
      price: "", //购买价格
      plate: "", //车牌
      carData: JSON.parse(localStorage.carData).carData,
    };
  },
  methods: {
    submit: function () {
      if (localStorage.carData == undefined) {
        localStorage.carData = JSON.stringify({ carData: [] }); //转换为JSON字符串
      }
      let obj = JSON.parse(localStorage.carData); //转换为对象
      obj.carData.push({
        time: this.time,
        type: this.type,
        style: this.style,
        price: this.price,
        plate: this.plate,
      });
      localStorage.carData = JSON.stringify(obj);
      this.time = "";
      this.type = "";
      this.style = "";
      this.price = "";
      this.plate = "";
      this.carData = JSON.parse(localStorage.carData).carData;
    },
    // 删除
    del: function (index) {
      let carData = JSON.parse(localStorage.carData); //转换为js类
      carData.carData.splice(index, 1); //删除数组[index]处1个数据
      this.carData.splice(index, 1); //删除数组[index]处1个数据
      localStorage.carData = JSON.stringify(carData); //本地缓存
    },
  },
};
</script>

<style scoped>
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
