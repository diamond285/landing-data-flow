<template>
  <div class="content">
      <div class="main-container">
        <div class="first-part">
          <div class="internal-data">
            <div>
              <p class="header-text position">Цель</p>
              <img class="docs position" src="@/assets/images/docs.svg"/>
            </div>
            <p class="hint-text">Мы поможем улучшить работу HR-менеджера, не тратя лишнего времени на подписание документов</p>
            <div class="start-button">
              <p class="start-text position">Начать</p>
              <img src="@/assets/images/arrow_right_white.svg" class="start-icon position">
            </div>
          </div>
        </div>
        <div class="second-part">
          <img class="consulting-image" src="@/assets/images/targeting.png"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "target-component"
}
</script>

<style scoped>
.content {
  margin-top: 60px;
}
.docs {
  width: 31px;
  height: 31px;
  margin-left: 12px;
}
.header-text {
  color: black;
  font-family: Stolzl-medium, system-ui;
  font-size: 56px;
  line-height: 68px;
}
.hint-text {
  margin-top: 46px;
  margin-bottom: 64px;
  width: 70%;
  color: rgba(0, 0, 0, 0.6);
  font-family: Rubik-regular, system-ui;
  font-size: 19px;
  line-height: 29px;
}
.start-button {
  background: #5BBA6A;
  border-radius: 9px;
  width: max-content;
  padding: 17px 29px;
  cursor: pointer;
}
.start-button:hover {
  background-color: #419a4c;
  transition: 0.3s;
}
.start-text {
  color: white;
  font-family: Rubik-regular, system-ui;
  font-size: 17px;
  margin-left: 8px;
  margin-right: 40px;
}
.start-icon {

}
.position {
  display: inline-block;
  vertical-align: middle;
}
.consulting-image {
  height: 100%;
}

.main-container {
  width: 100%;
}
.first-part, .second-part {
  display: inline-block;
  vertical-align: middle;
  text-align: start;
}
.first-part {
  width: 55%;
}
.second-part {
  width: 45%;
  text-align: end;
}
@media screen and (max-width: 1220px) {
  .header-text {
    font-size: 40px;
    line-height: 50px;
  }
  .docs {
    width: 24px;
  }
  .internal-data {
    margin-left: 24px;
  }
  .hint-text {
    width: 100%;
  }
  .second-part {
    width: 40%;
  }
  .first-part {
    width: 60%;
  }
  .consulting-image {
    width: 90%;
    margin-right: 24px;
  }
}

@media screen and (max-width: 900px) {
  .content {
    margin-top: 40px;
  }
  .header-text {
    font-size: 30px;
    line-height: 38px;
  }
  .docs {
    width: 16px;
    margin-left: 8px;
  }
  .internal-data {
    margin-left: 24px;
    margin-right: 24px;
  }
  .hint-text {
    margin-top: 18px;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 18px;
  }
  .second-part {
    width: 100%;
    display: block;
    text-align: center;
  }
  .first-part {
    width: 100%;
    display: block;
  }
  .consulting-image {
    width: 80%;
    margin-left: -10%;
    max-width: 500px;
  }
  .start-text {
    font-size: 16px;
    margin-right: 30px;
  }
  .start-icon {
    width: 6px;
  }
  .start-button {
    padding: 13px 17px;
  }
}
</style>
