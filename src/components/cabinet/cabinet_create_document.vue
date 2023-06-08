<template>
  <div class="content">
    <input placeholder="Ссылка на контент" v-model="content">
    <input placeholder="Тип документа" v-model="type">
    <p class="title-text" style="margin-top: 20px; font-size: 16px; font-weight: 600;">Люди для подписания</p>
    <div class="list-container" style="margin-top: 10px;">
      <table style="width: 99%">
        <tr class="data-line">
          <th class="data-container title-text">Фамилия</th>
          <th class="data-container title-text">Имя</th>
          <th class="data-container title-text">Роль</th>
          <th class="data-container title-text">Удалить</th>
        </tr>
      </table>
      <div class="data-all-container">
        <table class="list-table" >
          <tr v-for="user in addedUsers" :key="user" class="data-line">
            <td class="data-container data-text">{{user.lastName}}</td>
            <td class="data-container data-text">{{user.firstName}}</td>
            <td class="data-container data-text">{{user.roleResponse.name}}</td>
            <td class="data-container data-text"><p class="delete-button" @click="deleteUser(user.id)">Удалить</p></td>
          </tr>
        </table>
      </div>
    </div>
    <div style="margin-top: 20px">
      <input placeholder="Поиск" v-model="searchWord" style="margin: 0; display: inline-block; vertical-align: middle; width: 200px;">
      <p class="add-button" style="display: inline-block; vertical-align: middle; margin-left: 20px; padding-left: 20px; padding-right: 20px;" @click="searchUser">Поиск</p>
    </div>
    <div class="list-container">
      <table style="width: 99%">
        <tr class="data-line">
          <th class="data-container title-text">Фамилия</th>
          <th class="data-container title-text">Имя</th>
          <th class="data-container title-text">Роль</th>
          <th class="data-container title-text">Добавить</th>
        </tr>
      </table>
      <div class="data-all-container">
        <table class="list-table" >
          <tr v-for="user in searchUsers" :key="user" class="data-line">
            <td class="data-container data-text">{{user.lastName}}</td>
            <td class="data-container data-text">{{user.firstName}}</td>
            <td class="data-container data-text">{{user.roleResponse.name}}</td>
            <td class="data-container data-text"><p class="add-button" @click="addUser(user)">Добавить</p></td>
          </tr>
        </table>
      </div>
    </div>
    <p class="primary-button" @click="createDoc">Создать</p>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  name: "cabinet-create-document-component",
  data() {
    return {
      addedUsers: [],
      searchUsers: [],
      searchWord: "",
      content: "",
      type: ""
    }
  },
  methods: {
    addUser(user) {
      for (let i = 0; i < this.addedUsers.length; i++) {
        if (this.addedUsers[i].id === user.id) {
          return;
        }
      }
      this.addedUsers.push(user);
    },
    deleteUser(userId) {
      for (let i = 0; i < this.addedUsers.length; i++) {
        if (this.addedUsers[i].id === userId) {
          this.addedUsers.splice(i, 1);
          break;
        }
      }
    },
    searchUser() {
      api.users.searchUser(this.searchWord).then((response) => {
        this.searchUsers = response.data
      })
    },
    createDoc() {
      if (this.content.length !== 0 && this.type.length !== 0 && this.addedUsers.length !== 0) {
        let routeUsers = []
        for (let i = 0; i < this.addedUsers.length; i++) {
          routeUsers.push(this.addedUsers[i].id)
        }
        api.docs.createDoc({
          data: {
            content: this.content,
            type: this.type,
            route: routeUsers
          }
        }).then(() => {
          this.$router.push('/my-docs')
        })
      } else {
        alert("Заполните все данные")
      }
    },
  }
}
</script>

<style scoped>
.content {
  margin-left: 20px;
  margin-right: 20px;
}

input {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-top: 17px;
  background: white;
  border: 1px solid #F8F8F8;
  border-radius: 20px;
  padding: 14px 22px;
  width: 100%;
  font-size: 16px;
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
.primary-button {
  margin-top: 20px;
  margin-left: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: max-content;
  background: #5BBA6A;
  color: white;
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  padding: 5px 40px;
  font-family: Rubik-regular, system-ui;
  transition: 0.3s;
}
.primary-button:hover {
  background-color: #419a4c;
}
.delete-button {
  color: white;
  text-align: center;
  background-color: red;
  font-size: 12px;
  border-radius: 10px;
  padding: 18px 0;
  cursor: pointer;
}
.add-button {
  color: white;
  text-align: center;
  background-color: #5BBA6A;
  font-size: 12px;
  border-radius: 10px;
  padding: 18px 0;
  cursor: pointer;
}

.list-container {
  margin-top: 24px;
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

</style>