<template>
  <DashboardContact :allContact="allContact" :DashboardContact="DashboardContact" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DashboardContact from "../../components/dashboard/DashboardContact";
export default {
  name: "DashboardContactPage",
  components: {
    DashboardContact
  },
  methods: {
    ...mapActions(["FetchContact", "DeleteContact"]),
    DashboardContact(id) {
      this.DeleteContact(id);
    }
  },
  computed: mapGetters(["allContact"]),
  created() {
    this.FetchContact();
  }
};
</script>