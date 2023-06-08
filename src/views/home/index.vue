<template>
  <header-view />
  <target-component />
  <solutions-component />
  <questions-component />
  <upgrade-component />
  <footer-component />
</template>

<script>
import HeaderView from "@/components/header";
import TargetComponent from "@/components/home/target";
import SolutionsComponent from "@/components/home/solutions";
import QuestionsComponent from "@/components/home/questions";
import FooterComponent from "@/components/footer/footer";
import UpgradeComponent from "@/components/home/upgrade";
import App from "@/App";
export default {
  name: "home-view",
  components: {UpgradeComponent, FooterComponent, QuestionsComponent, SolutionsComponent, TargetComponent, HeaderView},
  mounted() {
    App.methods.defaultBody()
  }
}
</script>

<style scoped>

</style>
