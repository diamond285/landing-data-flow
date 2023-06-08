<template>
  <header-view />
  <sign-in-component />
  <footer-component />
</template>

<script>
import HeaderView from "@/components/header";
import FooterComponent from "@/components/footer/footer";
import SignInComponent from "@/components/signin/signin";
export default {
  name: "sign-in-view",
  components: {SignInComponent, FooterComponent, HeaderView}
}
</script>

<style scoped>
</style>
