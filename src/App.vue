<template>

  <!-- BT:
          v-app: Root component. This is where you can nested other component
          v-content: This is where other components will be displaying in here.
           -->
  <v-app>

    <v-content>
      <!-- BT - This is where all of our web page go here -->
      <router-view></router-view>
    </v-content>

  </v-app>

</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
