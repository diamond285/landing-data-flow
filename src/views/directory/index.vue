<template>
  <header-view />
  <directory-search-component />
  <questions-component />
  <question-manager-compnent />
  <footer-component />
</template>

<script>
import HeaderView from "@/components/header";
import DirectorySearchComponent from "@/components/directory/directory_search";
import QuestionsComponent from "@/components/home/questions";
import QuestionManagerCompnent from "@/components/directory/question_manager";
import FooterComponent from "@/components/footer/footer";
import App from "@/App";
export default {
  name: "directory-view",
  components: {FooterComponent, QuestionManagerCompnent, QuestionsComponent, DirectorySearchComponent, HeaderView},
  mounted() {
    App.methods.defaultBody()
  }
}
</script>

<style scoped>

</style>
