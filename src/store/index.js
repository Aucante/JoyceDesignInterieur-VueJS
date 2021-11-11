import Vue from 'vue'
import Vuex from 'vuex'

import Image1 from './../assets/Images/image1.jpg'
import Image2 from './../assets/Images/image2.jpg'
import Image4 from './../assets/Images/image4.jpg'
import Image5 from './../assets/Images/image5.jpg'
import Image6 from './../assets/Images/image6.jpg'
import Image7 from './../assets/Images/image7.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {title: 'Projet Palermo', content: 'Ambiance sicilienne', src: Image1},
      {title: 'Projet Florencia', content: 'Ambiance toscane', src: Image2},
      {title: 'Projet Cagliari', content: 'Voyage en sardaigne', src: Image4},
      {title: 'Projet Milano', content: 'Voyage en lombardie', src: Image5},
      {title: 'Projet Lazio', content: 'Ambiance romaine', src: Image6},
      {title: 'Projet Napoli', content: 'Ambiance napolitaine', src: Image7}
    ],
  },
  getters: {
    cards: (state) => {
      return state.cards
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
