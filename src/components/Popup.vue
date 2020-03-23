<template>

<!-- BT - The v-model="dialog" will set to false to make the dialog disappered. -->
  <v-dialog max-width="600px" v-model="dialog">

      <!-- BT - Popup Dialog  -->
    <template v-slot:activator="{ on }">
    <v-btn v-on="on" text slot="activator" class="success">Add New Project</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>

      <v-card-text>
          <!-- BT - Notes: ref="form" - This will allow us to reference our form to know if the form is valid or not -->
        <v-form class="px-3" ref="form">
            <!-- BT - Notes: :rules="inputRules" validation the user input. This is just for the user sees it -->
          <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
          <v-textarea v-model="content" label="Information" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

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
        <!-- BT - :loading will make you see a cirle around on the button to say it is busy and stil working on it -->
          <v-btn text @click="submit" class="success mx-0 mt-3" :loading="loading">Add Project</v-btn>
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
      menu: false,
      //BT - Array contain our rule for checking the user input.
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
          //BT - This is for dialog disappear when done.
      dialog: false,
    //BT - This is for our circle loading icon in the add project button.
      loading: false,
    }

  },

  methods: {
    //BT - Form validation is only for user to see it. But the submit does not prevent the user to submit an invalid data. So, we
    //     have to check with our submit button.
    submit() {
        //BT - Notes: $refs - This allow us to reference to our form.
        if(this.$refs.form.validate()) {
        console.log(this.title, this.content)

        //BT - These are just troubleshooting. These setting should set when you are sending your data over the network and the call 
        //     will asyn in which it will return a promise to tell you it is completed the call then you place these thing in it.
        //     For now, you will not see it loading the circle because it sets to fail.
        this.loading = true;
        this.dialog = false;
        //BT - So when the user is clicking the 'Add project' button. We want to have a snackbar or little message to tell them that
        //     it was added. The message will be displaying is in the Navbar.vue. How do we send a message to it? $emit function.
        this.$emit('projectAdded')
      }
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