<template>
  <main role="main" class="container">
    <h3>opdater produktinfo</h3>
    <div class="row">
      <!--update product info-->
      <form class="form-signinx col-sm-6" @submit.prevent="onsubmit(OneProduct, $event)">
        <div class="form-group">
          <label for="exampleFormControlInput1">Navn</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="whrite a name of your product"
            name="name"
            v-model="OneProduct.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="price">Pris</label>
          <input
            type="number"
            class="form-control"
            id="price"
            v-model="OneProduct.price"
            name="price"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Beskrivelse</label>
          <textarea
            class="form-control"
            name="description"
            id="description"
            rows="3"
            v-model="OneProduct.description"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Opdater kategorie</label>
          <select class="form-control" id="exampleFormControlSelect1" name="categories">
            <option
              v-for="categorie in allCategories"
              :key="`${categorie.id}-${Math.random()}`"
              :selected="categorie.id == OneProduct.categoryId ? 'selected' : ''"
              :value="categorie.id"
            >{{ categorie.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <button class="btn btn-lg btn-primary btn-block" type="submit">send</button>
        </div>
      </form>
      <!--update product info end-->
      <!--update product image-->
      <form
        class="col-sm-6"
        enctype="multipart/form-data"
        @submit.prevent="updateimage(OneProduct)"
        :key="OneProduct.imageurl"
      >
        <div class="form-group">
          <label for="image">Opdater billede til dette produkt</label>
          <b-img v-bind:src="OneProduct.imageurl" fluid alt="Responsive image"></b-img>
          <input type="file" class="form-control-file mt-2" name="image" ref="image" id="image" />
        </div>
        <div class="form-signinx form-group">
          <button class="btn btn-lg btn-primary btn-block" type="submit">send</button>
        </div>
      </form>
      <!--update product image end-->
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DashboardEditProduct",
  data() {
    return {
      name: null,
      price: null,
      description: null,
      image: null
    };
  },
  methods: {
    ...mapActions([
      "fetchOneProduct",
      "fetchCategories",
      "UpdateProduct",
      "UpdateProductImage"
    ]),
    onsubmit(OneProduct, $event) {
      const Formdata = {
        id: OneProduct.id,
        name: OneProduct.name,
        price: OneProduct.price,
        description: OneProduct.description,
        categories: $event.target.categories.value
      };
      console.log(Formdata);
      this.UpdateProduct(Formdata);
      this.$router.push("/dashboard/products");
    },
    updateimage(OneProduct) {
      const Formdata = new FormData();
      Formdata.append("id", OneProduct.id);
      Formdata.append("image", this.$refs.image.files[0]);
      this.UpdateProductImage(Formdata, OneProduct.id);
      this.$router.push("/dashboard/products");
    }
  },
  computed: mapGetters(["OneProduct", "allCategories"]),
  created() {
    this.fetchOneProduct(this.$route.params.id);
    this.fetchCategories();
  }
};
</script>

<style>
</style>