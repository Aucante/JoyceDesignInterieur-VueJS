import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.brown.lighten5, // #EFEBE9
            secondary: colors.grey.darken4, // #212121
            icon: colors.brown.darken1, // #6D4C41
            font: colors.grey.darken3, // #4E342E
            btn: colors.brown.darken3, // #3E2723
            btnSmall: colors.grey.lighten4, // #3E2723
            circular: colors.grey.darken2,  //#616161

          },
        },
      },
});
