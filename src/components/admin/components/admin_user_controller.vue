<template>
  <div class="content">
    <div class="container">
      <p class="header-text">Добавить пользователя</p>
      <input placeholder="Имя" v-model="addUser.firstName">
      <input placeholder="Фамилия" v-model="addUser.lastName">
      <input placeholder="Описание" v-model="addUser.bio">
      <input placeholder="Роль" v-model="addUser.role">
      <input placeholder="Почта" v-model="addUser.email">
      <input placeholder="Пароль" v-model="addUser.password">
      <p class="primary-button" @click="createUser">Добавить</p>
    </div>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  name: "admin-user-controller-components",
  data() {
    return {
      addUser: {
        firstName: "",
        lastName: "",
        bio: "",
        role: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
    createUser() {
      if (this.addUser.firstName.length !== 0 && this.addUser.lastName.length !== 0 && this.addUser.bio.length !== 0
          && this.addUser.role.length !== 0 && this.addUser.email.length !== 0 && this.addUser.password.length !== 0) {
        api.role.addRole({
          data: {
            name: this.addUser.role
          }
        }).then((response) => {
          this.createdRole(response.data)
        })
      }
    },
    createdRole(roleId) {
      api.users.addUser({
        data: {
          firstName: this.addUser.firstName,
          lastName: this.addUser.lastName,
          bio: this.addUser.bio,
          email: this.addUser.email,
          password: this.addUser.password,
          roleId: roleId,
        }
      }).then(() => {
        alert("User added")
        this.addUser = {
          firstName: "",
          lastName: "",
          bio: "",
          role: "",
          email: "",
          password: ""
        }
      })
    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 60px;
}
.container {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.header-text {
  color: black;
  font-size: 25px;
  line-height: 29px;
  font-family: Stolzl-medium, system-ui;
  text-align: center;
}
input {
  margin-top: 17px;
  background: white;
  border: 1px solid #F8F8F8;
  border-radius: 20px;
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
.primary-button {
  color: white;
  font-size: 18px;
  margin-top: 17px;
  line-height: 21px;
  padding: 19px 0;
  width: 50%;
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