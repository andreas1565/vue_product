<template>
  <div class="about">
    <h1>This is an about contact</h1>
    <Contact :sendcontactinfo="sendcontactinfo" :allContactinformations="allContactinformations" />
  </div>
</template>
<script>
// @ is an alias to /src
import Contact from "../../components/froend/Contact";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ContactPage",
  components: { Contact },
  methods: {
    ...mapActions(["addContact", "fetchContactinformations"]),
    sendcontactinfo(Formdata) {
      this.addContact(Formdata);
    }
  },
  computed: mapGetters(["allContactinformations"]),
  created() {
    this.fetchContactinformations();
  }
};
</script>