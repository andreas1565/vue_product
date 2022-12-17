const APIURL = 'http://localhost:1337/api/v1/categories';

// state is where all of the data in your app Lives it link the data Property
const state = {
  categories: [],
  categorie: [],
};
// Does A Can get data Between store and compontents/views and Updates when changes made to the state
const getters = {
  allCategories: (state) => state.categories,
  OneCategorie: (state) => state.categorie,
};

const actions = {
  async fetchCategories({ commit }) {
    try {
      let response = await fetch(APIURL);
      let data = await response.json();
      commit('setCategories', data);
    } catch (error) {
      console.error(error);
    }
  },
  async addCategorie({ commit }, Formdata) {
    try {
      let response = await fetch(APIURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify({
          name: Formdata.name,
        }),
      });
      let result = await response.json();
      commit('newCategorie', result);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchOneCategorie({ commit }, id) {
    try {
      let response = await fetch(`${APIURL}/${id}`);
      let data = await response.json();
      commit('setCategorie', data);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        window.location.href = '/404';
      }
    }
  },
  async UpdateCategorie({ commit }, Formdata) {
    try {
      let response = await fetch(`${APIURL}/${Formdata.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify({
          name: Formdata.name,
        }),
      });
      let result = await response.json();
      commit('updateCategorie', result);
    } catch (error) {
      console.error(error);
    }
  },
  async DeleteCategorie({ commit }, id) {
    try {
      await fetch(`${APIURL}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      commit('removeCategorie', id);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  setCategories: (state, categories) => (state.categories = categories),
  newCategorie: (state, categories) => state.categories.unshift(categories),
  setCategorie: (state, categorie) => (state.categorie = categorie),
  updateCategorie: (state, formData) => {
    const index = state.categories.findIndex(
      (categories) => categories.id === formData.id
    );
    if (index !== -1) {
      state.categories.splice(index, 1, formData);
    }
  },
  removeCategorie: (state, id) =>
    (state.categories = state.categories.filter(
      (categories) => categories.id !== id
    )),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
