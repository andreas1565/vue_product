<template>
  <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4 container">
    <Modal v-if="showModal"   :show="showModal" @deleteMethood="DashboardContact(currentid)" @closeModal="showModal = false;" />
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom remove-border"
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
        <tr v-for="contact  in allContact" :key="contact.id">
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
import Modal from '@/components/Modal.vue';
export default {
  props: ["allContact", "DashboardContact"],
  name: "DashboardContact",
  data() {
    return {
      showModal: false,
      currentid: 0,
    }
  },
  components:{
    Modal
  },
  methods: {
    deleteContact(id) {
      this.showModal = !this.showModal;
      this.currentid = id;
    }
  }
};
</script>

<style>
  .close:hover{
    cursor: pointer;
  }
</style>