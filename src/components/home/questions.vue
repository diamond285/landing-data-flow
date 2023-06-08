<template>
  <div class="content">
    <p class="header">Часто <span style="color: #5BBA6A">задаваемые</span> вопросы</p>
    <div :class="{'white-container': isWhite, 'question-container': !isWhite}" v-for="question in questions" :key="question" @click="open(question)">
      <p class="title" :style="[question.isOpen ? {'color': '#5BBA6A'} : {'color': 'black'}]">{{question.title}}</p>
      <p class="content-text" :style="[question.isOpen ? {'display': 'block'} : {'display': 'none'}]">{{question.content}}</p>
      <div v-if="question.isOpen" class="indicator opened">
        <svg width="12" height="7" viewBox="0 0 12 7">
          <path d="M6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.46967ZM6.75 2V1H5.25V2H6.75Z"/>
        </svg>
      </div>
      <div v-else class="indicator">
        <svg width="12" height="7" viewBox="0 0 12 7">
          <path d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989593 11.3033 0.696699C11.0104 0.403806 10.5355 0.403806 10.2426 0.696699L6 4.93934L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "questions-component",
  props: {
    isWhite: Boolean,
    questionProps: []
  },
  data() {
    return {
      questions: [
        {
          title: "Что такое Docs.flow?",
          content: "Вы оставляете заявку на нашем сайте, через некоторое время получаете практически логин и пароль от админки к своему аккаунту. Эта панель будет личной страницей вашей компании, где вы сможете добавлять и удалять своих сотрудников, а так же вы сможете увидеть все документы которые будут в ороте внутри вашей компании",
          isOpen: false
        },
        {
          title: "Как работает  Docs.flow?",
          content: "Вы оставляете заявку на нашем сайте, через некоторое время получаете практически логин и пароль от админки к своему аккаунту. Эта панель будет личной страницей вашей компании, где вы сможете добавлять и удалять своих сотрудников, а так же вы сможете увидеть все документы которые будут в ороте внутри вашей компании",
          isOpen: false
        },
        {
          title: "Все данные конфиденциальны?",
          content: "Вы оставляете заявку на нашем сайте, через некоторое время получаете практически логин и пароль от админки к своему аккаунту. Эта панель будет личной страницей вашей компании, где вы сможете добавлять и удалять своих сотрудников, а так же вы сможете увидеть все документы которые будут в ороте внутри вашей компании",
          isOpen: false
        },
      ]
    }
  },
  mounted() {
    // if (this.questionProps === null) {
    //   this.questions = []
    // } else if (this.questionProps.length !== 0) {
    //   this.questions = this.questionProps
    // }
  },
  methods: {
    open(question) {
      question.isOpen = !question.isOpen
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  margin-top: 100px;
}
.header {
  color: black;
  text-align: center;
  margin-bottom: 24px;
  font-size: 35px;
  font-family: Stolzl-medium, system-ui;
}
.question-container {
  text-align: start;
  margin-top: 20px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.09);
  padding: 25px 54px 25px 70px;
}
.white-container {
  text-align: start;
  margin-top: 20px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  background: white;
  border: 1px solid white;
  padding: 25px 54px 25px 70px;
}
.title {
  text-align: start;
  transition: 0.3s;
  display: inline-block;
  vertical-align: middle;
  color: black;
  font-family: Stolzl-regular, system-ui;
  font-size: 20px;
}
.indicator {
  position: absolute;
  right: 60px;
  display: inline-block;
  background: white;
  width: 40px;
  top: 16px;
  height: 40px;
  cursor: pointer;
  border-radius: 500px;
  transition: 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.14);
}
.indicator svg {
  width: 14px;
  height: 14px;
  padding: 12px;
  margin-left: 1px;
  transition: 0.3s;
  fill: rgba(0, 0, 0, 0.14);
}
.indicator:hover {
  border-color: #5BBA6A;
}
.indicator:hover svg {
  fill: #5BBA6A;
}
.opened {
  border-color: #5BBA6A;
}
.opened svg {
  fill: #5BBA6A;
}
.content-text {
  margin-top: 24px;
  display: none;
  transition: 0.3s;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.58);
  font-size: 16px;
  font-family: Rubik-regular, system-ui;
}

@media screen and (max-width: 950px) {
  .header {
    font-size: 24px;
    line-height: 28px;
  }
  .title {
    font-size: 16px;
    line-height: 19px;
  }
  .question-container, .white-container {
    padding: 21px 0 21px 32px;
  }
  .indicator {
    width: 30px;
    height: 30px;
    right: 30px;
  }
  .indicator svg {
    width: 14px;
    height: 14px;
    padding: 8px;
  }
  .question-container {
    width: auto;
    margin-left: 24px;
    margin-right: 24px;
  }
}
@media screen and (max-width: 900px){
  .question-container {
    background: white;
    border: none;
  }
  .header {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 70%;
  }
}
</style>
