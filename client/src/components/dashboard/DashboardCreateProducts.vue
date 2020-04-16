<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-3 w-50 mx-auto">
    <h3>lave et nyt produkt</h3>
    <form class="form-signinx" enctype="multipart/form-data" @submit.prevent="onsubmit">
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
        <label for="price">Pris</label>
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="Chouse a Price For Your Product"
          name="price"
          v-model="price"
        />
      </div>
      <div class="form-group">
        <label for="description">Beskrivelse</label>
        <textarea
          class="form-control"
          name="description"
          id="description"
          rows="3"
          placeholder="whrite a description of your product"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="categories">Kategorie</label>
        <select
          class="form-control"
          name="categories"
          id="categories"
          v-model="categories"
          required
        >
          <option selected disabled>Vælg en kategorie</option>
          <option
            v-for="categorie in allCategories"
            v-bind:value="`${categorie.id}`"
            :key="`${categorie.id}-${Math.random()}`"
          >{{categorie.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="image">Upload et billede til dit produkt</label>
        <input type="file" class="form-control-file" name="image" ref="image" id="image" />
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" type="submit">oprette et nyt produkt</button>
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DashboardCreateProducts",
  data() {
    return {
      errors: [],
      name: null,
      price: null,
      description: null,
      categories: null,
      image: null
    };
  },
  methods: {
    ...mapActions(["fetchCategories", "AddProduct"]),
    validate(file) {
      if (!this.name) {
        this.errors.push("Kræver Navn");
        return false;
      }
      if (!this.price) {
        this.errors.push("Kræver Pris");
        return false;
      } else if (isNaN(this.price)) {
        this.errors.push("Pris skal kun have tal");
        return false;
      }
      if (!this.description) {
        this.errors.push("Kræver beskrivelse");
        return false;
      }
      if (!this.categories === "") {
        this.errors.push("Kræver kategorie");
        return false;
      }
      if (!file) {
        this.errors.push("Kræver billede");
        return false;
      }
    },
    onsubmit() {
      const file = this.$refs.image.files[0];
      this.errors = [];
      this.validate(file);
      if (!this.errors.length) {
        /* const Formdata = {
          name: this.name,
          price: this.price,
          description: this.description,
          categories: this.categories,
          image: file
        }; */
        const Formdata = new FormData();
        Formdata.append("name", this.name);
        Formdata.append("price", this.price);
        Formdata.append("description", this.description);
        Formdata.append("categories", this.categories);
        Formdata.append("image", this.$refs.image.files[0]);
        this.AddProduct(Formdata);
        console.log(Formdata);
        this.$router.push("/dashboard/products");
        return true;
      }
    }
  },
  // Gets the data from the store
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories();
  }
};
</script>

<style>
</style>