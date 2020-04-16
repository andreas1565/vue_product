<template>
  <DashboardCategories :allCategories="allCategories" :DashboardCategories="DashboardCategories" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DashboardCategories from "../../components/dashboard/DashboardCategories";
export default {
  name: "DashboardCategoriesPage",
  components: {
    DashboardCategories
  },
  methods: {
    ...mapActions(["fetchCategories", "DeleteCategorie"]),
    DashboardCategories(id) {
      this.DeleteCategorie(id);
    }
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories();
  }
};
</script>