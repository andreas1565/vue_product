<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <VueFooter />
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar";
import VueFooter from "./components/Layout/VueFooter";
export default {
  components: {
    Navbar,
    VueFooter
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.remove-border{
  border-bottom: none !important;
}
</style>
