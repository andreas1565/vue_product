<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-3 w-50 mx-auto">
    <h3>lave en nye kategorie</h3>
    <form class="form-signinx" @submit.prevent="onsubmit">
      <div class="form-group">
        <label for="name">Navn</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="whrite a name of your product"
          name="name"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" type="submit">create a new product</button>
      </div>
      <p
        class="help-block with-errors text-danger mt-2"
        v-for="error in errors"
        :key="`${error}-${Math.random()}`"
      >{{ error }}</p>
    </form>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DashboardCreateCategories",
  data() {
    return {
      errors: [],
      name: null
    };
  },
  methods: {
    ...mapActions(["addCategorie"]),
    validate() {
      if (!this.name) {
        this.errors.push("Kræver Navn");
        return false;
      }
    },
    onsubmit() {
      this.errors = [];
      this.validate();
      if (!this.errors.length) {
        const Formdata = {
          name: this.name
        };
        this.addCategorie(Formdata);
        this.$router.push("/dashboard/categories");
      }
    }
  }
};
</script>

<style>
</style>