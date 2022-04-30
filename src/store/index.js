import { createStore } from 'vuex'

export default createStore({

  state: {
    home: {},
    catalog: [],
    catalogPresent: [],
    cart: [],
    card: [],
    category: [],
    imageUrl: 'http://svalka-back.im56.ru/',
    flag: true,
    ToggleCatalog: []


  },
  getters: {
    getHome: (state) => [...state.home],
    getCatalog: (state) => [...state.catalog],
    getProductsByCategory: (state) => [...state.catalogPresent],
    getCategory: (state) => [...state.category],
    getCart: (state) => [...state.cart],
    getCard: (state) => [...state.card],
    getCartCount: (state) => state.cart.reduce((acc, item) => acc + item.quantity, 0),
  },
  mutations: {
    setHome: (state, home) => { state.home = home },
    setCatalog: (state, catalog) => { state.catalog = catalog },
    // setProductsByCategory: (state, catalog) => { state.catalog = catalog },
    setProductsByCategory: (state, catalog) => { state.catalogPresent = catalog },
    // setCatalog: (state, catalog) => {console.log(state)},
    // setCard: (state, card) => {console.log(state.card)},
    setCart: (state, cart) => { state.cart = cart },
    setCard: (state, card) => { state.card = card },
    setCategory: (state, category) => {state.category = category },

    deleteToCartQuantity: (state, product) => {
      const existProduct = state.cart.find(item => item.id === product.id)
      // console.log(product);
        existProduct.quantity--
    },
    addToCart: (state, product) => {
      const existProduct = state.cart.find(item => item.id === product.id)
      // console.log(product);
      if(existProduct) {
        existProduct.quantity++
      } else {
        state.cart.push(Object.assign({quantity: 1}, product))
      }
    },
    removeFromCart: (state, id) => {
      const idx = state.cart.findIndex((item) => item.id === id)

      state.cart.splice(idx, 1);
    },
    setQuantity: (state, {id, quantity}) => {
      const product = state.cart.find(item => item.id === id)
      product.quantity = quantity
    }
  },
  actions: {
    async loadHome({ commit }) {
      return await fetch('http://svalka-back.im56.ru/api/home')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, "главная страница");
        commit('setHome', data);
      })
    },
    async loadCatalog({ commit }) {
      // return fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      return await fetch('http://svalka-back.im56.ru/api/products')
          .then((response) => response.json())
          .then((data) => {
            // console.log(data, "Католог");
            commit('setCatalog', data);
          })
    },
    async loadCard({ commit }, id) {
      return await fetch(`http://svalka-back.im56.ru/api/product/` + id)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data)
            commit('setCard', data);
          })
    },
    async loadProductsByCategory({ commit },id) {
      return await fetch('http://svalka-back.im56.ru/api/product-categories/' + id)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          commit('setProductsByCategory', data);
        })
    },
    async loadCatalogCategory({ commit }) {
      return await fetch('http://svalka-back.im56.ru/api/categories')
          .then((response) => response.json())
          .then((data) => {
            // console.log(data, "категории");
            commit('setCategory', data);
          })
    },
    async loadCart({ commit }) {
      return await fetch(`/api/v1/cart`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCart', data);
        })
    },

    async addToCart({ commit }, product) {
      return await fetch(`/api/v1/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit('addToCart', product);
        })
    },
    async deleteToCartQuantity({ commit }, product) {
      return await fetch(`/api/v1/cart`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit('deleteToCartQuantity', product);
        })
    },
    async setQuantity({ commit }, {id, quantity}) {
      return await fetch(`/api/v1/cart/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({quantity: quantity})
      })
        .then(() => {
          commit('setQuantity', {id, quantity});
        })
    },
    async removeFromCart({ commit }, id) {
      return await fetch(`/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => {
          commit('removeFromCart', id);
        })
    }

  }
})
