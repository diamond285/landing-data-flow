<template>
<div class="content">
  <div class="top-data">
    <div class="app-name">
      <img src="@/assets/images/logo_white.svg">
      <div class="vertical-line" />
      <p>документооборот<br>в вашей компании</p>
    </div>
    <table class="address-table">
      <tr>
        <td>
          <p>О проекте</p>
          <p>FAQ</p>
          <p>Как это работает</p>
        </td>
        <td>
          <p>Контакты:</p>
          <p>Город Алматы, Ади Шарипова 145 к2</p>
          <p>hello@docs.flow.kz</p>
          <p>+7 727 000 00 00</p>
        </td>
      </tr>
    </table>
    <div class="links-container">
      <p class="link-text" id="politics">Политика конфиденциальности</p>
      <p class="link-text" id="reports">Договор оферты</p>
    </div>
  </div>
  <div class="bottom-back">
    <div class="bottom-data">
      <div class="first-part">
        <p>Обратный звонок</p>
        <p style="margin-right: 0;">О нас</p>
      </div>
      <div class="second-part">
        <div><img src="@/assets/images/phone.svg">0102</div>
        <div><img src="@/assets/images/location.svg">Офисы</div>
        <div>Русский<img src="@/assets/images/arrow_bottom.svg"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "footer-component"
}
</script>

<style scoped>
.content {
  position: absolute;
  width: 100%;
  left: 0;
  background: #5BBA6A;
}
.app-name {
  color: rgba(255, 255, 255, 0.56);
  font-size: 15px;
  font-family: Rubik-regular, system-ui;
  line-height: 19px;
  text-align: start;
  display: inline-block;
  width: 50%;
}
.vertical-line {
  height: 40px;
  width: 2px;
  margin: 0 18px;
  background-color: rgba(255, 255, 255, 0.37);
}
.app-name img {
  width: 111px;
}
.vertical-line, .app-name p, .app-name img {
  display: inline-block;
  vertical-align: middle;
}
.address-table {
  display: inline-block;
  width: 50%;
  vertical-align: top;
  font-family: Rubik-regular, system-ui;
  color: white;
  text-align: start;
  font-size: 15px;
  line-height: 32px;
}
.address-table td {
  width: 20%;
}
.top-data {
  margin-top: 41px;
  width: 70%;
  padding-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
}
.link-text {
  color: rgba(255, 255, 255, 0.56);
  text-decoration: underline;
  font-family: Rubik-regular, system-ui;
  font-size: 14px;
  cursor: pointer;
  text-align: start;
  width: max-content;
  margin-bottom: 16px;
  margin-right: 25px;
  line-height: 16px;
}
.links-container {
  margin-top: -60px;
}
.bottom-back {
  background: #F8F8F8;
}
.bottom-data {
  padding-top: 8px;
  padding-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.first-part {
  width: 60%;
  text-align: start;
  display: inline-block;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.29);
  font-size: 14px;
  line-height: 15px;
  font-family: Rubik-regular, system-ui;
}
.first-part p {
  display: inline-block;
  vertical-align: middle;
  margin-right: 64px;
  cursor: pointer;
}
.second-part {
  display: inline-block;
  vertical-align: middle;
  text-align: end;
  color: black;
  font-size: 14px;
  font-family: Rubik-regular, system-ui;
  line-height: 16px;
  cursor: pointer;
  width: 40%;
}
.second-part div {
  vertical-align: middle;
  display: inline-block;
  margin-left: 35px;
}
.second-part img {
  width: 10px;
  height: 10px;
  margin: 0 12px;
  display: inline-block;
}
@media screen and (max-width: 1560px) {
  .top-data, .bottom-data {
    width: 80%;
  }
  .first-part p {
    margin-right: 20px;
  }
  .first-part {
    width: 55%;
  }
  .second-part {
    width: 45%;
  }
}
@media screen and (max-width: 1370px) {
  .top-data, .bottom-data {
    width: 90%;
  }
}
@media screen and (max-width: 1220px) {
  .top-data, .bottom-data {
    width: 95%;
  }
  .first-part {
    font-size: 12px;
  }
  .second-part {
    font-size: 12px;
  }
  .second-part div {
    margin-left: 10px;
  }
}
@media screen and (max-width: 950px){
  .content {
    margin-top: 50px;
  }
}
@media screen and (max-width: 900px){
  .address-table {
    display: block;
    width: 100%;
    margin-top: 20px;
    text-align: start;
  }
  .app-name {
    display: block;
    width: 100%;
  }
  .links-container {
    text-align: start;
    margin-top: 20px;
  }
  .link-text {
    display: inline-block;
    vertical-align: middle;
  }
  .first-part {
    display: none;
  }
  .second-part {
    text-align: center;
    width: 100%;
  }
  .top-data {
    padding-bottom: 30px;
  }
}
</style>
