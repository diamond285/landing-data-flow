<template>
  <div class="content">
    <p class="header-text">Индивидуальные решения<br><span style="color: #5BBA6A">для вашего бизнеса</span></p>
    <div class="main-container">
      <div class="first-container">
        <div class="content-container">
          <img src="@/assets/images/services.png" class="content-image position"/>
          <div class="position data-container">
            <p class="title-text">Онлайн создание документов</p>
            <p class="hint-text">для проверки и подписи</p>
          </div>
        </div>
      </div>
      <div class="second-container">
        <div class="content-container">
          <img src="@/assets/images/preparations_second.png" class="content-image position"/>
          <div class="position data-container">
            <p class="title-text">Подготовка</p>
            <p class="hint-text">всей необходимой договорной базы</p>
          </div>
        </div>
      </div>
      <div class="third-container">
        <div class="content-container">
          <img src="@/assets/images/financials.png" class="content-image position"/>
          <div class="position data-container">
            <p class="title-text">Взаимодействие</p>
            <p class="hint-text">с другими сотрудниками компании</p>
          </div>
        </div>
      </div>
      <div class="fourth-container">
        <div class="content-container">
          <img src="@/assets/images/preparations.png" class="content-image position"/>
          <div class="position data-container">
            <p class="title-text">Создайте маршрут</p>
            <p class="hint-text">для подписи и проверки</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "solutions-component"
}
</script>

<style scoped>
.content {
  margin-top: 60px;
}
.header-text {
  color: black;
  text-align: left;
  font-family: Stolzl-regular, system-ui;
  font-size: 34px;
  line-height: 44px;
}
.title-text {
  color: black;
  font-family: Stolzl-regular, system-ui;
  font-size: 22px;
  line-height: 28px;
}
.hint-text {
  font-family: Rubik-regular, system-ui;
  color: rgba(0, 0, 0, 0.59);
  font-size: 18px;
  margin-top: 13px;
  line-height: 23px;
}
.content-image {
  height: 175px;
  margin-right: 50px;
}
.content-container {
  padding-right: 36px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.09);
}
.position {
  display: inline-block;
  vertical-align: middle;
}
.main-container {
  margin-top: 26px;
}
.first-container, .second-container, .third-container, .fourth-container {
  display: inline-block;
  vertical-align: middle;
  text-align: start;
  width: 49%;
}
.second-container, .fourth-container {
  margin-left: 2%;
}
.third-container, .fourth-container {
  margin-top: 30px;
}

@media screen and (max-width: 1220px) {
  .header-text {
    margin-left: 24px;
  }
  .main-container {
    margin-left: 24px;
    margin-right: 24px;
  }
  .content-image {
    margin-right: 20px;
    height: 150px;
  }
}
@media screen and (max-width: 1075px) {
  .first-container, .second-container, .third-container, .fourth-container {
    display: block;
    margin-left: 0;
    margin-top: 20px;
    width: auto;
  }
}
@media screen and (max-width: 950px){
  .content {
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 900px) {
  .first-container, .second-container, .third-container, .fourth-container {
    margin-top: 15px;
  }
  .header-text {
    margin-right: 24px;
    font-size: 24px;
    line-height: 31px;
  }
  .content-container {
    background: white;
    border: none;
  }
  .title-text {
    width: 100%;
    display: block;
    font-size: 16px;
    line-height: 20px;
  }
  .hint-text {
    display: block;
    margin-top: 7px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
  .content-container {
    padding-right: 15px;
  }
  .content-image  {
    width: 15%;
    margin: 0;
    height: auto;
  }
  .data-container {
    width: 85%;
  }
  .title-text, .hint-text {
    padding: 0 20px;
  }
}
@media screen and (max-width: 530px){
  .content-image {
    width: 20%;
  }
  .data-container {
    width: 80%;
  }
}
</style>
