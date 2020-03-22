<template>

  <v-dialog max-width="600px">

      <!-- BT - Popup Dialog  -->
    <template v-slot:activator="{ on }">
    <v-btn v-on="on" text slot="activator" class="success">Add New Project</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3">
          <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder"></v-text-field>
          <v-textarea v-model="content" label="Information" prepend-icon="mdi-pencil"></v-textarea>

          <!-- BT Date Picker -->
          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
            <v-text-field v-on="on" 
              :value="formattedDate" clearable label="Due date" prepend-icon="mdi-calendar-range">
            </v-text-field>
            </template>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn text @click="submit" class="success mx-0 mt-3">Add Project</v-btn>
        </v-form>
      </v-card-text>

    </v-card>

  </v-dialog>

</template>

<script>
// BT - import date-fns packet here.
import format from 'date-fns/format';

 import parseISO from 'date-fns/parseISO';

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false
    }
  },

  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  },

  computed: {
    formattedDate () {
      console.log(this.due)
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
    }
  }
}
</script>