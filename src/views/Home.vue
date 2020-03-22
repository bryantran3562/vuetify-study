<template>
  <div class="home">
    <h1>This is Home Page</h1>

    <!-- BT - Button -->

    <v-btn class="lime black--text">Click Me</v-btn>
    <p></p>

    <!-- BT - Instead of using class. You can also use Props to control the color of the button -->
    <v-btn color="lime">Click Me</v-btn>
    <p></p>

    <!-- BT - Icons
    Notes: Because the email it too close to the Email me text - We can give it a props - right to have
           the email icon move to the right.
     -->

    <v-btn depressed class="primary">
      <span>Email Me standard</span>
      <v-icon right>mdi-email</v-icon>
    </v-btn>
    <p></p>

    <v-btn depressed large class="success">
      <v-icon large left>mdi-email</v-icon>
      <span>Email Me large</span>
    </v-btn>
    <p></p>

    <v-btn depressed small class="error">
      Email Me small
      <v-icon right small="">mdi-email</v-icon>
    </v-btn>

    <p></p>
    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>

</style>
