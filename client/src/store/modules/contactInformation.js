const APIURL = 'http://localhost:1337/api/v1/contactinformation';
const state = {
  contactinformations: [],
  contactinformation: []
};

const getters = {
  allContactinformations: state => state.contactinformations,
  OneContactinformation: state => state.contactinformation
};

const actions = {
  async fetchContactinformations({ commit }) {
    try {
      let response = await fetch(APIURL);
      let data = await response.json();
      commit('setContactinformations', data);
    } catch (error) {
      console.error(error);
    }
  },
  async fetchOneContactinformation({ commit }, id) {
    try {
      let response = await fetch(`${APIURL}/${id}`);
      let data = await response.json();
      commit('setContactinformation', data);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        window.location.href = '/404';
      }
    }
  },
  async UpdateContactinformation({ commit }, Formdata) {
    try {
      let response = await fetch(`${APIURL}/${Formdata.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          name: Formdata.name,
          address: Formdata.address,
          phone: Formdata.phone,
          fax: Formdata.fax,
          email: Formdata.email
        })
      });
      let result = await response.json();
      commit('updateContactinformation', result);
    } catch (error) {
      console.error(error);
    }
  }
};

const mutations = {
  setContactinformations: (state, contactinformations) =>
    (state.contactinformations = contactinformations),
  setContactinformation: (state, contactinformation) =>
    (state.contactinformation = contactinformation),
  updateContactinformation: (state, formData) => {
    const index = state.contactinformations.findIndex(
      contactinformations => contactinformations.id === formData.id
    );
    if (index !== -1) {
      state.categories.splice(index, 1, formData);
    }
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
