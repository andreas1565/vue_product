<template>
  <DashboardProducts :allProducts="allProducts" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DashboardProducts from "../../components/dashboard/DashboardProducts.vue";
export default {
  components: {
    DashboardProducts
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  }
};
</script>