const APIURL = 'http://localhost:1337/api/v1/contact/';
const state = {
  contact: []
};

const getters = {
  allContact: state => state.contact
};

const actions = {
  async FetchContact({ commit }) {
    try {
      let response = await fetch(APIURL);
      let data = await response.json();
      commit('setContact', data);
    } catch (error) {
      console.log(error);
    }
  },
  async addContact({ commit }, Formdata) {
    try {
      const response = await fetch(APIURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: Formdata.name,
          address: Formdata.address,
          phone: Formdata.phone,
          email: Formdata.email,
          messages: Formdata.messages
        })
      });
      let result = await response.json();
      commit('newContact', result);
    } catch (error) {
      console.error(error);
    }
  },
  async DeleteContact({ commit }, id) {
    try {
      await fetch(`${APIURL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      });
      commit('removeContact', id);
    } catch (error) {
      console.log(error);
    }
  }
};

const mutations = {
  setContact: (state, contact) => (state.contact = contact),
  newContact: (state, contact) => state.contact.unshift(contact),
  removeContact: (state, id) =>
    (state.contact = state.contact.filter(contact => contact.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
