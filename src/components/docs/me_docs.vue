<template>
  <div class="content">
    <div>
      <p class="tab-button" @click="this.$router.push('/my-docs')">Мои документы</p>
      <p class="tab-button" @click="this.$router.push('/docs')">Создать новый документ</p>
    </div>
    <p class="header-text">Мои документы</p>
    <div v-for="doc in docs" :key="doc">
      <p class="title-text-head">Ссылка на документ: </p>
      <input :value="doc.content">
      <p class="title-text-head">Тип документа:</p>
      <input :value="doc.type">
      <p class="primary-button">Подписать</p>
      <div class="line" />
    </div>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  name: "me-doc-component",
  data() {
    return {
      docs: []
    }
  },
  mounted() {
    this.loadDocs()
  },
  methods: {
    loadDocs() {
      api.docs.getMyDocs().then((response) => {
        this.docs = response.data;
      })
    }
  }
}
</script>

<style scoped>
.content {
  text-align: start;
  width: 60%;
  margin: 20px auto 50px;
}
.header-text {
  margin-top: 40px;
  color: black;
  font-size: 25px;
  line-height: 29px;
  font-family: Stolzl-medium, system-ui;
  text-align: center;
}
input {
  margin-top: 5px;
  background: white;
  border: 1px solid #F8F8F8;
  border-radius: 20px;
  padding: 19px 22px;
  width: 89%;
  font-size: 18px;
  pointer-events: none;
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
.title-text-head {
  padding-left: 20px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  text-align: start;
  font-family: Rubik-regular, system-ui;
  font-size: 18px;
  font-weight: 600;
  line-height: 17px;
}
.tab-button {
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #5BBA6A;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.3s;
  margin-right: 12px;
}
.tab-button:hover {
  background-color: #419a4c;
}
.line {
  width: 100%;
  height: 1px;
  color: rgba(0, 0, 0, 0.1);
}
.list-container {
  margin-top: 10px;
  background: white;
  border-radius: 10px;
}
.data-all-container {
  width: 100%;
  overflow-x: scroll;
}
::-webkit-scrollbar {
  width: 1px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #5BBA6A;
}
::-webkit-scrollbar:hover {
  background-color: #419a4c;
}
::-webkit-scrollbar-button {
  background: #F8F8F8;
}
.list-table {
  border-collapse: collapse;
  width: 100%;
  border: none;
}
.list-table .data-line:nth-child(even) {
  background-color: #FAFAFB;
}
.data-container {
  padding: 15px 20px;
  text-align: start;
}
.title-text {
  padding-left: 20px;
  color: rgba(0, 0, 0, 0.8);
  text-align: start;
  font-family: Rubik-regular, system-ui;
  font-size: 14px;
  line-height: 17px;
}
.data-text {
  padding-left: 20px;
  color: black;
  text-align: start;
  font-family: Rubik-light, system-ui;
  font-size: 14px;
  line-height: 17px;
}

.primary-button {
  color: white;
  font-size: 18px;
  margin-top: 17px;
  line-height: 21px;
  padding: 19px 0;
  width: 50%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background: #5BBA6A;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.primary-button:hover {
  background: #419a4c;
}
</style>