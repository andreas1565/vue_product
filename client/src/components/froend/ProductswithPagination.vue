<template>
  <section class="container mt-2">
    <b-pagination
      v-model="getPagination.currentPage"
      :total-rows="getPagination.rows"
      :per-page="getPagination.perPage"
      aria-controls="my-table"
      align="center"
      @change="updatepagination($event)"
    ></b-pagination>
    <div class="row">
      <div
        class="col-lg-4 col-md-6 mb-4 ml-3"
        v-for="product in getPagination.products"
        :key="`${product.id}`"
      >
        <div class="card h-100">
          <router-link :to="{ name: 'EditProductPage', params: { id: product.id } }">
            <img class="card-img-top" v-bind:src="product.imageurl" alt />
          </router-link>
          <div class="card-body">
            <h4 class="card-title">
              <router-link
                :to="{ name: 'EditProductPage', params: { id: product.id } }"
              >{{ product.name }}</router-link>
            </h4>
            <h5>{{ product.price }} dk</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductswithPagination",
  methods: {
    ...mapActions(["getproducts", "updatepagination"]),
    async paginate(val) {
       /* 
       this.getproducts() */
       this.updatepagination(val);
    }
  },
  computed: mapGetters(["getPagination"]), 
  created() {
    // this.getproducts();
    this.getproducts();
  },
};
</script>

<style>
</style>