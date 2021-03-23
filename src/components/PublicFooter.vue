<template>
  <div class="public-footer">
    <v-footer id="footer" color="grey lighten-5" padless>
      <v-container>
        <v-row class="pa-2 hidden-md-and-up" no-gutters>
          <v-col cols="12" sm="12" md="4" class="text-center">
            <div
              @click="$router.push('/')"
              style="cursor: pointer;"
              class="d-flex align-center justify-center"
            >
              <v-img
                src="@/assets/logo.png"
                max-width="40"
                contain
              ></v-img>
              <v-img
                class="ml-2"
                src="@/assets/logo-text.png"
                max-width="100"
                contain
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4" class="text-center mt-4 mb-4">
            <!-- <v-btn text @click="$router.push('/our-work')">Our Work</v-btn> -->
            <v-btn text @click="$vuetify.goTo('#contact')"
              >Get In Touch</v-btn
            >
          </v-col>
          <v-col cols="12" sm="12" md="4" class="text-center">
            <v-btn
              icon
              @click="openInNewTab('https://www.facebook.com/devlopd')"
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
            <v-btn
              icon
              @click="openInNewTab('https://www.twitter.com/devlopd_')"
              ><v-icon>mdi-twitter</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <v-row class="pa-2 hidden-sm-and-down" no-gutters>
          <v-col cols="12" sm="12" md="4" class="text-left">
            <div
              @click="$router.push('/')"
              style="cursor: pointer;"
              class="d-flex align-center"
            >
              <v-img
                src="@/assets/logo.png"
                max-width="40"
                contain
              ></v-img>
              <v-img
                class="ml-2"
                src="@/assets/logo-text.png"
                max-width="100"
                contain
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4" class="text-center">
            <!-- <v-btn text @click="$router.push('/our-work')">Our Work</v-btn> -->
            <v-btn text @click="$vuetify.goTo('#contact')"
              >Get In Touch</v-btn
            >
          </v-col>
          <v-col cols="12" sm="12" md="4" class="text-right">
            <v-btn
              icon
              @click="openInNewTab('https://www.facebook.com/devlopd')"
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
            <v-btn
              icon
              @click="openInNewTab('https://www.twitter.com/devlopd_')"
              ><v-icon>mdi-twitter</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    openInNewTab: (url: string) => {
      const win = window.open(url, '_blank');

      if (!win) return;

      win.focus();
    },
  },
});
</script>

<style lang="scss">
.section-title {
  margin: 0 auto;
  max-width: 600px;
  text-align: center;

  hr {
    width: 80px;
    margin: 0 auto;
    height: 4px;
    border: none;
    border-radius: 8px;
  }

  h2 {
    margin: 20px 0;
  }
}
</style>
