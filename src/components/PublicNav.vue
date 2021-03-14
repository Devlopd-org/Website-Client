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
        @click="contact = true"
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

    <v-row justify="center">
      <v-dialog v-model="contact" max-width="1600px">
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="4">
                  <lottie-player
                    src="https://assets7.lottiefiles.com/packages/lf20_bp1bwvhv.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                </v-col>
                <v-col cols="12" sm="12" md="8">
                  <div class="section-title">
                    <hr class="blue" />
                    <h2>Get in Touch</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Dignissimos fugiat illo obcaecati possimus,
                      tempore doloremque assumenda.
                    </p>
                    <form
                      action="https://formkeep.com/f/396c0d710fc8"
                      accept-charset="UTF-8"
                      enctype="multipart/form-data"
                      method="POST"
                    >
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field
                            label="Full Name"
                            outlined
                            name="fullName"
                            type="text"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <v-text-field
                            label="Email"
                            outlined
                            name="email"
                            type="email"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <v-textarea
                            outlined
                            name="message"
                            label="Message"
                            type="text"
                            required
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12" class="text-right">
                          <v-btn
                            rounded
                            type="submit"
                            color="blue"
                            class="white--text"
                            >Send <v-icon right>mdi-send</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </form>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      drawer: false,
      contact: false,
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
