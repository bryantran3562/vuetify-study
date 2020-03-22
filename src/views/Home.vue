<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <!-- BT:
    red: Background color
    white--text: white color first and then --text to change text color
     -->
    <p class="red white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur dolore distinctio facilis. Ab nobis id deserunt exercitationem magnam? Enim laborum eum distinctio deleniti ipsa, nisi neque veritatis magnam libero.</p>
    <!-- BT:
    pink lighten-4: make background with lighten color
    red--text text--darken-4: color of the text and to make the text darker, you have to use: text--darken4
     -->
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni assumenda rerum corrupti nihil natus voluptate adipisci non odit, quisquam, quod qui placeat nulla dignissimos tempore quaerat ipsum, iste cum!</p>


    <!-- BT - Font -->

    <h1 class="display-4">Display</h1>
    <p class="headline">This is a headline</p>
    <p class="subheading">This is a subheading</p>
    <p class="caption">This is a caption</p>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>
