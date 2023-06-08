<template>
  <div class="with-nav-container">
    <navigation-component class="navigation-container" v-on:positionChanged="changeFragment"/>
    <div class="data-container">
      <admin-users-component v-if="currentComponent === 2" />
      <admin-user-controller-components v-if="currentComponent === 3" />
    </div>
  </div>
</template>

<script>
import App from "@/App";
import NavigationComponent from "@/components/admin/components/navigation";
import AdminUsersComponent from "@/components/admin/components/admin_users";
import AdminUserControllerComponents from "@/components/admin/components/admin_user_controller.vue";

export default {
  name: "admin-view",
  components: {
    AdminUserControllerComponents,
    AdminUsersComponent,
    NavigationComponent
  },
  mounted() {
    App.methods.adminBody();
  },
  data() {
    return {
      currentComponent: 0
    }
  },
  methods: {
    doLogin() {

    },
    changeFragment(position) {
      this.currentComponent = position
    }
  }
}
</script>

<style scoped>
.with-nav-container {
  height: 100%;
  width: 100%;
  position: absolute;
  display: table;
}
.data-container {
  height: 100%;
  display: table-cell;
  flex-direction: column;
  vertical-align: top;
}
.navigation-container {
  width: 1px;
  vertical-align: top;
  flex-direction: column;
  display: table-cell;
}
</style>
