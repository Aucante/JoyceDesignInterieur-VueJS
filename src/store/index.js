import Vue from 'vue'
import Vuex from 'vuex'


import Agathe1 from './../assets/Images/Projet Agathe/Rendu 1 OK.jpg'
import Agathe2 from './../assets/Images/Projet Agathe/Rendu 3 OK.jpg'
import Agathe3 from './../assets/Images/Projet Agathe/Rendu 6 OK.jpg'
import Agathe4 from './../assets/Images/Projet Agathe/Rendu nuit 1 OK.jpg'
import Agathe5 from './../assets/Images/Projet Agathe/Rendu nuit 2 OK.jpg'
import Agathe6 from './../assets/Images/Projet Agathe/Rendu nuit 3 OK.jpg'

import Bastien1 from './../assets/Images/Projet Bastien/Rendu 1 OK.jpg'
import Bastien2 from './../assets/Images/Projet Bastien/Rendu 1 retouche OK.jpg'
import Bastien3 from './../assets/Images/Projet Bastien/Rendu 3 OK.jpg'
import Bastien4 from './../assets/Images/Projet Bastien/Rendu 4 OK.jpg'
import Bastien5 from './../assets/Images/Projet Bastien/Rendu retouche 3 OK.jpg'

import Chiraz1 from './../assets/Images/Projet Chiraz/Rendu 1 OK.jpg'
import Chiraz2 from './../assets/Images/Projet Chiraz/Rendu 4 OK.jpg'
import Chiraz3 from './../assets/Images/Projet Chiraz/Rendu 5 OK.jpg'
import Chiraz4 from './../assets/Images/Projet Chiraz/Salon rendu 1.jpg'
import Chiraz5 from './../assets/Images/Projet Chiraz/Salon rendu 4.jpg'
import Chiraz6 from './../assets/Images/Projet Chiraz/Salon rendu 5.jpg'

import Gabrielle1 from './../assets/Images/Projet gabrielle/Rendu 10 OK.jpg'
import Gabrielle2 from './../assets/Images/Projet gabrielle/Rendu 11 OK.jpg'
import Gabrielle3 from './../assets/Images/Projet gabrielle/Rendu 12 OK.jpg'
import Gabrielle4 from './../assets/Images/Projet gabrielle/Rendu 13 OK.jpg'
import Gabrielle5 from './../assets/Images/Projet gabrielle/Rendu 14 OK.jpg'
import Gabrielle6 from './../assets/Images/Projet gabrielle/Rendu 15 OK.jpg'
import Gabrielle7 from './../assets/Images/Projet gabrielle/Rendu 9 OK.jpg'

import Lena1 from './../assets/Images/Projet Lena/Rendu 10 jour OK.jpg'
import Lena2 from './../assets/Images/Projet Lena/Rendu 9 jour OK.jpg'
import Lena3 from './../assets/Images/Projet Lena/Rendu nuit 2 OK.jpg'
import Lena4 from './../assets/Images/Projet Lena/Rendu nuit 3 OK.jpg'
import Lena5 from './../assets/Images/Projet Lena/Rendu nuit 4 OK.jpg'
import Lena6 from './../assets/Images/Projet Lena/Rendu nuit 5 OK.jpg'

import Norah1 from './../assets/Images/Projet Norah/Rendu NORA 1 recadré.jpg'
import Norah2 from './../assets/Images/Projet Norah/Rendu NORA 10 recadré.jpg'
import Norah3 from './../assets/Images/Projet Norah/Rendu NORA 11 recadré.jpg'
import Norah4 from './../assets/Images/Projet Norah/Rendu NORA 12 recadré.jpg'
import Norah5 from './../assets/Images/Projet Norah/Rendu NORA 8 recadré.jpg'

import Olivier1 from './../assets/Images/Projet Olivier/Rendu photo réaliste 1.jpg'
import Olivier2 from './../assets/Images/Projet Olivier/Rendu photo réaliste 2.jpg'
import Olivier3 from './../assets/Images/Projet Olivier/Rendu réaliste 3 Olivier Robert.jpg'
import Olivier4 from './../assets/Images/Projet Olivier/Rendu réaliste 6 Olivier Robert.jpg'

import Tivat1 from './../assets/Images/Projet Tivat/Rendu 14 OK.jpg'
import Tivat2 from './../assets/Images/Projet Tivat/Rendu 3 OK.jpg'
import Tivat3 from './../assets/Images/Projet Tivat/Rendu 4 OK.jpg'
import Tivat4 from './../assets/Images/Projet Tivat/Rendu 5 OK.jpg'
import Tivat5 from './../assets/Images/Projet Tivat/Rendu 7 OK.jpg'

import Lynda1 from './../assets/Images/Projet Lynda/Salon/Rendu 3 OK Salon.jpg'
import Lynda2 from './../assets/Images/Projet Lynda/Salon/Rendu 4 OK Salon.jpg'
import Lynda3 from './../assets/Images/Projet Lynda/Salon/Rendu 6 OK Salon.jpg'
import Lynda4 from './../assets/Images/Projet Lynda/Salon/Rendu 7 OK Salon.jpg'
import Lynda5 from './../assets/Images/Projet Lynda/Salon/Rendu 8 OK Salon.jpg'
import Lynda6 from './../assets/Images/Projet Lynda/Salon/Rendu 9 OK Salon.jpg'
import Lynda7 from './../assets/Images/Projet Lynda/Entrée/Rendu 2 OK entrée-salon.jpg'
import Lynda8 from './../assets/Images/Projet Lynda/Entrée/Rendu 3 OK entrée-salon.jpg'
import Lynda9 from './../assets/Images/Projet Lynda/Salle à manger/Rendu 1 OK Salle à manger.jpg'
import Lynda10 from './../assets/Images/Projet Lynda/Salle à manger/Rendu 2 OK Salle à manger.jpg'
import Lynda11 from './../assets/Images/Projet Lynda/Salle à manger/Rendu 3 OK Salle à manger.jpg'
import Lynda12 from './../assets/Images/Projet Lynda/Salle à manger/Rendu 5 OK Salle à manger.jpg'
import Lynda13 from './../assets/Images/Projet Lynda/Salle à manger/Rendu 7 OK Salle à manger.jpg'
import Lynda14 from './../assets/Images/Projet Lynda/Cuisine/Rendu cuisine 1 OK.jpg'
import Lynda15 from './../assets/Images/Projet Lynda/Cuisine/Rendu cuisine 2 OK.jpg'
import Lynda16 from './../assets/Images/Projet Lynda/Cuisine/Rendu cuisine 3 OK.jpg'
import Lynda17 from './../assets/Images/Projet Lynda/Cuisine/Rendu cuisine 4 OK.jpg'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCard: {},
    currentService: {},
    cards: [
      {
      id: 1,
      title: 'Projet Lynda', 
      content: 'Ambiance moderne épurée', 
      description: 'Décoration d\'un salon-salle à manger-cuisine suite à achat dans du neuf. Cette ambiance mélange modernité, minimalisme et matières naturelles. Au niveau des couleurs, le choix s\'est porté sur le blanc, le noir et le beige. Le beige et les matières naturelles viennent contraster et réchauffer cet intérieur.',
      src: Lynda3,
      style: 'moderne',
      ambiance: 'épuré',
      decoration: 'chaleureux',
      plan: [Lynda1, Lynda2, Lynda3, Lynda4, Lynda5, Lynda6, Lynda7, Lynda8, Lynda9, Lynda10, Lynda11, Lynda12, Lynda13, Lynda14, Lynda15, Lynda16, Lynda17 ]
      },
      {
      id: 2,
      title: 'Projet Bastien', 
      content: 'Ambiance industrielle', 
      description: 'Décoration d\'un séjour-cuisine suite à achat dans du neuf sur plans. Cette ambiance mélange matières brutes, couleurs sobres et robustesse. Pour ce séjour, un papier peint effet briques a été ajouté afin de retrouver l\'esprit loft industriel.',
      src: Bastien1,
      style: 'industriel',
      ambiance: 'authentique',
      decoration: 'sur-mesure',
      plan: [Bastien1, Bastien2, Bastien3, Bastien4, Bastien5]
      },
      {
      id: 3,
      title: 'Projet Chiraz', 
      content: 'Ambiance cocooning chic', 
      description: 'Décoration d\'un salon et d\'une salle à manger suite à achat. Pour ce projet, ma cliente souhaitait une ambiance cocooning, chaleureuse et moderne. Le but étant également de gagner en luminosité en travaillant les poutres et le parquet d\'origine.',
      src: Chiraz2,
      style: 'moderne',
      ambiance: 'cocooning',
      decoration: 'chaleureux',
      plan: [Chiraz1, Chiraz2, Chiraz3, Chiraz4, Chiraz5, Chiraz6]
      },
      {
      id: 4,
      title: 'Projet Gabrielle',
      content: 'Ambiance pastel ludique', 
      description: 'Décoration d\'une chambre de petite fille. Pour ce projet, le choix s\'est porté sur des couleurs douces pastel pour cette chambre de petite fille afin de créer une athmosphère calme et reposante. Il y a également plusieurs espaces dédiés : le coin sommeil, le coin bureau et le coin ludique.',
      src: Gabrielle7,
      style: 'pastel',
      ambiance: 'doux',
      decoration: 'apaisant',
      plan: [Gabrielle1, Gabrielle2, Gabrielle3, Gabrielle4, Gabrielle5, Gabrielle6, Gabrielle7]
      },
      {
      id: 5,
      title: 'Projet Lena', 
      content: 'Ambiance moderne chic', 
      description: 'Décoration d\'un bureau à usage professionnel. Ma cliente thérapeute voulait un espace chic, moderne avec des couleurs neutres pour que ses patients s\'y sentent bien.  ',
      src: Lena6,
      style: 'moderne',
      ambiance: 'chic',
      decoration: 'accueillant',
      plan: [Lena1, Lena2, Lena3, Lena4, Lena5, Lena6]
      },
      {
      id: 6,
      title: 'Projet Norah',
      content: 'Ambiance bien-être', 
      description: 'Décoration d\'une chambre de bébé. Les clients qui attendent un heureux évènement souhaitaient une chambre neutre, apaisante et naturelle, le tout dans une note scandinave.',
      src: Norah5,
      style: 'scandinave',
      ambiance: 'chaleureux',
      decoration: 'naturel',
      plan: [Norah1, Norah2, Norah3, Norah4, Norah5]
      },
      {
        id: 7,
        title: 'Projet Olivier',
        content: 'Ambiance scandinave', 
        description: 'Décoration d\'un séjour-cuisine. Mon client souhaitait réorganiser l\'aménagement de son séjour, changer la décoration de sa cuisine et avoir les espaces bien délimités. Le tout dans un style scandinave et en gardant certains de ses meubles.',
        src: Olivier2,
        style: 'scandinave',
        ambiance: 'lumineux',
        decoration: 'moderne',
        plan: [Olivier1, Olivier2, Olivier3, Olivier4]
        }
        ,
        {
        id: 8,
        title: 'Projet Tivat',
        content: 'Ambiance moderne neutre', 
        description: 'Décoration d\'un appartement destiné à la location saisonnière. Les clients souhaitaient une décoration moderne, fonctionnelle et des couleurs neutres pour plaire au plus grand nombre.',
        src: Tivat3,
        style: 'moderne',
        ambiance: 'neutre',
        decoration: 'fonctionnel',
        plan: [Tivat1, Tivat2, Tivat3, Tivat4, Tivat5]
        },
        {
          id: 9,
          title: 'Projet Agathe', 
          content: 'Ambiance bohème chic', 
          description: 'Décoration d\'une chambre. La cliente m\'a demandé d\'intégrer des matières naturelles et du bois pour une ambiance chaleureuse.',
          src: Agathe2,
          style: 'bohème chic',
          ambiance: 'naturel',
          decoration: 'chaleureux',
          plan: [Agathe1, Agathe2, Agathe3, Agathe4, Agathe5, Agathe6]
          },
    ],
    services: [
      {
        id: 1,
        title: 
        'Prestations à la carte', 
        mdi: 'mdi-cards-outline', 
        products: [
          {
            content: 'Planche d\'ambiance', 
            description: 'La planche d\'ambiance est la base du projet déco. Elle permet de valider l\'ambiance générale et vos choix pour les couleurs et les matériaux.', 
            price: '69 €', 
            image: require('./../assets/Images/Images Services/ambiance.png'),
            position: 'left'
          },
          {
            content: 'Shopping list', 
            description: 'Pour cette prestation, nous allons collaborer sur une shopping list. Qu\'est ce qu\'une shopping list ? C\'est le listing de l\'ensemble du mobilier et des accessoires à acheter pour votre projet déco. Elle sera composée de tous les mobiliers et accessoires de votre intérieur et les informations suivantes seront indiquées : l\'article, la photo de l\'article, le fournisseur, la référence, les dimensions, le coloris, le prix, la quantité et le budget total.', 
            price: '79 €', 
            image: require('./../assets/Images/Images Services/shopping.jpg'),
            position: 'right'
          },
          {
            content: 'Modélisation 3D - petite pièce',  
            description: 'Qu\'est-ce qu\'une petite pièce ? - Une entrée - Un WC. Je modélise en 3D une petite pièce de votre choix et vous transmets 5 rendus photos réalistes ainsi qu\'un compte-rendu Les rendus vous permettent de vous projeter et de valider votre futur agencement intérieur. Vous bénéficiez de conseils pour le choix des couleurs, des matériaux et de l\'agencement.', 
            price: '89 €', 
            image: require('./../assets/Images/Images Services/Modélisation 3D petite pièce.jpg'),
            position: 'left'
          },
          {
            content: 'Modélisation 3D - pièce simple',  
            description: 'Qu\'est-ce qu\'une pièce simple ? - Un salon/séjour - Une salle à manger - Une chambre - Un bureau. Je modélise en 3D une pièce simple de votre choix et vous transmets 5 rendus photos réalistes ainsi qu\'un compte-rendu. Les rendus vous permettent de vous projeter et de valider votre futur agencement intérieur. Vous bénéficiez de conseils pour le choix des couleurs, des matériaux et de l\'agencement.', 
            price: '99 €', 
            image: require('./../assets/Images/Projet Lena/Rendu 9 jour OK.jpg'),
            position: 'right'
          },
          {
            content: 'Modélisation 3D - pièce technique', 
            description: 'Qu\'est-ce qu\'une pièce technique ? - Une cuisine - Une salle de bain. Je modélise en 3D une pièce technique de votre choix et vous transmets 5 rendus photos réalistes ainsi qu\'un compte-rendu. Les rendus vous permettent de vous projeter et de valider votre futur agencement intérieur. Vous bénéficiez de conseils pour le choix des couleurs, des matériaux et de l\'agencement.', 
            price: '149 €', 
            image: require('./../assets/Images/Images Services/Modélisation 3D pièce technique.jpg'),
            position: 'left'
          },
          {
            content: 'Modélisation 3D - pièce multifonctions', 
            description: 'Qu\'est-ce qu\'une pièce multifonctions ? - Un salon/ séjour - Un séjour/ cuisine - Une suite parentale (chambre/ salle de bain). Je modélise en 3D une pièce multifonctions de votre choix et vous transmets 5 rendus photos réalistes ainsi qu\'un compte-rendu. Les rendus vous permettent de vous projeter et de valider votre futur agencement intérieur. Vous bénéficiez de conseils pour le choix des couleurs, des matériaux et de l\'agencement.', 
            price: '199 €', 
            image: require('./../assets/Images/Projet Bastien/Rendu 1 OK.jpg'),
            position: 'right'
          },
        ],
        isPackage: false,
        option: false
      },
      {
        id: 2,
        title: 'Prestations au forfait', 
        mdi: 'mdi-credit-card-multiple-outline', 
        products: [
          {
            content: 'Forfait pièce simple', 
            description: 'Qu\'est-ce qu\'une pièce simple ?- Un salon/séjour- Une salle à manger - Une chambre - Un bureau. Ce forfait comprend : 2 planches d\'ambiance, 1 modélisation 3D, 1 plan d\'aménagement, 1 shopping list. Le forfait vous permet de bénéficier d\'une réduction tarifaire.', 
            price: '339 €', 
            image: require('./../assets/Images/Projet gabrielle/Rendu 10 OK.jpg'),
            position: 'left'
          },
          {
            content: 'Forfait pièce technique', 
            description: 'Qu\'est-ce qu\'une pièce technique ? - Une cuisine - Une salle de bain. Ce forfait comprend : 2 planches d\'ambiance, 1 modélisation 3D, 1 plan d\'aménagement, 1 shopping list. Le forfait vous permet de bénéficier d\'une réduction tarifaire.', 
            price: '389 €', 
            image: require('./../assets/Images/Images Services/Forfait pièce techique.jpg'),
            position: 'right'
          },
          {
            content: 'Forfait pièce multifonctions',  
            description: 'Qu\'est-ce qu\'une pièce multifonctions ? - Un salon/ séjour - Un séjour/ cuisine - Une suite parentale (chambre/ salle de bain). Ce forfait comprend : 2 planches d\'ambiance, 1 modélisation 3D, 1 plan d\'aménagement, 1 shopping list. Le forfait vous permet de bénéficier d\'une réduction tarifaire.', 
            price: '429 €', 
            image: require('./../assets/Images/Projet Olivier/Rendu photo réaliste 1.jpg'),
            position: 'left'
          },
          {
            content: 'Formule maison complète maximum 100m2',  
            description: 'L\'aménagement et la décoration de votre maison/ appartement vous est difficile ? Confiez-moi votre projet. Toutes les pièces de votre intérieur seront réalisées. Je modélise en 3D toutes les pièces de votre logement et vous transmets 4 rendus photos réalistes par pièce ainsi qu\'un compte-rendu et une shopping list. Les rendus vous permettent de vous projeter et de valider votre futur agencement intérieur. Vous bénéficiez de conseils pour le choix des couleurs, des matériaux et de l\'agencement.', 
            price: '419 €', 
            image: require('./../assets/Images/Images Services/Formule maison complète max 100m2.jpg'),
            position: 'right'
          },
          {
            content: 'Formule maison complète maximum 200m2',  
            description: 'L\'aménagement et la décoration de votre maison/ appartement vous est difficile ? Confiez-moi votre projet. Toutes les pièces de votre intérieur seront réalisées. Je modélise en 3D toutes les pièces de votre logement et vous transmets 4 rendus photos réalistes par pièce ainsi qu\'un compte-rendu et une shopping list. Les rendus vous permettent de vous projeter et de valider votre futur agencement intérieur. Vous bénéficiez de conseils pour le choix des couleurs, des matériaux et de l\'agencement.', 
            price: '529 €', 
            image: require('./../assets/Images/Images Services/Formule maison complète max 200m2.jpg'),
            position: 'left'
          },
        ],
        isPackage: true,
        option: false
      },
      {
        id: 3,
        title: 'Options 3D', 
        mdi: 'mdi-home-edit', 
        products: [
          {
            content: 'Plan d\'aménagement 3D', 
            description: 'En plus de votre modélisation en 3D, vous pouvez compléter cette prestation d\'un plan d\'aménagement en 3D. Ce plan vous permettra de reproduire à l\'identique votre décoration.', 
            price: '59 €', 
            image: require('./../assets/Images/Images Services/Plan aménagement 3D.jpg'),
            position: 'right'
          },
          {
            content: '3D version supplémentaire pièce simple',  
            description: 'Vous hésitez entre 2 styles déco ? Vous avez des difficultés à trancher entre deux couleurs ? La modélisation 3D version supplémentaire est faite pour vous. Elle vous permettra de vous projeter et de comparer au mieux. Vous recevez 5 rendus supplémentaires de la même pièce.', 
            price: '79 €', 
            image: require('./../assets/Images/Projet Agathe/Rendu 3 OK.jpg'),
            position: 'left'
          },
          {
            content: '3D version supplémentaire pièce technique', 
            description: 'Vous hésitez entre 2 styles déco ? Vous avez des difficultés à trancher entre deux couleurs ? La modélisation 3D version supplémentaire est faite pour vous. Elle vous permettra de vous projeter et de comparer au mieux. Vous recevez 5 rendus supplémentaires de la même pièce.', 
            price: '89 €', 
            image: require('./../assets/Images/Images Services/Options 3D _ Modélisation 3D version supplémentaire pièce technique.jpg'),
            position: 'right'
          },
          {
            content: '3D version supplémentaire pièce multifonctions', 
            description: 'Vous hésitez entre 2 styles déco ? Vous avez des difficultés à trancher entre deux couleurs ? La modélisation 3D version supplémentaire est faite pour vous. Elle vous permettra de vous projeter et de comparer au mieux. Vous recevez 5 rendus supplémentaires de la même pièce.', 
            price: '99 €', 
            image: require('./../assets/Images/Projet Tivat/Rendu 14 OK.jpg'),
            position: 'left'
          },
        ],
        isPackage: false,
        option: true
      },
      {
        id: 4,
        title: 'Sur devis', 
        mdi: 'mdi-home-search-outline', 
        products: [
          {
            content: 'Home staging / valorisation immobilière', 
            description: 'Le home staging ou valorisation immobilière vous permet de vendre votre bien ou trouver un locataire plus rapidement et pourquoi pas déclencher un coup de coeur immobilier. Il consiste à rendre votre bien plus attractif et cela à moindre coût. Nous travaillerons ensemble sur la décoration, l\'aménagement, la disposition des meubles afin d\'embellir votre bien. Ce que vous retrouvez dans cette prestation : - 1 planche d\'ambiance afin de valider l\'ambiance générale - Modélisation 3D de la ou les pièces que vous souhaitez réaménager. Je vous transmets 5 rendus réalistes par pièce. - 1 compte rendu complet reprenant l\'ensemble du projet et des conseils personnalisés.', 
            price: null, 
            image: require('./../assets/Images/Projet Olivier/Rendu photo réaliste 1.jpg'),
            position: 'left'
          },
          ],
        isPackage: true,
        option: true
      },
    ],
    customers: [
      {
        name: 'Bastien R.', 
        content: 'Le rendu final est superbe! Estelle a pris en compte mes goûts et à modéliser une pièce en adéquation totale avec le style demandé. Je suis entièrement satisfait.', 
        rating: 5
      },
      {
        name: 'Olivier R.', 
      content: 'Bon boulot, à l\'écoute, le résultat correspond à mes attentes merci.', 
      rating: 5
      },
      {
        name: 'Guigs360', 
        content: 'Top du top merci je suis ravie du résultat.', 
        rating: 5
      },
      {
        name: 'Francisca J.', 
        content: 'Je suis satisfaite du rendu final. Estelle a de belles idées, elle a su cerner ma demande et les rendus réalistes sont superbes. Merci pour tout !', 
        rating: 5
      },
      {
        name: 'Gabrielle S.', 
        content: 'Estelle a été réactive, à l\'écoute et très professionnelle. Merci pour votre superbe travail, les rendus sont vraiment réalistes. Je recommande à 100% !.', 
        rating: 5
      },
    ],
    contacts: [
      {
        title: 'Email', 
        content: 'joycedesignsinterieur@gmail.com', 
        icon: 'mdi-email-check-outline', 
        divider: true,
        href: 'mailto:joycedesignsinterieur@gmail.com'
      },
      {
        title: 'Whatsapp', 
        content: '+33-6-11-89-11-16', 
        icon: 'mdi-whatsapp',  
        divider: true,
        href: ''
      },
      {
        title: 'Instagram', 
        content: '@joyceinteriordesigner', 
        icon: 'mdi-instagram',  
        divider: false,
        href: 'https://www.instagram.com/joyceinteriordesigner/'
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
