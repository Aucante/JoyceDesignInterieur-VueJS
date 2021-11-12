import Vue from 'vue'
import Vuex from 'vuex'

import Image1 from './../assets/Images/image1.jpg'
import Image2 from './../assets/Images/image2.jpg'
import Image4 from './../assets/Images/image4.jpg'
import Image5 from './../assets/Images/image5.jpg'
import Image6 from './../assets/Images/image6.jpg'
import Image7 from './../assets/Images/image7.jpg'

import Image1xl from './../assets/Images/image4xl.jpg'
import Image2xl from './../assets/Images/image10xl.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        title: 'Projet Palermo', 
      content: 'Ambiance sicilienne', 
      src: Image1
      },
      {
        title: 'Projet Florencia', 
      content: 'Ambiance toscane', 
      src: Image2
      },
      {
        title: 'Projet Cagliari', 
      content: 'Voyage en sardaigne', 
      src: Image4
      },
      {
        title: 'Projet Milano',
       content: 'Voyage en lombardie', 
       src: Image5
      },
      {
        title: 
        'Projet Lazio', 
        content: 'Ambiance romaine', 
        src: Image6
      },
      {
        title: 'Projet Napoli',
       content: 'Ambiance napolitaine', 
       src: Image7
      }
    ],
    services: [
      {
        title: 
        'Prestations à la carte', 
        mdi: 'mdi-card-bulleted-outline', 
        image: Image1xl, 
        content1: 'Shopping list', 
        content2: 'Planche d\'ambiance', 
        content3: 'Modélisation 3D - pièce simple / technique / multifonctions', 
        content4: 'Modélisation 3D - pièce technique', 
        content5: 'Modélisation 3D - pièce multifonctions',
        description1: 'Il s\'agit d\'une shopping list',
        description2: 'Il s\'agit d\'une planche d\'ambiance',
        description3: 'Il s\'agit d\'une modélisation 3D pour pièce simple',
        description4: 'Il s\'agit d\'une modélisation 3D pour une pièce technique',
        description5: 'Il s\'agit d\'une modélisation 3D pour une pièce multifonction',
        price1: 79,
        price2: 89,
        price3: 99,
        price4: 149,
        price5: 279,
        amountContent: 5, 
        isPackage: false,
        option: false
      },
      {
        title: 'Prestations au forfait', 
        mdi: 'mdi-file-table-box-multiple-outline', 
        image: Image2xl, 
        content1: 'Forfait pièce simple', 
        content2: 'Forfait pièce technique', 
        content3: 'Forfait pièce multifonctions', 
        content4: null, 
        content5: null, 
        description1: 'Il s\'agit d\'un forfait pièce simple',
        description2: 'Il s\'agit d\'un forfait pièce technique',
        description3: 'Il s\'agit d\'un forfait pièce multifonctions',
        description4: null,
        description5: null,
        price1: 319,
        price2: 369,
        price3: 479,
        price4: null,
        price5: null,
        amountContent: 3, 
        isPackage: true,
        option: false
      },
      {
        title: 'Option 3D à la carte', 
        mdi: 'mdi-apple-keyboard-option', 
        content1: 'Plan d\'aménagement 3D', 
        content2: 'Rendu 360°', 
        content3: null, 
        content4: null, 
        content5: null, 
        description1: 'Il s\'agit d\'un plan d\'aménagement 3D',
        description2: 'Il s\'agit d\'un rendu 360',
        description3: null,
        description4: null,
        description5: null,
        price1: 59,
        price2: 49,
        price3: null,
        price4: null,
        price5: null,
        amountContent: 2,
        isPackage: false,
        option: true
      },
      {
        title: 'Option 3D au forfait', 
        mdi: 'mdi-lock-open-alert-outline', 
        content1: '3D version supplémentaire pièce simple', 
        content2: '3D version supplémentaire pièce technique', 
        content3: '3D version supplémentaire pièce multifonctions', 
        content4: null, 
        content5: null, 
        description1: 'Il s\'agit d\'un 3D version supplémentaire pièce simple',
        description2: 'Il s\'agit d\'un 3D version supplémentaire pièce technique',
        description3: 'Il s\'agit d\'un 3D version supplémentaure pièce multifonctions',
        description4: null,
        description5: null,
        price1: 79,
        price2: 119,
        price3: 219,
        price4: null,
        price5: null,
        amountContent: 3, 
        isPackage: true,
        option: true
      },
    ],
    customers: [
      {
        name: 'Lea. J', 
        content: 'Merci pour votre professionnalisme. Je suis très satisfaite d\'avoir fais appel à JoyceDesignInterieur. Je n\'hésiterais pas à refaire appel à vos services. Cordialement', 
        rating: 4
      },
      {
        name: 'Lisa. B', 
      content: 'Merci pour votre professionnalisme. Je suis très satisfaite d\'avoir fais appel à JoyceDesignInterieur.', 
      rating: 3
      },
      {
        name: 'Martine. S', 
        content: 'Merci pour votre professionnalisme. Je suis très satisfaite d\'avoir fais appel à JoyceDesignInterieur.', 
        rating: 4
      },
      {
        name: 'Francisca. J', 
        content: 'Merci pour votre professionnalisme. Je suis très satisfaite d\'avoir fais appel à JoyceDesignInterieur.', 
        rating: 4
      },
    ],
    contacts: [
      {
        title: 'Email', 
        content: 'joycedesigninterieur@mail.com', 
        icon: 'mdi-email-check-outline', 
        divider: true
      },
      {
        title: 'Whatsapp', 
        content: '+336-118-911-16', 
        icon: 'mdi-whatsapp',  
        divider: true
      },
      {
        title: 'Instagram', 
        content: '@joycedesigninterieur', 
        icon: 'mdi-instagram',  
        divider: false
      },
    ],
  },
  getters: {
    cards: (state) => {
      return state.cards
    },
    services: (state) => {
      return state.services
    },
    servicesWhithoutOption: (state) => {
      return state.services.filter(service => service.option === false)
    },
    customers: (state) => {
      return state.customers
    },
    contacts: (state) => {
      return state.contacts
    },

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})