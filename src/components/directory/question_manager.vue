<template>
  <div class="content">
      <div style="text-align: start;" class="position">
        <p class="header-text">Не нашли ответ на свой вопрос?</p>
        <p class="hint-text">Задайте его менеджеру</p>
        <p class="primary-button">Задать вопрос</p>
      </div>
      <div style="text-align: end;" class="position">
<!--        <img src="@/assets/images/ask_question.png">-->
      </div>
  </div>
</template>

<script>
export default {
  name: "question-manager-compnent"
}
</script>

<style scoped>
.content {
  margin-top: 22px;
  margin-bottom: 35px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  text-align: start;
  padding: 25px 0 25px 70px;
}
.header-text {
  color: black;
  font-family: Stolzl-regular, system-ui;
  font-size: 25px;
  line-height: 33px;
}
.hint-text {
  margin-top: 24px;
  color: rgba(0, 0, 0, 0.58);
  font-size: 18px;
  line-height: 23px;
  font-family: Rubik-regular, system-ui;
}
.primary-button {
  margin-top: 34px;
  background: #5BBA6A;
  color: white;
  padding: 18px 58px;
  font-size: 16px;
  line-height: 24px;
  width: max-content;
  border-radius: 5px;
  font-family: Rubik-regular, system-ui;
  cursor: pointer;
}
.primary-button:hover {
  background: #419a4c;
  transition: 0.3s;
}
img {
  height: 239px;
}
.position {
  display: inline-block;
  vertical-align: middle;
}
@media screen and (max-width: 950px) {
  .header-text {
    font-size: 18px;
    line-height: 26px;
  }
  .hint-text {
    margin-top: 16px;
    font-size: 16px;
    line-height: 18px;
  }
  .content {
    margin-left: 24px;
    margin-right: 24px;
    padding: 25px 0 25px 32px;
  }
  .primary-button {
    margin-top: 20px;
    padding: 13px 20px;
  }
}
@media screen and (max-width: 900px){
  .content {
    background: white;
    border: none;
  }
}
</style>
