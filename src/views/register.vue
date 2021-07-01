<template>
  <div class="box">
    <h3>爱车消费管理系统</h3>

    <input type="text" placeholder="请输入用户名" v-model="user.username" />
    <input type="password" placeholder="请输入密码" v-model="user.password" />

    <button v-on:click="submit">注册</button>

    <!-- <p v-on:click="ToLogin">已有账号？马上登录</p> -->
    <p>
      <router-link to="/">已有账号？马上登录</router-link>
    </p>
    <br />
    <!-- <router-link to="/">返回</router-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { username: "", password: "" },
      users: [],
    };
  },
  methods: {
    submit() {
      let len = Object.keys(this.users).length;
      // console.log(len);
      if (this.user.username != "" && this.user.password != "") {
        if (len == 0) {
          this.users.push(this.user);
          localStorage.setItem("users", JSON.stringify(this.users));
          alert("注册成功");
          this.$router.push({ name: "Login" });
        } else {
          var json = localStorage.getItem("users");
          //将个人信息从一个字符串中解析出json对象
          this.users = JSON.parse(json);
          // console.log(json);
          localStorage.removeItem(this.users);
          this.users.push(this.user);
          localStorage.setItem("users", JSON.stringify(this.users));
          alert("注册成功");
          this.$router.push({ name: "Login" });
        }
      } else {
        alert("用户名或密码未输入");
      }
    },
  },
};
</script>

<style>
.box {
  position: absolute;
  top: 220px;
  left: 810px;
}
.login-wrap {
  text-align: center;
}

h3 {
  text-align: center;
  padding-bottom: 15px;
  font-size: 20px;
  color: #888;
}
span {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 30px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}

p {
  color: red;
  text-align: center;
}

button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}
</style>
