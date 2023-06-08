<template>
  <header-view />
  <sign-up-component />
  <footer-component />
</template>

<script>
import HeaderView from "@/components/header";
import FooterComponent from "@/components/footer/footer";
import SignUpComponent from "@/components/signup/signup";
export default {
  name: "sign-up-view",
  components: {SignUpComponent, FooterComponent, HeaderView}
}
</script>

<style scoped>

</style>
