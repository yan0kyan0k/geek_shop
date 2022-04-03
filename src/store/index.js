import { createStore } from 'vuex'

export default createStore({

  state: {
    home: {},
    catalog: [{}],
    cart: [],
    category: [],
    imageUrl: 'http://svalka-back.im56.ru/'
  },
  getters: {
    getHome: (state) => [...state.home],
    getCatalog: (state) => [...state.catalog],
    getProdutsByCategory: (state) => [...state.catalog],
    getCategory: (state) => [...state.category],
    getCart: (state) => [...state.cart],
    getCartCount: (state) => state.cart.reduce((acc, item) => acc + item.quantity, 0)
  },
  mutations: {
    setHome: (state, home) => { state.home = home },
    setCatalog: (state, catalog) => { state.catalog = catalog },
    setProdutsByCategory: (state, catalog) => { state.catalog = catalog },
    // setCatalog: (state, catalog) => {console.log(state)},
    setCart: (state, cart) => { state.cart = cart },
    setCategory: (state, category) => {state.category = category },
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
    loadHome({ commit }) {
      return fetch('http://svalka-back.im56.ru/api/home')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        commit('setHome', data);
      })
    },
    loadCatalog({ commit }) {
      // return fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
     return fetch('http://svalka-back.im56.ru/api/products')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          commit('setCatalog', data);
        })
    },
    loadProdutsByCategory({ commit },id) {
      // return fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      return fetch('http://svalka-back.im56.ru/api/product-categories/' + id)
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => console.log(data), 1000);
          commit('setCatalog', data);
        })
    },
    loadCatalogCategory({ commit }) {
      return fetch('http://svalka-back.im56.ru/api/categories')
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            commit('setCategory', data);
          })
    },
    loadCart({ commit }) {
      return fetch(`/api/v1/cart`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCart', data);
        })
    },
    addToCart({ commit }, product) {
      return fetch(`/api/v1/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit('addToCart', product);
        })
    },
    setQuantity({ commit }, {id, quantity}) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({quantity: quantity})
      })
        .then(() => {
          commit('setQuantity', {id, quantity});
        })
    },
    removeFromCart({ commit }, id) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => {
          commit('removeFromCart', id);
        })
    },
  }
})
