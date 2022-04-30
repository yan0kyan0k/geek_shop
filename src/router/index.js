import { createRouter, createWebHistory } from 'vue-router'

import Cart from '@/views/Cart.vue'
import Form from '@/views/FormApp.vue'
import Catalog from '@/views/Catalog.vue'
import ListProducts from '@/views/ListProducts.vue'
import Card from "@/views/Card"
import Home from "@/views/Home";

const routes = [
  { path: '/',
    name: 'home',
    component: Home
  },
  { path: '/cart', component: Cart },
  { path: '/form', component: Form },
  { path: '/Catalog', component: Catalog },
  { path: '/listProducts/:id', component: ListProducts },
  { path: '/product/:id', component: Card }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
