<template>
  <section class="container mt-4 mb-4">
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <div class="card">
          <img class="card-img" v-bind:src="OneProduct.imageurl" alt="Vans" />
          <div class="card-img-overlay d-flex justify-content-end">
            <a href="#" class="card-link text-danger like">
              <i class="fas fa-heart"></i>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ OneProduct.name }} kategorien {{OneProduct.category.name}}</h4>
            <p class="card-text">{{ OneProduct.description }}</p>
            <div class="buy d-flex justify-content-between align-items-center">
              <div class="price">
                <h5 class="mt-4">{{ OneProduct.price }} dk</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Product",
  methods: {
    ...mapActions(["fetchOneProduct"])
  },
  // Gets the data from the store
  computed: mapGetters(["OneProduct"]),

  // created is a Life cycle method That runs when component mounds and a call the function OneProduct with the product id
  created() {
    this.fetchOneProduct(this.$route.params.id);
  }
};
</script>

<style>
.like {
  font-size: 1.5rem;
}
</style>
