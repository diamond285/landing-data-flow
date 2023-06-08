<template>
  <router-view />
</template>
<script>

export default {
  name: 'App',
  mounted() {
    this.defaultBody();
  },
  methods: {
    defaultBody() {
      const body = document.body;
      body.classList.add('default-body');
      body.classList.remove('admin-body');
    },
    adminBody() {
      const body = document.body;
      body.classList.remove('default-body');
      body.classList.add('admin-body');
    }
  }
}
</script>

<style>
@import "./assets/fonts/rubik.css";
@import "./assets/fonts/stolzl.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.admin-body {
  background: #F8F8F8;
}
.default-body {
  width: 70%;
  padding: 0 15%;
  background: white;
}
@media screen and (max-width: 1560px) {
  .default-body {
    width: 80%;
    padding: 0 10%;
  }
}
@media screen and (max-width: 1370px) {
  .default-body {
    width: 90%;
    padding: 0 5%;
  }
}
@media screen and (max-width: 1220px) {
  .default-body {
    width: 95%;
    padding: 0 2.5%;
  }
}
@media screen and (max-width: 950px) {
  .default-body {
    width: 100%;
    padding: 0;
  }
}
@media screen and (max-width: 900px){
  .default-body {
    background-color: #F8F8F8;
  }
}
body, p {
  padding: 0;
  margin: 0;
}

::-webkit-scrollbar {
  width: 1px;
  height: 0;
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
</style>
