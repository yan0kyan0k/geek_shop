import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Form from '../views/FormApp.vue'
import Catalog from '../views/Catalog.vue'
import Listproducts from '../views/Listproducts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/form', component: Form },
  { path: '/Catalog', component: Catalog },
  { path: '/listproducts/:id', component: Listproducts }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
