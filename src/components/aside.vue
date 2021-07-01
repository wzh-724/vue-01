<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      background-color="#242f42"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router:true
    >
      <router-link to="/oilWear">
        <el-menu-item index="1" class="heigh1">
          <i class="el-icon-odometer"></i>
          <span class="color1"> 油耗</span>
        </el-menu-item></router-link
      >
      <router-link to="/consume"
        ><el-menu-item index="2" class="heigh1">
          <i class="el-icon-coin"></i>
          <span class="color1"> 消费</span>
        </el-menu-item></router-link
      ><router-link to="/mine"
        ><el-menu-item index="3" class="heigh1">
          <i class="el-icon-user-solid"></i>
          <span class="color1"> 我的</span>
        </el-menu-item></router-link
      >
    </el-menu>
  </div>
</template>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
.color1 {
  font-weight: 700;
  font-size: 18px;
}
.heigh1 {
  height: 70px;
  line-height: 65px;
}
</style>
