<template>
  <header-view />
  <contacts-component />
  <questions-component />
  <question-manager-compnent />
  <footer-component />
</template>

<script>
import HeaderView from "@/components/header";
import QuestionManagerCompnent from "@/components/directory/question_manager";
import FooterComponent from "@/components/footer/footer";
import ContactsComponent from "@/components/contacts/contacts";
import QuestionsComponent from "@/components/home/questions";
import App from "@/App";
export default {
  name: "contacts-view",
  components: {QuestionsComponent, ContactsComponent, FooterComponent, QuestionManagerCompnent, HeaderView},
  mounted() {
    App.methods.defaultBody()
  }
}
</script>

<style scoped>

</style>
