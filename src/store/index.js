import Vue from 'vue'
import Vuex from 'vuex'

import Image1 from './../assets/Images/image1.jpg'
import Image2 from './../assets/Images/image2.jpg'
import Image4 from './../assets/Images/image4.jpg'
import Image5 from './../assets/Images/image5.jpg'
import Image6 from './../assets/Images/image6.jpg'
import Image7 from './../assets/Images/image7.jpg'

import Image1xl from './../assets/Images/image7xl.jpg'
import Image2xl from './../assets/Images/image20xl.jpg'

import Plan1 from './../assets/Images/plan/plan1.png'
import Plan2 from './../assets/Images/plan/plan2.png'
import Plan3 from './../assets/Images/plan/plan3.png'
import Plan4 from './../assets/Images/plan/plan4.png'
import Plan5 from './../assets/Images/plan/plan5.png'
import Plan6 from './../assets/Images/plan/plan6.png'
import Plan7 from './../assets/Images/plan/plan7.png'
import Plan8 from './../assets/Images/plan/plan8.png'
import Plan9 from './../assets/Images/plan/plan9.png'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCard: {},
    currentService: {},
    cards: [
      {
      id: 1,
      title: 'Projet Palermo', 
      content: 'Ambiance sicilienne', 
      description: 'Cette ambiance intègre un large choix de couleurs ainsi qu\'une association des textures visant à promouvoir la clarté et la visibilité de la pièce. Nous avons un style très atypique et travaillé. Cette ambiance intègre un large choix de couleurs ainsi qu\'une association des textures visant à promouvoir la clarté et la visibilité de la pièce. Nous avons un style très atypique et travaillé Cette ambiance intègre un large choix de couleurs ainsi qu\'une association des textures visant à promouvoir la clarté et la visibilité de la pièce. Nous avons un style très atypique et travaillé',
      src: Image1,
      plan: [Plan1, Plan2, Plan3, Plan4, Plan5, Plan6, Plan7, Plan8, Plan9]
      },
      {
      id: 2,
      title: 'Projet Florencia', 
      content: 'Ambiance toscane', 
      src: Image2,
      plan: [Plan1, Plan2, Plan3, Plan4, Plan5, Plan6, Plan7, Plan8, Plan9]
      },
      {
      id: 3,
      title: 'Projet Cagliari', 
      content: 'Voyage en sardaigne', 
      src: Image4,
      plan: [Plan1, Plan2, Plan3, Plan4, Plan5, Plan6, Plan7, Plan8, Plan9]
      },
      {
      id: 4,
      title: 'Projet Milano',
      content: 'Voyage en lombardie', 
      src: Image5,
      plan: [Plan1, Plan2, Plan3, Plan4, Plan5, Plan6, Plan7, Plan8, Plan9]
      },
      {
      id: 5,
      title: 'Projet Lazio', 
      content: 'Ambiance romaine', 
      src: Image6,
      plan: [Plan1, Plan2, Plan3, Plan4, Plan5, Plan6, Plan7, Plan8, Plan9]
      },
      {
      id: 6,
      title: 'Projet Napoli',
      content: 'Ambiance napolitaine', 
      src: Image7,
      plan: [Plan1, Plan2, Plan3, Plan4, Plan5, Plan6, Plan7, Plan8, Plan9]
      }
    ],
    services: [
      {
        id: 1,
        title: 
        'Prestations à la carte', 
        mdi: 'mdi-card-bulleted-outline', 
        image: Image1xl, 
        products: [
          {
            content: 'Shopping list', 
            description: 'Il s\'agit d\'une shopping list', 
            price: 79, 
            image: require('./../assets/Prestations/ShoppingList/shoppingAzzura.jpg'),
            position: 'left'
          },
          {
            content: 'Planche d\'ambiance', 
            description: 'Il s\'agit d\'une planche d\'ambiance', 
            price: 89, 
            image: require('./../assets/Prestations/PlancheAmbiance/PlancheAmbianceBOHO.jpg'),
            position: 'right'
          },
          {
            content: 'Modélisation 3D - pièce simple / technique / multifonctions',  
            description: 'Il s\'agit d\'une modélisation 3D pour pièce simple', 
            price: 99, 
            image: require('./../assets/Prestations/PlanAmenagement/Rendu3D.png'),
            position: 'left'
          },
          {
            content: 'Modélisation 3D - pièce technique', 
            description: 'Il s\'agit d\'une modélisation 3D pour une pièce technique', 
            price: 149, 
            image: require('./../assets/Prestations/ShoppingList/shoppingAzzura.jpg'),
            position: 'right'
          },
          {
            content: 'Modélisation 3D - pièce multifonctions', 
            description: 'Il s\'agit d\'une modélisation 3D pour une pièce multifonction', 
            price: 279, 
            image: require('./../assets/Prestations/ShoppingList/shoppingAzzura.jpg'),
            position: 'left'
          },
        ],
        isPackage: false,
        option: false
      },
      {
        id: 2,
        title: 'Prestations au forfait', 
        mdi: 'mdi-file-table-box-multiple-outline', 
        image: Image2xl, 
        products: [
          {
            content: 'Forfait pièce simple', 
            description: 'Il s\'agit d\'un forfait pièce simple', 
            price: 319, 
            productImage: require('./../assets/Prestations/ShoppingList/shoppingAzzura.jpg'),
            position: 'left'
          },
          {
            content: 'Forfait pièce technique', 
            description: 'Il s\'agit d\'un forfait pièce technique', 
            price: 369, 
            productImage: require('./../assets/Prestations/PlancheAmbiance/PlancheAmbianceBOHO.jpg'),
            position: 'right'
          },
          {
            content: 'Forfait pièce multifonctions',  
            description: 'Il s\'agit d\'un forfait pièce multifonctions', 
            price: 479, 
            productImage: require('./../assets/Prestations/PlanAmenagement/Rendu3D.png'),
            position: 'left'
          },
        ],
        isPackage: true,
        option: false
      },
      {
        id: 3,
        title: 'Options 3D', 
        mdi: 'mdi-apple-keyboard-option', 
        products: [
          {
            content: 'Plan d\'aménagement 3D', 
            description: 'Il s\'agit d\'un plan d\'aménagement 3D', 
            price: 59, 
            productImage: require('./../assets/Prestations/ShoppingList/shoppingAzzura.jpg'),
            position: 'left'
          },
          {
            content: 'Rendu 360°', 
            description: 'Il s\'agit d\'un rendu 360', 
            price: 49, 
            productImage: require('./../assets/Prestations/PlancheAmbiance/PlancheAmbianceBOHO.jpg'),
            position: 'right'
          },
          {
            content: '3D version supplémentaire pièce simple',  
            description: 'Il s\'agit d\'un 3D version supplémentaire pièce simple', 
            price: 79, 
            productImage: require('./../assets/Prestations/PlanAmenagement/Rendu3D.png'),
            position: 'left'
          },
          {
            content: '3D version supplémentaire pièce technique', 
            description: 'Il s\'agit d\'un 3D version supplémentaire pièce technique', 
            price: 119, 
            productImage: require('./../assets/Prestations/ShoppingList/shoppingAzzura.jpg'),
            position: 'right'
          },
          {
            content: '3D version supplémentaire pièce multifonctions', 
            description: 'Il s\'agit d\'un 3D version supplémentaure pièce multifonctions', 
            price: 219, 
            productImage: require('./../assets/Prestations/ShoppingList/shoppingAzzura.jpg'),
            position: 'left'
          },
        ],
        isPackage: false,
        option: true
      },
      {
        id: 4,
        title: 'Coaching Déco', 
        mdi: 'mdi-lock-open-alert-outline', 
        products: [
          {
            content: 'Sur devis', 
            description: 'Sur devis', 
            price: null, 
            productImage: require('./../assets/Prestations/ShoppingList/shoppingAzzura.jpg'),
            position: 'left'
          },
          ],
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
    // GETTERS state
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
    // GETTER CARD -> Projets/réalisations
    getCurrentCard(state) {
      return state.currentCard;
    },
    getCurrentService(state) {
      return state.currentService;
    },
    getCardById: (state) => (id) => {
      return state.cards.find(card => card.id === id)
    },
    // GETTER SERVICES -> Prestations
    getServiceById: (state) => (id) => {
      return state.services.find(service => service.id === id)
    }

  },
  mutations: {
    setCurrentCard(state, card) {
      state.currentCard = card;
    },
    setCurrentCardVersionMutation (state, cardId) {
      let cardFound = {};
      state.cards.forEach((card) => {
        if(cardId == card.id) {
          cardFound = card;
        }
      });
      state.currentCard = cardFound;
    },
    setCurrentServiceVersionMutation (state, serviceId) {
      let serviceFound = {};
      state.services.forEach((service) => {
        if(serviceId == service.id) {
          serviceFound = service;
        }
      });
      state.currentService = serviceFound;
    }
  },
  actions: {
    // Pour BDD
    setCurrentCardAction ({commit, state}, cardId) {
      let cardFound = {};
      state.cards.forEach((card) => {
        if(cardId == card.id) {
          cardFound == card;
        }
      });
      commit('setCurrentCard', cardFound);
    }
  },
  modules: {
  }
})
