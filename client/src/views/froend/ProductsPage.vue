<template>
  <!--<Products :allProducts="allProducts" /> -->
  <ProductswithPagination />
</template>

<script>
// @ is an alias to /src
//import { mapGetters, mapActions } from "vuex";
//import Products from "../../components/froend/Products";
import ProductswithPagination from "../../components/froend/ProductswithPagination";
export default {
  name: "ProductsPage",
  components: {
    // Products
    ProductswithPagination
  },
  methods: {
    // ...mapActions(["fetchProducts"])
  },
  // Gets the data from the store
  // computed: mapGetters(["allProducts"]),
  created() {
    // this.fetchProducts();
  }
};
</script>
