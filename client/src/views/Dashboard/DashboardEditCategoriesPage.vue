<template>
  <DashboardEditCategories
    :OneCategorie="OneCategorie"
    :DashboardEditCategories="DashboardEditCategories"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DashboardEditCategories from "../../components/dashboard/DashboardEditCategories";
export default {
  name: "DashboardEditCategoriesPage",
  components: {
    DashboardEditCategories
  },
  methods: {
    ...mapActions(["fetchOneCategorie", "UpdateCategorie"]),
    DashboardEditCategories(Formdata) {
      this.UpdateCategorie(Formdata);
      this.$router.push("/dashboard/categories");
    }
  },
  computed: mapGetters(["OneCategorie"]),
  created() {
    this.fetchOneCategorie(this.$route.params.id);
  }
};
</script>