<template>
  <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4 container">
    <Modal v-if="showModal" :show="showModal" @deleteMethood="DashboardCategories(currentid)" @closeModal="showModal = false;" />
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom remove-border"
    >
      <h1 class="h2">Kategorier</h1>
      <div class="btn-toolbar ">
        <router-link :to="{name: 'DashboardCreateCategories' }" class="btn btn-primary">Create a New Categories</router-link>
      </div>
    </div>

    <table class="table table-striped table-sm table-hover">
      <thead>
        <tr>
          <th style="width:70px"></th>
          <th>Navn</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categorie in allCategories" :key="`${categorie}-${Math.random()}`">
          <td>
            <router-link
              :to="{ name:  'DashboardEditCategoriesPage', params: { id: categorie.id, } }"
              class="update updatebtn fas fa-edit"
            ></router-link>
            <b-button class="text-danger fas fa-trash-alt" @click="deleteCategorie(categorie.id)"></b-button>
          </td>
          <td>{{ categorie.name }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
  data() {
    return {
      showModal: false,
      currentid: 0,
    }
  },
  components:{
    Modal
  },
  props: ["allCategories", "DashboardCategories"],
  name: "DashboardCategories",
  methods: {
    deleteCategorie(id) {
      this.showModal = !this.showModal;
      this.currentid = id;
     // this.DashboardCategories(id);
    }
  }
};
</script>