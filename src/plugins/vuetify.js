import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    //BT - You can over ride the theme color default by your own below.
    theme: {
        themes: {
          light: {
            primary: '#9652ff',
            success: '#3cd1c2',
            info: '#ffaa2c',
            error: '#f83e70'
          }
        }
      }

});
