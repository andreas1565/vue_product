/* import Vue from 'vue';
import Vuex from 'vuex'; */
import { createStore } from 'vuex'
import products from './modules/products';
import contact from './modules/contact';
import categories from './modules/categories';
import contactInformation from './modules/contactInformation';
import login from './modules/login';
/* Vue.use(Vuex); */

/* export default new Vuex.Store({
  modules: {
    products,
    contact,
    categories,
    contactInformation,
    login
  }
}); */
const store = createStore({
  modules:{
    products,
    contact,
    categories,
    contactInformation,
    login
  }
});

export default store;