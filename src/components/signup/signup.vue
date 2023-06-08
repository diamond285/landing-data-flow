<template>
  <div class="content">
    <p class="header-text">Регистрация компании</p>
    <table>
      <tr>
        <td><p class="title-inactive" @click="$router.push('/sign-in')">Вход</p></td>
        <td><p class="title-active">Регистрация</p></td>
      </tr>
    </table>
    <input placeholder="Введите название компании" type="text" v-model="company">
    <input placeholder="Хост почты" type="text" v-model="slog">
    <input placeholder="Почта" type="email" v-model="email">
    <input placeholder="Придумайте пароль" type="password" v-model="password">
    <p class="primary-button" @click="signUp">Регистрация</p>
  </div>
</template>

<script>

import api from "@/service/api";

export default {
  name: "sign-in-component",
  data() {
    return {
      company: "",
      slog: "",
      email: "",
      password: ""
    }
  },
  methods: {
    signUp() {
      if (this.company.length !== 0 && this.slog.length !== 0 && this.email.length !== 0 && this.password.length !== 0) {
        api.authorization.register({
          data: {
            name: this.company,
            email: this.email,
            password: this.password,
            slog: this.slog
          }
        }).then(() => {
          this.$router.push("/sign-in")
        }).catch(() => {
          alert("Почта уже зарегистрирована")
          this.email = ""
          this.password = ""
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
.inactive-button {
  color: white;
  font-size: 18px;
  margin-top: 17px;
  line-height: 21px;
  padding: 19px 0;
  width: 100%;
  background: #CFCFCF;
  border-radius: 5px;
}
.text-button {
  color: #5BBA6A;
  border: 1px solid #5BBA6A;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  margin-top: 17px;
  padding: 19px 0;
  cursor: pointer;
  transition: 0.3s;
  font-family: Rubik-regular, system-ui;
  width: 100%;
}
.text-button:hover {
  background: rgba(91, 186, 106, 0.24);
}
.text-button-inactive {
  color: #CFCFCF;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  transition: 0.3s;
  font-family: Rubik-regular, system-ui;
  width: 100%;
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
