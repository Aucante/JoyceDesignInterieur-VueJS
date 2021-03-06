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

import Norah1 from './../assets/Images/Projet Norah/Rendu NORA 1 recadr??.jpg'
import Norah2 from './../assets/Images/Projet Norah/Rendu NORA 10 recadr??.jpg'
import Norah3 from './../assets/Images/Projet Norah/Rendu NORA 11 recadr??.jpg'
import Norah4 from './../assets/Images/Projet Norah/Rendu NORA 12 recadr??.jpg'
import Norah5 from './../assets/Images/Projet Norah/Rendu NORA 8 recadr??.jpg'

import Olivier1 from './../assets/Images/Projet Olivier/Rendu photo r??aliste 1.jpg'
import Olivier2 from './../assets/Images/Projet Olivier/Rendu photo r??aliste 2.jpg'
import Olivier3 from './../assets/Images/Projet Olivier/Rendu r??aliste 3 Olivier Robert.jpg'
import Olivier4 from './../assets/Images/Projet Olivier/Rendu r??aliste 6 Olivier Robert.jpg'

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
import Lynda7 from './../assets/Images/Projet Lynda/Entr??e/Rendu 2 OK entr??e-salon.jpg'
import Lynda8 from './../assets/Images/Projet Lynda/Entr??e/Rendu 3 OK entr??e-salon.jpg'
import Lynda9 from './../assets/Images/Projet Lynda/Salle ?? manger/Rendu 1 OK Salle ?? manger.jpg'
import Lynda10 from './../assets/Images/Projet Lynda/Salle ?? manger/Rendu 2 OK Salle ?? manger.jpg'
import Lynda11 from './../assets/Images/Projet Lynda/Salle ?? manger/Rendu 3 OK Salle ?? manger.jpg'
import Lynda12 from './../assets/Images/Projet Lynda/Salle ?? manger/Rendu 5 OK Salle ?? manger.jpg'
import Lynda13 from './../assets/Images/Projet Lynda/Salle ?? manger/Rendu 7 OK Salle ?? manger.jpg'
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
      content: 'Ambiance moderne ??pur??e', 
      description: 'D??coration d\'un salon-salle ?? manger-cuisine suite ?? achat dans du neuf. Cette ambiance m??lange modernit??, minimalisme et mati??res naturelles. Au niveau des couleurs, le choix s\'est port?? sur le blanc, le noir et le beige. Le beige et les mati??res naturelles viennent contraster et r??chauffer cet int??rieur.',
      src: Lynda3,
      style: 'moderne',
      ambiance: '??pur??',
      decoration: 'chaleureux',
      plan: [Lynda1, Lynda2, Lynda3, Lynda4, Lynda5, Lynda6, Lynda7, Lynda8, Lynda9, Lynda10, Lynda11, Lynda12, Lynda13, Lynda14, Lynda15, Lynda16, Lynda17 ]
      },
      {
      id: 2,
      title: 'Projet Bastien', 
      content: 'Ambiance industrielle', 
      description: 'D??coration d\'un s??jour-cuisine suite ?? achat dans du neuf sur plans. Cette ambiance m??lange mati??res brutes, couleurs sobres et robustesse. Pour ce s??jour, un papier peint effet briques a ??t?? ajout?? afin de retrouver l\'esprit loft industriel.',
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
      description: 'D??coration d\'un salon et d\'une salle ?? manger suite ?? achat. Pour ce projet, ma cliente souhaitait une ambiance cocooning, chaleureuse et moderne. Le but ??tant ??galement de gagner en luminosit?? en travaillant les poutres et le parquet d\'origine.',
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
      description: 'D??coration d\'une chambre de petite fille. Pour ce projet, le choix s\'est port?? sur des couleurs douces pastel pour cette chambre de petite fille afin de cr??er une athmosph??re calme et reposante. Il y a ??galement plusieurs espaces d??di??s : le coin sommeil, le coin bureau et le coin ludique.',
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
      description: 'D??coration d\'un bureau ?? usage professionnel. Ma cliente th??rapeute voulait un espace chic, moderne avec des couleurs neutres pour que ses patients s\'y sentent bien.  ',
      src: Lena6,
      style: 'moderne',
      ambiance: 'chic',
      decoration: 'accueillant',
      plan: [Lena1, Lena2, Lena3, Lena4, Lena5, Lena6]
      },
      {
      id: 6,
      title: 'Projet Norah',
      content: 'Ambiance bien-??tre', 
      description: 'D??coration d\'une chambre de b??b??. Les clients qui attendent un heureux ??v??nement souhaitaient une chambre neutre, apaisante et naturelle, le tout dans une note scandinave.',
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
        description: 'D??coration d\'un s??jour-cuisine. Mon client souhaitait r??organiser l\'am??nagement de son s??jour, changer la d??coration de sa cuisine et avoir les espaces bien d??limit??s. Le tout dans un style scandinave et en gardant certains de ses meubles.',
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
        description: 'D??coration d\'un appartement destin?? ?? la location saisonni??re. Les clients souhaitaient une d??coration moderne, fonctionnelle et des couleurs neutres pour plaire au plus grand nombre.',
        src: Tivat3,
        style: 'moderne',
        ambiance: 'neutre',
        decoration: 'fonctionnel',
        plan: [Tivat1, Tivat2, Tivat3, Tivat4, Tivat5]
        },
        {
          id: 9,
          title: 'Projet Agathe', 
          content: 'Ambiance boh??me chic', 
          description: 'D??coration d\'une chambre. La cliente m\'a demand?? d\'int??grer des mati??res naturelles et du bois pour une ambiance chaleureuse.',
          src: Agathe2,
          style: 'boh??me chic',
          ambiance: 'naturel',
          decoration: 'chaleureux',
          plan: [Agathe1, Agathe2, Agathe3, Agathe4, Agathe5, Agathe6]
          },
    ],
    services: [
      {
        id: 1,
        title: 
        'Prestations ?? la carte', 
        mdi: 'mdi-cards-outline', 
        products: [
          {
            content: 'Planche d\'ambiance', 
            description: 'La planche d\'ambiance est la base du projet d??co. Elle permet de valider l\'ambiance g??n??rale et vos choix pour les couleurs et les mat??riaux.', 
            price: '69 ???', 
            image: require('./../assets/Images/Images Services/ambiance.png'),
            position: 'left'
          },
          {
            content: 'Shopping list', 
            description: 'Pour cette prestation, nous allons collaborer sur une shopping list. Qu\'est ce qu\'une shopping list ? C\'est le listing de l\'ensemble du mobilier et des accessoires ?? acheter pour votre projet d??co. Elle sera compos??e de tous les mobiliers et accessoires de votre int??rieur et les informations suivantes seront indiqu??es : l\'article, la photo de l\'article, le fournisseur, la r??f??rence, les dimensions, le coloris, le prix, la quantit?? et le budget total.', 
            price: '79 ???', 
            image: require('./../assets/Images/Images Services/shopping.jpg'),
            position: 'right'
          },
          {
            content: 'Mod??lisation 3D - petite pi??ce',  
            description: 'Qu\'est-ce qu\'une petite pi??ce ? - Une entr??e - Un WC. Je mod??lise en 3D une petite pi??ce de votre choix et vous transmets 5 rendus photos r??alistes ainsi qu\'un compte-rendu Les rendus vous permettent de vous projeter et de valider votre futur agencement int??rieur. Vous b??n??ficiez de conseils pour le choix des couleurs, des mat??riaux et de l\'agencement.', 
            price: '89 ???', 
            image: require('./../assets/Images/Images Services/Mod??lisation 3D petite pi??ce.jpg'),
            position: 'left'
          },
          {
            content: 'Mod??lisation 3D - pi??ce simple',  
            description: 'Qu\'est-ce qu\'une pi??ce simple ? - Un salon/s??jour - Une salle ?? manger - Une chambre - Un bureau. Je mod??lise en 3D une pi??ce simple de votre choix et vous transmets 5 rendus photos r??alistes ainsi qu\'un compte-rendu. Les rendus vous permettent de vous projeter et de valider votre futur agencement int??rieur. Vous b??n??ficiez de conseils pour le choix des couleurs, des mat??riaux et de l\'agencement.', 
            price: '99 ???', 
            image: require('./../assets/Images/Projet Lena/Rendu 9 jour OK.jpg'),
            position: 'right'
          },
          {
            content: 'Mod??lisation 3D - pi??ce technique', 
            description: 'Qu\'est-ce qu\'une pi??ce technique ? - Une cuisine - Une salle de bain. Je mod??lise en 3D une pi??ce technique de votre choix et vous transmets 5 rendus photos r??alistes ainsi qu\'un compte-rendu. Les rendus vous permettent de vous projeter et de valider votre futur agencement int??rieur. Vous b??n??ficiez de conseils pour le choix des couleurs, des mat??riaux et de l\'agencement.', 
            price: '149 ???', 
            image: require('./../assets/Images/Images Services/Mod??lisation 3D pi??ce technique.jpg'),
            position: 'left'
          },
          {
            content: 'Mod??lisation 3D - pi??ce multifonctions', 
            description: 'Qu\'est-ce qu\'une pi??ce multifonctions ? - Un salon/ s??jour - Un s??jour/ cuisine - Une suite parentale (chambre/ salle de bain). Je mod??lise en 3D une pi??ce multifonctions de votre choix et vous transmets 5 rendus photos r??alistes ainsi qu\'un compte-rendu. Les rendus vous permettent de vous projeter et de valider votre futur agencement int??rieur. Vous b??n??ficiez de conseils pour le choix des couleurs, des mat??riaux et de l\'agencement.', 
            price: '199 ???', 
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
            content: 'Forfait pi??ce simple', 
            description: 'Qu\'est-ce qu\'une pi??ce simple ?- Un salon/s??jour- Une salle ?? manger - Une chambre - Un bureau. Ce forfait comprend : 2 planches d\'ambiance, 1 mod??lisation 3D, 1 plan d\'am??nagement, 1 shopping list. Le forfait vous permet de b??n??ficier d\'une r??duction tarifaire.', 
            price: '339 ???', 
            image: require('./../assets/Images/Projet gabrielle/Rendu 10 OK.jpg'),
            position: 'left'
          },
          {
            content: 'Forfait pi??ce technique', 
            description: 'Qu\'est-ce qu\'une pi??ce technique ? - Une cuisine - Une salle de bain. Ce forfait comprend : 2 planches d\'ambiance, 1 mod??lisation 3D, 1 plan d\'am??nagement, 1 shopping list. Le forfait vous permet de b??n??ficier d\'une r??duction tarifaire.', 
            price: '389 ???', 
            image: require('./../assets/Images/Images Services/Forfait pi??ce techique.jpg'),
            position: 'right'
          },
          {
            content: 'Forfait pi??ce multifonctions',  
            description: 'Qu\'est-ce qu\'une pi??ce multifonctions ? - Un salon/ s??jour - Un s??jour/ cuisine - Une suite parentale (chambre/ salle de bain). Ce forfait comprend : 2 planches d\'ambiance, 1 mod??lisation 3D, 1 plan d\'am??nagement, 1 shopping list. Le forfait vous permet de b??n??ficier d\'une r??duction tarifaire.', 
            price: '429 ???', 
            image: require('./../assets/Images/Projet Olivier/Rendu photo r??aliste 1.jpg'),
            position: 'left'
          },
          {
            content: 'Formule maison compl??te maximum 100m2',  
            description: 'L\'am??nagement et la d??coration de votre maison/ appartement vous est difficile ? Confiez-moi votre projet. Toutes les pi??ces de votre int??rieur seront r??alis??es. Je mod??lise en 3D toutes les pi??ces de votre logement et vous transmets 4 rendus photos r??alistes par pi??ce ainsi qu\'un compte-rendu et une shopping list. Les rendus vous permettent de vous projeter et de valider votre futur agencement int??rieur. Vous b??n??ficiez de conseils pour le choix des couleurs, des mat??riaux et de l\'agencement.', 
            price: '419 ???', 
            image: require('./../assets/Images/Images Services/Formule maison compl??te max 100m2.jpg'),
            position: 'right'
          },
          {
            content: 'Formule maison compl??te maximum 200m2',  
            description: 'L\'am??nagement et la d??coration de votre maison/ appartement vous est difficile ? Confiez-moi votre projet. Toutes les pi??ces de votre int??rieur seront r??alis??es. Je mod??lise en 3D toutes les pi??ces de votre logement et vous transmets 4 rendus photos r??alistes par pi??ce ainsi qu\'un compte-rendu et une shopping list. Les rendus vous permettent de vous projeter et de valider votre futur agencement int??rieur. Vous b??n??ficiez de conseils pour le choix des couleurs, des mat??riaux et de l\'agencement.', 
            price: '529 ???', 
            image: require('./../assets/Images/Images Services/Formule maison compl??te max 200m2.jpg'),
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
            content: 'Plan d\'am??nagement 3D', 
            description: 'En plus de votre mod??lisation en 3D, vous pouvez compl??ter cette prestation d\'un plan d\'am??nagement en 3D. Ce plan vous permettra de reproduire ?? l\'identique votre d??coration.', 
            price: '59 ???', 
            image: require('./../assets/Images/Images Services/Plan am??nagement 3D.jpg'),
            position: 'right'
          },
          {
            content: '3D version suppl??mentaire pi??ce simple',  
            description: 'Vous h??sitez entre 2 styles d??co ? Vous avez des difficult??s ?? trancher entre deux couleurs ? La mod??lisation 3D version suppl??mentaire est faite pour vous. Elle vous permettra de vous projeter et de comparer au mieux. Vous recevez 5 rendus suppl??mentaires de la m??me pi??ce.', 
            price: '79 ???', 
            image: require('./../assets/Images/Projet Agathe/Rendu 3 OK.jpg'),
            position: 'left'
          },
          {
            content: '3D version suppl??mentaire pi??ce technique', 
            description: 'Vous h??sitez entre 2 styles d??co ? Vous avez des difficult??s ?? trancher entre deux couleurs ? La mod??lisation 3D version suppl??mentaire est faite pour vous. Elle vous permettra de vous projeter et de comparer au mieux. Vous recevez 5 rendus suppl??mentaires de la m??me pi??ce.', 
            price: '89 ???', 
            image: require('./../assets/Images/Images Services/Options 3D _ Mod??lisation 3D version suppl??mentaire pi??ce technique.jpg'),
            position: 'right'
          },
          {
            content: '3D version suppl??mentaire pi??ce multifonctions', 
            description: 'Vous h??sitez entre 2 styles d??co ? Vous avez des difficult??s ?? trancher entre deux couleurs ? La mod??lisation 3D version suppl??mentaire est faite pour vous. Elle vous permettra de vous projeter et de comparer au mieux. Vous recevez 5 rendus suppl??mentaires de la m??me pi??ce.', 
            price: '99 ???', 
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
            content: 'Home staging / valorisation immobili??re', 
            description: 'Le home staging ou valorisation immobili??re vous permet de vendre votre bien ou trouver un locataire plus rapidement et pourquoi pas d??clencher un coup de coeur immobilier. Il consiste ?? rendre votre bien plus attractif et cela ?? moindre co??t. Nous travaillerons ensemble sur la d??coration, l\'am??nagement, la disposition des meubles afin d\'embellir votre bien. Ce que vous retrouvez dans cette prestation : - 1 planche d\'ambiance afin de valider l\'ambiance g??n??rale - Mod??lisation 3D de la ou les pi??ces que vous souhaitez r??am??nager. Je vous transmets 5 rendus r??alistes par pi??ce. - 1 compte rendu complet reprenant l\'ensemble du projet et des conseils personnalis??s.', 
            price: null, 
            image: require('./../assets/Images/Projet Olivier/Rendu photo r??aliste 1.jpg'),
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
        content: 'Le rendu final est superbe! Estelle a pris en compte mes go??ts et ?? mod??liser une pi??ce en ad??quation totale avec le style demand??. Je suis enti??rement satisfait.', 
        rating: 5
      },
      {
        name: 'Olivier R.', 
      content: 'Bon boulot, ?? l\'??coute, le r??sultat correspond ?? mes attentes merci.', 
      rating: 5
      },
      {
        name: 'Guigs360', 
        content: 'Top du top merci je suis ravie du r??sultat.', 
        rating: 5
      },
      {
        name: 'Francisca J.', 
        content: 'Je suis satisfaite du rendu final. Estelle a de belles id??es, elle a su cerner ma demande et les rendus r??alistes sont superbes. Merci pour tout !', 
        rating: 5
      },
      {
        name: 'Gabrielle S.', 
        content: 'Estelle a ??t?? r??active, ?? l\'??coute et tr??s professionnelle. Merci pour votre superbe travail, les rendus sont vraiment r??alistes. Je recommande ?? 100% !.', 
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
    // GETTER CARD -> Projets/r??alisations
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
