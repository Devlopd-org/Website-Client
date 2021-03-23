<template>
  <div class="public-nav">
    <v-app-bar color="transparent" class="elevation-0 hidden-md-and-up">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-img
        class="mx-2"
        src="@/assets/logo.png"
        max-width="40"
        contain
      ></v-img>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-app-bar color="transparent" class="elevation-0 hidden-sm-and-down">
      <div
        @click="$router.push('/')"
        style="cursor: pointer;"
        class="d-flex align-center"
      >
        <v-img src="@/assets/logo.png" max-width="48" contain></v-img>
        <v-img
          class="ml-2"
          src="@/assets/logo-text.png"
          max-width="120"
          contain
        ></v-img>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        class="ma-4"
        color="transparent"
        elevation="0"
        @click="$router.push('/our-work')"
        >Our Work</v-btn
      > -->
      <v-btn
        class="cab white--text pa-6"
        @click="$vuetify.goTo('#contact')"
        rounded
        elevation="5"
      >
        Get in Touch
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <!-- <v-list-item @click="$router.push('/our-work')" link>
          <v-list-item-content>
            <v-list-item-title>Our Work</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item @click="contact = true" link>
          <v-list-item-content>
            <v-btn class="cab white--text pa-6" rounded elevation="5">
              Get in Touch
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      drawer: false,
    };
  },
});
</script>

<style lang="scss">
.v-toolbar__content {
  padding: 0px !important;
}

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
