<template>
  <DashboardContactInformation :allContactinformations="allContactinformations" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DashboardContactInformation from "../../components/dashboard/DashboardContactInformation";
export default {
  name: "DashboardContactInformationPage",
  components: {
    DashboardContactInformation
  },
  methods: {
    ...mapActions(["fetchContactinformations"])
  },
  computed: mapGetters(["allContactinformations"]),
  created() {
    this.fetchContactinformations();
  }
};
</script>