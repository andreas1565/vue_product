<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-3 w-50 mx-auto">
    <form class="form-signinx" @submit.prevent="onsubmit">
      <div class="form-group">
        <label for="name">Navn</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="whrite a name of your product"
          name="name"
          v-model="OneContactinformation.name"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          name="address"
          id="address"
          v-model="OneContactinformation.address"
        />
      </div>
      <div class="form-group">
        <label for="phone">Mobile</label>
        <input
          type="number"
          class="form-control"
          name="phone"
          id="phone"
          v-model="OneContactinformation.phone"
        />
      </div>
      <div class="form-group">
        <label for="fax">Fax</label>
        <input
          type="number"
          name="fax"
          class="form-control"
          id="fax"
          v-model="OneContactinformation.fax"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="email"
          v-model="OneContactinformation.email"
        />
      </div>
      <div class="form-group">
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
        >opdater din kontaktinformation på din virksomhed</button>
      </div>
      <p
        class="help-block with-errors text-danger mt-2"
        v-for="error in errors"
        :key="`${error}-${Math.random()}`"
      >{{ error }}</p>
    </form>
  </main>
</template>

<script>
export default {
  props: ["OneContactinformation", "DashboardEditContactInformation"],
  name: "DashboardEditContactInformation",
  data() {
    return {
      errors: [],
      name: null,
      address: null,
      phone: null,
      fax: null,
      email: null
    };
  },
  methods: {
    validate() {
      if (!this.OneContactinformation.name) {
        this.errors.push("Kræver Navn");
        return false;
      }
      if (!this.OneContactinformation.address) {
        this.errors.push("Kræver address");
        return false;
      }
      if (!this.OneContactinformation.phone) {
        this.errors.push("Kræver mobile");
        return false;
      } else if (isNaN(this.OneContactinformation.phone)) {
        this.errors.push("mobile skal kun have numre");
        return false;
      }
      if (!this.OneContactinformation.fax) {
        this.errors.push("Kræver fax");
        return false;
      } else if (!this.OneContactinformation.fax) {
        this.errors.push("fax skal kun have numre");
        return false;
      }
      if (!this.OneContactinformation.email) {
        this.errors.push("Kræver email");
        return false;
      }
    },
    onsubmit() {
      this.errors = [];
      this.validate();
      if (!this.errors.length) {
        const Formdata = {
          id: this.OneContactinformation.id,
          name: this.OneContactinformation.name,
          address: this.OneContactinformation.address,
          phone: this.OneContactinformation.phone,
          fax: this.OneContactinformation.fax,
          email: this.OneContactinformation.email
        };
        // this functtion comes from props
        this.DashboardEditContactInformation(Formdata);
        this.$router.push("/dashboard/contactInformation");
      }
    }
  }
};
</script>