<template>
  <v-app>
    <router-view></router-view>

    <v-snackbar v-model="snackbar" timeout="7000">
      {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    snackbar: {
      get() {
        return this.$store.state.snackbar.display;
      },
      set(value) {
        this.$store.commit('displaySnackbar', {
          message: '',
          display: value,
        });
      },
    },
    snackbarMessage() {
      return this.$store.state.snackbar.message;
    },
    miniProfile() {
      return this.$store.state.miniProfile;
    },
  },
});
</script>

<style lang="scss">
// Imports
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');

// Root
body {
  background: #ffffff !important;
  overflow: hidden;
}

.v-application {
  background: #ffffff !important;
  font-family: 'Poppins', sans-serif !important;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.5em;
}

h2 {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2em;
}

h3 {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2em;
}

button {
  font-weight: 600 !important;
  text-transform: capitalize !important;
}

.cab {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

// Globals
.v-align {
  margin-top: 50vh !important;
  transform: translateY(-50%);
}
</style>
