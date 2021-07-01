<template>
  <div class="about">
    <v-header class="content-box1" />
    <v-aside class="content-box2" />
    <div class="content-box">
      <div class="content"><router-view></router-view></div>
    </div>
  </div>
</template>
<script>
import vHeader from "../components/Header";

import vAside from "../components/aside";

export default {
  components: {
    vHeader,
    vAside,
  },
};
</script>
