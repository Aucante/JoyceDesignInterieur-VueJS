<template>
  <v-container>
    <h1
        class="display-1 ma-8 font-weight-medium"
        >MES SERVICES</h1>
        <v-divider></v-divider>
      <v-row>
          <v-col
            cols="12"
            md="5"
            lg="5"
            xl="5"
          >
          <v-timeline>
                <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :color="year.color"
                large
                >
                <template v-slot:icon>
                  <v-avatar>
                    <img src="https://i.pravatar.cc/64">
                  </v-avatar>
                </template>
                <template>
                    <span
                    :class="`headline font-weight-bold ${year.color}--text`"
                    v-text="year.year"
                    ></span>
                </template>
                <div class="py-4">
                    <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                    Prestations à la carte
                    </h2>
                    <div>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </div>
                </div>
                </v-timeline-item>
            </v-timeline>

          </v-col>
          <v-col
            cols="12"
            md="5"
            lg="5"
            xl="5"
          >
          <v-timeline>
                <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :color="year.color"
                large
                >
                <template>
                    <span
                    :class="`headline font-weight-bold ${year.color}--text`"
                    v-text="year.year"
                    ></span>
                </template>
                <div class="py-4">
                    <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                    Prestations au forfait
                    </h2>
                    <div>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </div>
                </div>
                </v-timeline-item>
            </v-timeline>

          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '1960',
        },
        
        
        
      ],
    }),
  }
</script>