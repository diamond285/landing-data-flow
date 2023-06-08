<template>
  <div class="content">
    <div class="container" :class="{'is-white': isWhite, 'is-gray' : !isWhite}">
      <div class="main-container">
        <div class="top-part">
          <img src="@/assets/images/chat_image.png" style="width: 70%; height: 100%">
        </div>
        <div class="first-part">
          <p class="header"><span style="color: #5BBA6A">Улучшайте</span> документооборот</p>
          <p class="header">в компании вместе с нами</p>
          <p class="hint-text">Решаем амбициозные задачи: мы повышаем эффективность работы HR</p>
          <p class="start-button" @click="this.$router.push('/start')">Начать</p>
        </div>
        <div class="second-part">
          <img src="@/assets/images/chat_image.png" style="width: 70%; height: 100%">
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-background" />
</template>

<script>
export default {
  name: "upgrade-component",
  props: {
    isWhite: Boolean
  }
}
</script>

<style scoped>
.content {

}
.is-white {
  background-color: white;
}
.is-gray {
  background-color: #F8F8F8;
}
.container {
  margin-top: 50px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  padding: 20px 71px 10px 71px;
  text-align: start;
}
.header {
  color: black;
  font-family: Stolzl-medium, system-ui;
  font-size: 34px;
  line-height: 40px;
}
.hint-text {
  color: rgba(0, 0, 0, 0.28);
  font-family: Stolzl-regular, system-ui;
  font-size: 16px;
  width: 70%;
  line-height: 24px;
  margin-top: 50px;
}
.start-button {
  background: #5BBA6A;
  border-radius: 5px;
  color: white;
  font-family: Rubik-regular, system-ui;
  font-size: 16px;
  padding: 18px 55px 18px 55px;
  cursor: pointer;
  width: max-content;
  margin-top: 50px;
  margin-bottom: 20px;
}
.start-button:hover {
  background-color: #419a4c;
  transition: 0.3s;
}
.bottom-background {
  width: 106.4%;
  position: absolute;
  margin-top: -110px;
  z-index: 0;
  margin-left: -21.425%;
  height: 110px;
  background: #5BBA6A;
}
.main-container {
  width: 100%;
}
.first-part {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
}
.second-part {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
}
.top-part {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  display: none;
}
@media screen and (max-width: 950px) {
  .bottom-background {
    display: none;
  }
  .container {
    margin-left: 24px;
    margin-right: 24px;
  }
  .header {
    font-size: 24px;
    line-height: 30px;
  }
  .hint-text {
    font-size: 14px;
    line-height: 20px;
  }
  .start-button {
    font-size: 14px;
    padding: 12px 40px 12px 40px;
  }
}
@media screen and (max-width: 900px) {
  .is-gray {
    background: white;
  }
  .second-part {
    display: none;
  }
  .first-part {
    display: block;
    width: 100%;
    margin-top: 20px;
    text-align: start;
  }
  .top-part {
    display: block;
  }
  .container {
    text-align: center;
    padding: 24px;
  }
}
@media screen and (max-width: 1560px) {
  .bottom-background {
    width: 111.4%;
    margin-left: -21.425%;
  }
}
@media screen and (max-width: 1370px) {
  .bottom-background {
    width: 116.4%;
    margin-left: -21.425%;
  }
}
@media screen and (max-width: 1220px) {
  .bottom-background {
    width: 118.9%;
    margin-left: -21.425%;
  }
}
</style>
