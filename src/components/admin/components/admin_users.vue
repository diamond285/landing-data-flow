<template>
  <div class="content">
    <div class="invest-data">
      <table style="width: 100%;">
        <tr>
          <td style="text-align: start">
            <p class="header-text">Пользователи</p>
            <p class="hint-text">Список зарегистрированных пользователей</p>
          </td>
          <td style="text-align: right">
            <div class="search-container">
              <input class="search-input position" placeholder="Поиск...">
              <svg class="search-icon position" width="26" height="26" viewBox="0 0 26 26">
                <g clip-path="url(#clip0_537_1159)">
                  <path d="M25.6826 24.1508L19.2162 17.6843C20.9783 15.5292 21.8448 12.7791 21.6362 10.003C21.4276 7.22696 20.16 4.63725 18.0956 2.76957C16.0311 0.901894 13.3278 -0.100859 10.5448 -0.0312743C7.76176 0.0383101 5.11194 1.17491 3.14342 3.14342C1.17491 5.11194 0.0383101 7.76176 -0.0312743 10.5448C-0.100859 13.3278 0.901894 16.0311 2.76957 18.0956C4.63725 20.16 7.22696 21.4276 10.003 21.6362C12.7791 21.8448 15.5292 20.9783 17.6843 19.2162L24.1508 25.6826C24.3551 25.8799 24.6287 25.9891 24.9128 25.9867C25.1968 25.9842 25.4685 25.8703 25.6694 25.6694C25.8703 25.4685 25.9842 25.1968 25.9867 24.9128C25.9891 24.6287 25.8799 24.3551 25.6826 24.1508ZM10.8333 19.5C9.11924 19.5 7.44362 18.9917 6.0184 18.0394C4.59317 17.0871 3.48234 15.7336 2.82638 14.1499C2.17043 12.5663 1.9988 10.8237 2.3332 9.14256C2.66761 7.46139 3.49303 5.91714 4.70508 4.70508C5.91714 3.49303 7.46139 2.66761 9.14256 2.3332C10.8237 1.9988 12.5663 2.17043 14.1499 2.82638C15.7336 3.48234 17.0871 4.59317 18.0394 6.0184C18.9917 7.44362 19.5 9.11924 19.5 10.8333C19.4974 13.1311 18.5835 15.334 16.9587 16.9587C15.334 18.5835 13.1311 19.4974 10.8333 19.5Z"/>
                </g>
                <defs>
                  <clipPath id="clip0_537_1159">
                    <rect width="26" height="26" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </td>
        </tr>
      </table>
      <div class="list-container">
        <table style="width: 99%">
          <tr class="data-line">
            <th class="data-container title-text">Фамилия</th>
            <th class="data-container title-text">Имя</th>
            <th class="data-container title-text">Роль</th>
            <th class="data-container title-text">Почта</th>
            <th class="data-container title-text">Пароль</th>
            <th class="data-container title-text">ID</th>
          </tr>
        </table>
        <div class="data-all-container">
          <table class="list-table" >
              <tr v-for="user in users" :key="user" class="data-line">
              <td class="data-container data-text">{{user.lastName}}</td>
              <td class="data-container data-text">{{user.firstName}}</td>
              <td class="data-container data-text">{{user.roleResponse.name}}</td>
              <td class="data-container data-text">{{user.email}}</td>
              <td class="data-container data-text">{{user.password}}</td>
              <td class="data-container data-text">{{user.id}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  name: "admin-users-component",
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      api.users.getAllUsers().then((result) => {
        this.users = result.data
        console.log(result.data)
      })
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  text-align: start;
}
.invest-data {
  padding: 30px 108px 40px 30px;
}
.header-text {
  color: black;
  font-family: Rubik-medium, system-ui;
  font-size: 26px;
  line-height: 42px;
}
.hint-text {
  color: rgba(0, 0, 0, 0.38);
  font-family: Rubik-regular, system-ui;
  font-size: 16px;
  line-height: 20px;
}
tr, td, th {
  height: 1px;
}
@-moz-document url-prefix() {
  tr, td, th {
    height: 100%;
  }
}
input:focus {
  outline: none;
}
::placeholder {
  color: rgba(0, 0, 0, 0.38);
}
textarea {
  height: 92px;
}
.position {
  display: inline-block;
  vertical-align: middle;
}
.search-container {
  float: right;
  padding: 16px 20px;
  border-radius: 10px;
  background: white;
  text-align: start;
  width: max-content;
}
.search-input {
  width: 270px;
  border: none;
  font-size: 15px;
  line-height: 18px;
  font-family: Rubik-regular, system-ui;
}
.search-icon {
  width: 18px;
  height: 18px;
  fill: rgba(0, 0, 0, 0.38);
}
.list-container {
  margin-top: 24px;
  background: white;
  width: 73.5%;
  height: 86%;
  border-radius: 10px;
  position: absolute;
}
.data-all-container {
  width: 100%;
  height: 95%;
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
  width: 16.6%;
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
