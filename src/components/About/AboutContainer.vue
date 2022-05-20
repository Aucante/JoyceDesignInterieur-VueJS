<template>
  <v-container>
    <p
      class="d-flex justify-center display-1 my-8 font--text font-weight-medium"
    >
      {{ title }}
    </p>
    <v-divider></v-divider>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="8"
        lg="8"
        xl="8"
        class="d-flex justify-center"
      >
        <v-container class="d-flex justify-center">
          <v-row>
            <v-col cols="12" class="d-flex justify-center align-center">
              <div>
                <h1
                  class="
                    d-flex
                    justify-center
                    my-12
                    headline
                    font--text font-weight-medium
                  "
                >
                  {{ subtitle }}
                </h1>
                <p>
                  Il vous est difficile de repenser votre décoration, de vous
                  projeter dans un bien neuf uniquement observé sur plans ou
                  bien vous rêvez de rénover votre intérieur ? Vous êtes un
                  particulier ou un professionnel de l'immobilier et vous
                  recherchez une professionnelle pour de la valorisation
                  immobilière ?
                </p>
                <p>
                  Je suis décoratrice d’intérieur certifiée ainsi que créatrice
                  d’intérieurs 3D en ligne. Mes conseils en décoration
                  d’intérieur et ma créativité vous seront utiles. Passionnée
                  par l'univers de la décoration depuis toujours, j'ai décidé de
                  faire de cette passion, mon métier. Je vous accompagne dans
                  vos projets de décoration, rénovation, valorisation
                  immobilière, projection dans du neuf ou encore
                  d’investissement.
                </p>
                <p>
                  J'ai à coeur de vous apporter une entière satisfaction et de
                  respecter au mieux vos attentes. Planches d’ambiance,
                  modélisations en 3D avec rendus photos réalistes, shopping
                  list, à la carte ou au forfait, choisissez votre prestation
                  personnalisée sur mesure.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4" xl="4">
        <v-container>
          <v-img height="400" class="my-8" :src="src"></v-img>
        </v-container>
      </v-col>
    </v-row>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn
        color="btn white--text"
        class="rounded-0 pa-4 mb-8"
        elevation="5"
        router
        :to="{ name: link }"
      >
        {{ btn }}
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>
import Image from "./../../assets/Images/Images Services/s3.jpg";

export default {
  data() {
    return {
      title: "PRESENTATION",
      subtitle: "JoyceInteriorDesigner",
      btn: "Contactez-moi",
      src: Image,
      link: "Contact",
    };
  },
};
</script>
