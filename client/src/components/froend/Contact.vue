<template>
  <section class="Material-contact-section section-padding section-dark">
    <div class="container">
      <div class="row">
        <!-- Section Titile -->
        <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
          <h1 class="section-title">Love to Hear From You</h1>
        </div>
      </div>
      <div class="row">
        <!-- Section Titile -->
        <div
          class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
          data-wow-delay=".2s"
          v-for="contactinformation in allContactinformations"
          :key="`${contactinformation}-${Math.random()}`"
        >
          <p>Det er en længe fastlagt kendsgerning, at en læser vil blive distraheret af det læsbare indhold på en side, når man ser på dens layout. Pointen med at bruge Lorem Ipsum er, at det har en mere eller mindre normal fordeling af bogstaver i modsætning til at bruge indhold.</p>

          <div class="find-widget">
            Firma:
            <a href="https://hostriver.ro">{{contactinformation.name}}</a>
          </div>
          <div class="find-widget">
            Address:
            <a href="#">{{contactinformation.address}}</a>
          </div>
          <div class="find-widget">
            Mobile NR:
            <a href="#">{{contactinformation.phone}}</a>
          </div>

          <div class="find-widget">
            Fax:
            <a href="#">{{contactinformation.fax}}</a>
          </div>
          <div class="find-widget">
            Email:
            <a href="#">{{contactinformation.email}}</a>
          </div>
        </div>
        <!-- contact form -->
        <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
          <form class="shake" role="form" name="contact-form" @submit.prevent="onsubmit">
            <!-- Name -->
            <div class="form-group label-floating">
              <label class="control-label" for="name">Navn</label>
              <input class="form-control" id="name" type="text" name="name" v-model="name" />
              <div class="help-block with-errors"></div>
            </div>
            <!-- Address -->
            <div class="form-group label-floating">
              <label class="control-label" for="address">Address</label>
              <input class="form-control" id="address" type="text" name="address" v-model="address" />
              <div class="help-block with-errors"></div>
            </div>
            <!-- phone -->
            <div class="form-group label-floating">
              <label class="control-label">Mobile</label>
              <input class="form-control" id="phone" type="number" name="phone" v-model="phone" />
              <div class="help-block with-errors"></div>
            </div>
            <!-- email -->
            <div class="form-group label-floating">
              <label class="control-label">Email</label>
              <input class="form-control" id="email" type="email" name="email" v-model="email" />
              <div class="help-block with-errors"></div>
            </div>
            <!-- Message -->
            <div class="form-group label-floating">
              <label for="message" class="control-label">Besked</label>
              <textarea
                class="form-control"
                rows="3"
                id="messages"
                name="messages"
                v-model="messages"
              ></textarea>
              <p
                class="help-block with-errors text-danger mt-2"
                v-for="error in errors"
                :key="`${error}-${Math.random()}`"
              >{{ error }}</p>
            </div>
            <!-- Form Submit -->
            <div class="form-submit mt-5">
              <button class="btn btn-common" type="submit" id="form-submit">Send</button>
              <div id="msgSubmit" class="h3 text-center hidden"></div>
              <div class="clearfix"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["sendcontactinfo", "allContactinformations"],
  data() {
    return {
      errors: [],
      name: null,
      address: null,
      phone: null,
      email: null,
      messages: null
    };
  },
  methods: {
    onsubmit() {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Kræver Navn");
        return false;
      }
      if (!this.address) {
        this.errors.push("Kræver address");
        return false;
      }
      if (!this.phone) {
        this.errors.push("Kræver mobile");
        return false;
      } else if (isNaN(this.phone)) {
        this.errors.push("mobile skal kun have tal");
        return false;
      }
      if (!this.email) {
        this.errors.push("Kræver email");
        return false;
      }
      if (!this.messages) {
        this.errors.push("Kræver Besked");
        return false;
      }
      if (!this.errors.length) {
        const FormData = {
          name: this.name,
          address: this.address,
          phone: this.phone,
          email: this.email,
          messages: this.messages
        };
        this.sendcontactinfo(FormData);
        return true;
      }
    }
  }
};
</script>