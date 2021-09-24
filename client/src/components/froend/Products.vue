<template>
  <section class="row mt-5">
    <div
      class="col-lg-4 col-md-6 mb-4 ml-3"
      v-for="product in allProducts"
      :key="`${product.id}-${Math.random()}`"
    >
      <div class="card h-100">
        <router-link :to="{ name: 'EditProductPage', params: { id: product.id } }">
          <img class="card-img-top" v-bind:src="product.imageurl" alt />
        </router-link>
        <div class="card-body">
          <h4 class="card-title">
            <router-link
              :to="{ name: 'EditProductPage', params: { id: product.id } }"
            >{{ product.name }}</router-link>
          </h4>
          <h5>{{ product.price }} dk</h5>
          <p class="card-text">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["allProducts"],
  name: "Products"
};
</script>
<style>
.card-img-top{
  width:100%;
  height:auto;
}
</style>