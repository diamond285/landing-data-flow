<template>
  <div class="content">
    <div>
      <p class="tab-button" @click="this.$router.push('/me-docs')">Документы для подписания</p>
      <p class="tab-button" @click="this.$router.push('/docs')">Создать новый документ</p>
    </div>
    <p class="header-text">Мои документы</p>
    <div v-for="doc in docs" :key="doc">
      <p class="title-text-head">Ссылка на документ: </p>
      <input :value="doc.content">
      <p class="title-text-head">Тип документа:</p>
      <input :value="doc.type">
      <p class="title-text-head">Люди для подписи: </p>
      <div class="list-container">
        <table style="width: 99%">
          <tr class="data-line">
            <th class="data-container title-text">Фамилия</th>
            <th class="data-container title-text">Имя</th>
            <th class="data-container title-text">Роль</th>
          </tr>
        </table>
        <div class="data-all-container">
          <table class="list-table" >
            <tr v-for="routeUser in doc.routes" :key="routeUser" class="data-line">
              <td class="data-container data-text">{{routeUser.user.firstName}}</td>
              <td class="data-container data-text">{{routeUser.user.lastName}}</td>
              <td class="data-container data-text">{{routeUser.user.roleResponse.name}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="line" />
    </div>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  name: "my-doc-component",
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
  pointer-events: none;
  padding: 19px 22px;
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
</style>