<template>
  <header-view />
  <my-doc-component />
  <footer-component />
</template>

<script>
import HeaderView from "@/components/header/index.vue";
import FooterComponent from "@/components/footer/footer.vue";
import MyDocComponent from "@/components/docs/my_docs.vue";

export default {
  name: "my-docs-view",
  components: {MyDocComponent, FooterComponent, HeaderView}
}
</script>

<style scoped>

</style>