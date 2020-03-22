<template>

  <!-- BT:
          v-app: Root component. This is where you can nested other component
          v-content: This is where other components will be displaying in here.
           -->
  <v-app class="grey lighten-4">

    <v-content>

      <!-- BT - NavBar -->
      <Navbar />

      <!-- BT - This is where all of our web page go here -->
      <router-view></router-view>

    </v-content>

  </v-app>

</template>

<script>

import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
      Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
