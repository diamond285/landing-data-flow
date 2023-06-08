<template>
  <div class="content">
    <table>
      <tr>
        <td>
          <img src="@/assets/images/logo.svg" class="position logo" @click="this.$router.push('/')">
          <div class="vertical-line position" />
          <p class="hint-text position">документооборот<br>в вашей компании</p>
          <div class="button-with-icon drop-button position" id="how-works">
            <div class="drop-content">
              <div>
                <p class="drop-text position" style="font-size: 17px; display: inline-block; padding-right: 4px;">Как это работает?</p>
                <img src="@/assets/images/arrow_bottom.svg" class="position" style="margin-bottom: 1px; margin-right: 20px">
              </div>
              <p class="drop-text" @click="this.$router.push('/about');">Как работает Docs.flow?</p>
              <p class="drop-text" @click="this.$router.push('/directory');">Справочник</p>
              <p class="drop-text" @click="this.$router.push('/contacts');">Контакты</p>
            </div>
            <p>Как это работает?</p> <img src="@/assets/images/arrow_bottom.svg">
          </div>
        </td>
        <td style="text-align: right;">
          <div class="button-with-icon language-button position">
            <p>Русский</p> <img src="@/assets/images/arrow_bottom.svg">
          </div>
          <div class="button-with-icon login-button position" @click="checkData">
            <p>{{text}}</p> <img src="@/assets/images/profile.svg">
          </div>
          <img class="burger position" src="@/assets/images/burger.svg"/>
        </td>
      </tr>
    </table>
  </div>
  <div class="margin-class"></div>
</template>

<script>

import api from "@/service/api";

export default {
  name: "header-view",
  data() {
    return {
      text: ""
    }
  },
  mounted() {
    if (localStorage.getItem("auth_token")) {
      this.loadProfile();
    } else {
      this.text = "Войти"
    }
  },
  methods: {
    loadProfile() {
      api.profile.getProfile().then((response) => {
        const type = localStorage.getItem("type");
        const data = response.data;
        if (type === "COMPANY") {
          this.text = data.name;
        } else if (type === "USER") {
          this.text = data.firstName + " " + data.lastName;
        }
      }).catch(() => {
        this.$router.push("/")
      })
    },
    checkData() {
      if (localStorage.getItem("auth_token")) {
        if (localStorage.getItem("type") === "COMPANY") {
          this.$router.push("/admin")
        } else {
          this.$router.push("/docs")
        }
      } else {
        this.$router.push("/sign-in")
      }
    }
  }
}
</script>

<style scoped>
table {
  width: 49%;
  margin-left: 15%;
}
.margin-class {
  height: 100px;
}
.content {
  position: fixed;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 142.85%;
  margin-left: -21.425%;
  text-align: start;
  z-index: 10;
  background: white;
}
.button-with-icon * {
  display: inline-block;
  vertical-align: middle;
}
.hint-text {
  font-family: 'Rubik-light',system-ui;
  font-style: normal;
  text-align: start;
  font-weight: 400;
  font-size: 15px;
  line-height: 131%;
  color: rgba(0, 0, 0, 0.38);
}
.drop-button {
  margin-left: 70px;
  font-size: 17px;
  color: black;
  margin-right: 3px;
  font-family: 'Rubik-regular', system-ui;
  font-style: normal;
  cursor: pointer;
}
.drop-button p {
  margin-right: 10px;
}
.language-button {
  color: rgba(0, 0, 0, 0.5);
  background-color: #F8F8F8;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Rubik-regular',system-ui;
  padding: 8px 16px;
  font-style: normal;
}
.language-button p {
  margin-left: 12px;
  margin-right: 12px;
}
.login-button {
  cursor: pointer;
  margin-left: 20px;
  background-color: #5BBA6A;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-family: 'Rubik-regular',system-ui;
  padding: 8px 40px;
  font-style: normal;
}
.login-button:hover {
  background-color: #419a4c;
  transition: 0.3s;
}
.login-button p {
  margin-right: 4px;
}
p {
  margin: 0;
}
.vertical-line {
  height: 40px;
  width: 2px;
  margin: 0 18px;
  background-color: rgba(0, 0, 0, 0.06);
}
.position {
  display: inline-block;
  vertical-align: middle;
}
.logo {
  cursor: pointer;
}
.burger {
  margin-left: 32px;
  width: 24px;
  height: 24px;
  display: none;
}
@media screen and (max-width: 1560px){
  #how-works {
    margin-left: 15px;
    margin-right: 0;
  }
  .drop-button {
    margin-left: 15px;
  }
  table {
    width: 56%;
  }
}
@media screen and (max-width: 1370px){
  table {
    width: 63%;
  }
}
@media screen and (max-width: 1220px) {
  .drop-button {
    margin-left: 30px;
  }
  table {
    width: 66.5%;
    padding-left: 24px;
    padding-right: 24px;
  }
}
@media screen and (max-width: 1080px) {
  .drop-button {
    font-size: 15px;
    margin-left: 14px;
  }
  .hint-text {
    font-size: 14px;
  }
  .language-button {
    font-size: 15px;
  }
  .login-button {
    margin-left: 10px;
    font-size: 15px;
    padding: 8px 10px;
  }
}

@media screen and (max-width: 950px) {
  .logo {
    width: 80px;
    height: 24px;
  }
  .hint-text {
    font-size: 12px;
  }
  .drop-button {
    margin-left: 10px;
    font-size: 13px;
  }
  .drop-button p {
    margin-right: 2px;
  }
  #how-works {
    margin-left: 15px;
  }
  .language-button {
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .login-button {
    font-size: 12px;
    padding-left: 20px;
    padding-right: 20px;
  }
  table {
    width: 70%;
  }
  .logo {
    width: 90px;
  }
}
@media screen and (max-width: 900px){
  .hint-text {
    display: none;
  }
  .drop-button {
    display: none;
  }
  .login-button {
    display: none;
  }
  .burger {
    display: inline-block;
  }
  table {
    padding: 0 23px;
  }
  .vertical-line {
    margin-right: 10px;
  }
  .language-button {
    color: black;
    font-size: 16px;
  }
}
.drop-content {
  z-index: 1;
  display: none;
  margin-top: -7px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  position: absolute;
  margin-left: -24px;
  background-color: #F8F8F8;
  border-radius: 5px;
}
.drop-text {
  color: rgba(0, 0, 0, 0.5);
  font-family: Rubik-regular, system-ui;
  font-size: 15px;
  line-height: 22px;
  display: block;
  padding: 8px 24px;
  cursor: pointer;
}
.drop-text:hover {
  color: black;
}
.drop-button:hover .drop-content {
  display: block;
}
</style>
