<template>
  <DashboardEditContactInformation
    :OneContactinformation="OneContactinformation"
    :DashboardEditContactInformation="DashboardEditContactInformation"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DashboardEditContactInformation from "../../components/dashboard/DashboardEditContactInformation";
export default {
  name: "DashboardEditContactInformationPage",
  components: {
    DashboardEditContactInformation
  },
  methods: {
    ...mapActions(["fetchOneContactinformation", "UpdateContactinformation"]),
    DashboardEditContactInformation(Formdata) {
      this.UpdateContactinformation(Formdata);
    }
  },
  computed: mapGetters(["OneContactinformation"]),
  created() {
    this.fetchOneContactinformation(this.$route.params.id);
  }
};
</script>

<style>
</style>