<template>
  <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4 container">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Kontakt</h1>
    </div>

    <table class="table table-striped table-sm table-hover">
      <thead>
        <tr>
          <th style="width:70px"></th>
          <th>Navn</th>
          <th>Address</th>
          <th>mobile</th>
          <th>email</th>
          <th>besked</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in allContact" :key="`${contact}-${Math.random()}`">
          <td>
            <b-button class="text-danger fas fa-trash-alt" @click="deleteContact(contact.id)"></b-button>
          </td>
          <td>{{ contact.name }}</td>
          <td>{{contact.address}}</td>
          <td>{{contact.phone}}</td>
          <td>{{contact.email}}</td>
          <td>{{contact.messages}}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  props: ["allContact", "DashboardContact"],
  name: "DashboardContact",
  methods: {
    deleteContact(id) {
      this.DashboardContact(id);
    }
  }
};
</script>