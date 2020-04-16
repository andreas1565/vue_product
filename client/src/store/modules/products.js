const APIURL = 'http://localhost:1337/api/v1/products';
const APIURLPagination = 'http://localhost:1337/api/v1/products/Pagination';
// state is where all of the data in your app Lives it link the data Property
const state = {
  products: [],
  product: [],
  pagination: {
    currentPage: null,
    rows: null,
    perPage: null,
    products: []
  }
};
// Does A Can get data Between store and compontents/views and Updates when changes made to the state
const getters = {
  allProducts: state => state.products,
  OneProduct: state => state.product,
  getPagination: state => state.pagination
};
// Here you can put your http request For your backend API
const actions = {
  async fetchProducts({ commit }) {
    try {
      let response = await fetch(APIURL);
      let data = await response.json();
      commit('setProducts', data);
    } catch (error) {
      console.error(error);
    }
  },
  async fetchOneProduct({ commit }, id) {
    try {
      let response = await fetch(`${APIURL}/${id}`);
      let data = await response.json();
      commit('setProduct', data);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        window.location.href = '/404';
      }
    }
  },
  async AddProduct({ commit }, Formdata) {
    try {
      let response = await fetch(APIURL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        },
        body: Formdata
      });
      let result = await response.json();
      commit('newProducts', result);
    } catch (error) {
      console.error(error);
    }
  },
  async UpdateProduct({ commit }, Formdata) {
    try {
      let response = await fetch(`${APIURL}/${Formdata.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          name: Formdata.name,
          price: Formdata.price,
          description: Formdata.description,
          categories: Formdata.categories
        })
      });
      let result = await response.json();
      commit('updateProduct', result);
    } catch (error) {
      console.error(error);
    }
  },
  async UpdateProductImage({ commit }, Formdata) {
    try {
      let response = await fetch(`${APIURL}/image/${Formdata.get('id')}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        },
        body: Formdata
      });
      let result = await response.json();
      commit('updateProductImage', result);
    } catch (error) {
      console.log(error);
    }
  },
  async DeleteProduct({ commit }, id) {
    try {
      await fetch(`${APIURL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        },
      });
      commit('removeProduct', id);
    } catch (error) {
      console.log(error);
    }
  },
  // pagination
  async getproducts({ commit }) {
    try {
      let response = await fetch(APIURLPagination);
      let data = await response.json();
      commit('setPagination', {
        currentPage: data.current_page,
        rows: data.total_items,
        perPage: data.items_pr_page,
        products: data.products
      });
    } catch (error) {
      console.log(error);
    }
  },
  async updatepagination({ commit }, currentPage) {
    try {
      let response = await fetch(`${APIURLPagination}?page=${currentPage}`);
      let data = await response.json();
      commit('updatePagination', {
        currentPage: currentPage,
        rows: data.total_items,
        perPage: data.items_pr_page,
        products: data.products
      });
    } catch (error) {
      console.log(error);
    }
  }
};

// Actions can commit a mutation Means It's a way to Change state
const mutations = {
  setProducts: (state, products) => (state.products = products),
  setProduct: (state, product) => (state.product = product),
  newProducts: (state, products) => state.products.unshift(products),
  updateProduct: (state, formData) => {
    const index = state.products.findIndex(
      products => products.id === formData.id
    );
    if (index !== -1) {
      state.products.splice(index, 1, formData);
    }
  },
  updateProductImage: (state, formData) => {
    const index = state.products.findIndex(
      products => products.id === formData.id
    );
    if (index !== -1) {
      state.products.splice(index, 1, formData);
    }
  },
  removeProduct: (state, id) =>
    (state.products = state.products.filter(products => products.id !== id)),
  setPagination: (state, pagination) => (state.pagination = pagination),
  updatePagination: (state, pagination) => (state.pagination = pagination)
};

export default {
  state,
  getters,
  actions,
  mutations
};
