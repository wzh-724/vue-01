<template>
  <div id="app" :style="bgImg">
    <router-view />
  </div>
</template>

<style lang="less">
@import "./assets/css/home.css";
</style>
<script>
export default {
  name: "App",
  data() {
    return {
      bgImg: {
        backgroundImage: "url(" + require("./assets/img/bg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      },
    };
  },
};
</script>
