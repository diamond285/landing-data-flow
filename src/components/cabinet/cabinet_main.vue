<template>
  <div class="main-content">
    <div class="navigation-component">
      <img class="logo" @click="this.$router.push('/')" src="@/assets/images/logo.svg">
      <div class="line"></div>
      <div v-for="i in navButtons.length" class="nav-button" :key="i" :class="{'nav-selected': selectedIndex === i - 1}" @click="selectNav(i - 1)">
        <p>{{navButtons[i - 1]}}</p>
      </div>
      <div class="log-out" @click="logout">
        <p>Выйти</p>
      </div>
    </div>
    <div class="page-component">
      <cabinet-users-component v-if="selectedIndex === 0" />
      <cabinet-docs-for-other v-if="selectedIndex === 1" />
      <cabinet-docs-for-me v-if="selectedIndex === 2" />
      <cabinet-canceled-docs-component v-if="selectedIndex === 3" />
      <cabinet-expired-docs-component v-if="selectedIndex === 4" />
      <cabinet-all-documents-component v-if="selectedIndex === 5" />
      <cabinet-create-document-component v-if="selectedIndex === 6" />
    </div>
  </div>
</template>

<script>
import CabinetUsersComponent from "@/components/cabinet/cabinet_users.vue";
import CabinetAllDocumentsComponent from "@/components/cabinet/cabinet__all_documents.vue";
import CabinetDocsForOther from "@/components/cabinet/cabinet_my_for_other.vue";
import CabinetDocsForMe from "@/components/cabinet/cabinet_docs_for_me.vue";
import CabinetCanceledDocsComponent from "@/components/cabinet/cabinet_canceled_docs.vue";
import CabinetExpiredDocsComponent from "@/components/cabinet/cabinet_docs_expired.vue";
import CabinetCreateDocumentComponent from "@/components/cabinet/cabinet_create_document.vue";

export default {
  name: "cabinet-component",
  components: {
    CabinetCreateDocumentComponent,
    CabinetExpiredDocsComponent,
    CabinetCanceledDocsComponent,
    CabinetDocsForMe, CabinetDocsForOther, CabinetAllDocumentsComponent, CabinetUsersComponent},
  data() {
    return {
      selectedIndex: 0,
      navButtons: ["Требующие участия", "На согласовании", "На утверждении", "Отменены", "Просроченные", "Все документы", "Создать"]
    }
  },
  methods: {
    selectNav(index) {
      this.selectedIndex = index
    },
    logout() {
      localStorage.removeItem("auth_token")
      this.$router.push("/sign-in")
    }
  }
}
</script>

<style scoped>
.main-content {
  z-index: 1;
  width: 100%;
  height: 100vh;
  left: 0;
  position: absolute;
}
.navigation-component {
  text-align: start;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  background: white;
  width: 20%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.page-component {
  width: 80%;
  height: 100%;
  background: #F5F5F5;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.logo {
  cursor: pointer;
  width: 30%;
  height: auto;
  margin-top: 30px;
  margin-left: 40px;
}
.line {
  margin-top: 30px;
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #0000001A;
}
.nav-button {
  margin: 5px 10px;
  padding: 14px 30px 14px 30px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
  transition: 0.2s;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.nav-button:hover {
  background: #f3f3f3;
}
.nav-button>p {
  font-family: Rubik-regular, system-ui;
  color: #00000063;
  font-size: 15px;
  line-height: 17px;
}
.nav-selected {
  background: #fafafa;
}
.nav-selected>p {
  color: black;
}

.log-out {
  margin: 40px 10px 0 10px;
  padding: 14px 30px 14px 30px;
  color: #FF0000CC;
  background: #FF00001A;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>