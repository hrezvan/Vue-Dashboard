<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
      <app-sidebar></app-sidebar>
      <router-view></router-view>
      <!-- <app-home></app-home>   -->
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Sidebar from './components/sidebar.vue';
import Home from './pages/home.vue';
export default {
  // name: "app",
  components: {
    "app-navbar": Navbar,
    "app-sidebar": Sidebar,
    "app-home": Home
  },
  data() {
    return {};
  },
};
</script>

<style>
  * {
    margin:0;
    padding:0;
  }

  .container {
    display: flex;
  }
</style>
