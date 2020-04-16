<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-3 w-50 mx-auto">
    <form class="form-signinx" @submit.prevent="onsubmit">
      <div class="form-group">
        <label for="name">Navn</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="whrite a name of your product"
          name="name"
          v-model="OneCategorie.name"
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
export default {
  props: ["OneCategorie", "DashboardEditCategories"],
  name: "DashboardEditCategories",
  data() {
    return {
      errors: [],
      name: null
    };
  },
  methods: {
    validate() {
      if (!this.OneCategorie.name) {
        this.errors.push("Kræver Navn");
        return false;
      }
    },
    onsubmit() {
      this.errors = [];
      this.validate();
      if (!this.errors.length) {
        const Formdata = {
          id: this.OneCategorie.id,
          name: this.OneCategorie.name
        };
        this.DashboardEditCategories(Formdata);
      }
    }
  }
};
</script>

<style>
</style>