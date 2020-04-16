<template>
  <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4 container">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Produkter</h1>
      <div class="btn-toolbar">
        <b-button variant="primary" to="/dashboard/products/create">Create a New Products</b-button>
      </div>
    </div>

    <table class="table table-striped table-sm table-hover">
      <thead>
        <tr>
          <th style="width:70px"></th>
          <th>Navn</th>
          <th>Pris</th>
          <th>Beskrivelse</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in allProducts" :key="`${product}-${Math.random()}`">
          <td>
            <router-link
              :to="{ name:  'DashboardEditProductPage', params: { id: product.id, } }"
              class="update updatebtn fas fa-edit"
            ></router-link>
            <b-button class="text-danger fas fa-trash-alt" @click="deleteProduct(product.id)"></b-button>
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["allProducts"],
  name: "DashboardProducts",
  methods: {
    ...mapActions(["DeleteProduct"]),
    deleteProduct(id) {
      this.DeleteProduct(id);
    }
  }
};
</script>

<style></style>
