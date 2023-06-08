<template>
  <div class="content">
    <p class="header-text">Вход</p>
    <table>
      <tr>
        <td><p class="title-active">Вход</p></td>
        <td><p class="title-inactive" @click="$router.push('/sign-up')">Регистрация</p></td>
      </tr>
    </table>
    <input placeholder="Почта"  type="email" v-model="email">
    <input placeholder="Пароль" type="password" v-model="password">
    <div class="primary-button" @click="login">
      <p>Войти</p>
    </div>
  </div>
</template>

<script>

import api from "@/service/api";

export default {
  name: "sign-in-component",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  mounted() {
    localStorage.removeItem("auth_token")
  },
  methods: {
    login() {
     if (this.email.length !== 0 && this.password.length !== 0) {
       api.authorization.login({
         data: {
           email: this.email,
           password: this.password
         }
       }).then((response) => {
         const data = response.data;
         localStorage.setItem("type", data.type);
         localStorage.setItem('auth_token', data.token);
         this.$router.push("/")
       }).catch(() => {
         alert("Неправильная почта или пароль")
       })
     }
    }
  }
}
</script>

<style scoped>
.content {
  margin: 60px auto;
  width: 30%;
  text-align: center;
  padding: 36px 48px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.header-text {
  color: black;
  font-size: 25px;
  line-height: 29px;
  font-family: Stolzl-medium, system-ui;
  text-align: center;
}
.primary-button {
  color: white;
  font-size: 18px;
  margin-top: 17px;
  line-height: 21px;
  padding: 19px 0;
  width: 100%;
  background: #5BBA6A;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.primary-button:hover {
  background: #419a4c;
}
.title-active {
  color: black;
  font-size: 18px;
  font-family: Stolzl-regular, system-ui;
  line-height: 21px;
  padding: 23px 0;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid #5BBA6A;
}
.title-inactive {
  color: rgba(0, 0, 0, 0.37);
  font-size: 18px;
  font-family: Stolzl-regular, system-ui;
  line-height: 21px;
  padding: 23px 0;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
table {
  width: 100%;
  margin-top: 13px;
  margin-bottom: 8px;
}
td {
  width: 50%;
}
.link-text {
  text-align: start;
  margin-top: 17px;
  color: #3971FF;
  text-decoration: underline;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  transition: 0.3s;
  font-family: Rubik-regular, system-ui;
}
.link-text:hover {
  color: #244cbd;
}
input {
  margin-top: 17px;
  background: #F8F8F8;
  border-radius: 5px;
  padding: 19px 22px;
  border: none;
  width: 89%;
  font-size: 18px;
  color: black;
  font-family: Rubik-regular, system-ui;
  line-height: 21px;
}
::placeholder {
  color: rgba(0, 0, 0, 0.6);
}
input:focus {
  outline: none;
}

@media screen and (max-width: 1560px) {
  .content {
    width: 36%;
  }
}
@media screen and (max-width: 1370px) {
  .content {
    width: 36%;
  }
}
@media screen and (max-width: 1220px) {
  .content {
    width: 40%;
  }
}
@media screen and (max-width: 950px) {
  .content {
    width: 60%;
  }
}
@media screen and (max-width: 900px){
  .content {
    width: 80%;
  }
}
</style>
