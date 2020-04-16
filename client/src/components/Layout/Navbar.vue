<template>
  <b-navbar toggleable="lg" type="dark" variant="info" id="menu">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/products" exact exact-active-class="active">Produkter</b-nav-item>
        <b-nav-item to="/contact" exact exact-active-class="active">Kontakt</b-nav-item>
        <b-nav-item to="/login" exact exact-active-class="active">Login</b-nav-item>
        <b-nav-item-dropdown text="Dashboard" v-if="LoginData.token || this.login !== ''">
          <b-dropdown-item href="/dashboard/products" exact exact-active-class="active">Produkter</b-dropdown-item>
          <b-dropdown-item href="/dashboard/categories" exact exact-active-class="active">Kategorier</b-dropdown-item>
          <b-dropdown-item href="/dashboard/contact" exact exact-active-class="active">Kontakt</b-dropdown-item>
          <b-dropdown-item
            href="/dashboard/contactInformation"
            exact
            exact-active-class="active"
          >Kontakt informationer</b-dropdown-item>
          <b-dropdown-item @click="logout()">logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      login: ""
    };
  },
  created() {
    if (localStorage.token) {
      this.login = localStorage.token;
    }
  },
  computed: mapGetters(["LoginData"]),
  methods: {
    logout() {
      this.$store.commit("logOut");
      this.login = "";
      window.location.replace("/login");
    }
  }
};
</script>

<style>
#menu {
  background-color: #007bff !important;
}
</style>