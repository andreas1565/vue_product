//vue 2
/* import Vue from 'vue'; */
//import VueRouter from 'vue-router';

// vue 3
import {createRouter, createWebHistory} from 'vue-router';

import isLogin from '../middleware/isLogin';
/* Vue.use(VueRouter); */
const routes = [
  {
    path: '/products',
    name: 'ProductsPage',
    component: () =>
      import(
        /* webpackChunkName: "ProductsPage" */ '../views/froend/ProductsPage.vue'
      )
  },
  {
    path: '/product/:id',
    name: 'EditProductPage',
    component: () =>
      import(
        /* webpackChunkName: "EditProductPage" */ '../views/froend/EditProductPage.vue'
      )
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: () =>
      import(
        /* webpackChunkName: "ContactPage" */ '../views/froend/ContactPage.vue'
      )
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () =>
      import(
        /* webpackChunkName: "LoginPage" */ '../views/froend/LoginPage.vue'
      ),
    beforeEnter: (to, from, next) => {
      if (localStorage.token && localStorage.refreshToken) {
        next('/dashboard');
      } else {
        next();
      }
    }
  },
  {
    path: '/dashboard/products',
    name: 'DashboardProductsPage',
    component: () =>
      import(
        /* webpackChunkName: "DashboardProductsPage" */ '../views/Dashboard/DashboardProductsPage.vue'
      ),
    beforeEnter: isLogin
  },
  {
    path: '/dashboard/products/create',
    name: 'DashboardCreateProducts',
    component: () =>
      import(
        /* webpackChunkName: "DashboardCreateProducts" */ '../components/dashboard/DashboardCreateProducts.vue'
      ),
    beforeEnter: isLogin
  },
  {
    path: '/dashboard/product/:id',
    name: 'DashboardEditProductPage',
    component: () =>
      import(
        /* webpackChunkName: "DashboardEditProductPage" */ '../views/Dashboard/DashboardEditProductPage.vue'
      ),
    beforeEnter: isLogin
  },
  {
    path: '/dashboard/categories',
    name: 'DashboardCategoriesPage',
    component: () =>
      import(
        /* webpackChunkName: "DashboardCategoriesPage" */ '../views/Dashboard/DashboardCategoriesPage.vue'
      ),
    beforeEnter: isLogin
  },
  {
    path: '/dashboard/categories/create',
    name: 'DashboardCreateCategories',
    component: () =>
      import(
        /* webpackChunkName: "DashboardCreateCategories" */ '../components/dashboard/DashboardCreateCategories.vue'
      ),
    beforeEnter: isLogin
  },
  {
    path: '/dashboard/categories/:id',
    name: 'DashboardEditCategoriesPage',
    component: () =>
      import(
        /* webpackChunkName: "DashboardEditCategoriesPage" */ '../views/Dashboard/DashboardEditCategoriesPage.vue'
      ),
    beforeEnter: isLogin
  },
  {
    path: '/dashboard/contact',
    name: 'DashboardContactPage',
    component: () =>
      import(
        /* webpackChunkName: "DashboardContactPage" */ '../views/Dashboard/DashboardContactPage.vue'
      ),
    beforeEnter: isLogin
  },
  {
    path: '/dashboard/contactInformation',
    name: 'DashboardContactInformationPage',
    component: () =>
      import(
        /* webpackChunkName: "DashboardContactInformationPage" */ '../views/Dashboard/DashboardContactInformationPage.vue'
      ),
    beforeEnter: isLogin
  },
  {
    path: '/dashboard/contactInformation/:id',
    name: 'DashboardEditContactInformationPage',
    component: () =>
      import(
        /* webpackChunkName: "DashboardEditContactInformationPage" */ '../views/Dashboard/DashboardEditContactInformationPage.vue'
      ),
    beforeEnter: isLogin
  }
];

/* const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}); */

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
