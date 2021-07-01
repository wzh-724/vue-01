<template>
  <div>
    <div class="box">
      <h3>爱车消费管理系统</h3>

      <input type="text" placeholder="请输入用户名" v-model="user.username" />

      <input type="password" placeholder="请输入密码" v-model="user.password" />
      <button @click="submit">登录</button>

      <p>
        <router-link to="/register">没有账号？马上注册</router-link>
      </p>
      <!-- <p v-on:click="ToRegister">没有账号？马上注册</p> -->
      <br />
      <!-- <router-link to="/">返回</router-link> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: { username: "", password: "" },
      users: [],
      name: "",
    };
  },
  methods: {
    submit() {
      // localStorage.removeItem(this.name);
      this.name = this.user.username;
      localStorage.setItem("name", JSON.stringify(this.name));
      var json = localStorage.getItem("users");
      //将个人信息从一个字符串中解析出json对象
      this.users = JSON.parse(json);
      // console.log(this.users[1].username);
      // console.log(this.users[1].password);
      let len = Object.keys(this.users).length;
      // console.log(len);
      // console.log(this.user.username);
      // console.log(this.user.password);

      for (let i = 0; i < len; i++) {
        if (
          this.user.username == this.users[i].username &&
          this.user.password == this.users[i].password
        ) {
          this.$router.push({ name: "Home" });
          break;
        } else {
          alert("用户名或密码错误，请重新输入");
        }
      }
    },
  },
};
</script>
<style scoped>
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
