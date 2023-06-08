<template>
  <header-view />
  <me-doc-component />
  <footer-component />
</template>

<script>
import HeaderView from "@/components/header/index.vue";
import FooterComponent from "@/components/footer/footer.vue";
import MeDocComponent from "@/components/docs/me_docs.vue";

export default {
  name: "me-docs-view",
  components: {MeDocComponent, FooterComponent, HeaderView}
}
</script>

<style scoped>

</style>