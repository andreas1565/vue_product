<template>
  <section class="container mt-2">
    <form class="form-signin w-25 mx-auto" @submit.prevent="handelsubmit">
      <img
        class="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        name="email"
        class="form-control"
        placeholder="Email address"
        autofocus
        v-model="email"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control mt-2"
        name="password"
        placeholder="Password"
        v-model="password"
      />
      <button class="btn btn-lg mt-4 btn-primary btn-block" type="submit">Sign in</button>
      <span
        v-for="error in errors"
        :key="`${error}-${Math.random()}`"
        class="d-block mt-2 alert alert-danger"
      >{{ error }}</span>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      errors: [],
      email: null,
      password: null
    };
  },
  methods: {
    ...mapActions(["Login"]),
    handelsubmit() {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Kræver email");
        return false;
      }
      if (!this.password) {
        this.errors.push("Kræver password");
        return false;
      }
      if (!this.errors.length) {
        const Formdata = {
          email: this.email,
          password: this.password
        };
        this.Login(Formdata);
        return true;
      }
    }
  }
};
</script>

<style></style>
