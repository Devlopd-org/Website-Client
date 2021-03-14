<template>
  <div class="home">
    <v-container style="max-width: 1600px;">
      <PublicNav />

      <section id="header">
        <v-row align="center">
          <v-col cols="12" sm="12" md="8">
            <div class="site-title">
              <h1>
                Awesome software services for small & large businesses
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique cumque ad eum, molestiae cum porro error soluta
                inventore nostrum.
              </p>
              <v-btn class="cab white--text pa-6" rounded elevation="5">
                Get in Touch
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <lottie-player
              src="/img/header-main.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </v-col>
        </v-row>
        <v-row justify="center" class="clients">
          <v-col cols="12" sm="4" align="center"
            ><img
              @click="openInNewTab('http://skyterglobal.com/')"
              src="@/assets/skyter-global.png"
              class="client-logo"
          /></v-col>
          <v-col cols="12" sm="4" align="center"
            ><img
              @click="openInNewTab('http://bazza.store/')"
              src="@/assets/bazza.png"
              class="client-logo"
          /></v-col>
          <v-col cols="12" sm="4" align="center"
            ><img
              @click="openInNewTab('http://bustablox.com/')"
              src="@/assets/bustablox.png"
              class="client-logo"
          /></v-col>
        </v-row>
      </section>

      <section id="services">
        <div class="section-title">
          <hr class="blue" />
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos fugiat illo obcaecati possimus, tempore doloremque
            assumenda.
          </p>
        </div>

        <v-row class="service-row" align="center">
          <v-col cols="12" sm="12" md="4">
            <v-img src="@/assets/web.svg"></v-img>
          </v-col>
          <v-col cols="12" sm="12" md="8">
            <div class="service">
              <h3>Web Development & Designing</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Modi odit nisi sed molestias, deserunt voluptas. Tempora at
                numquam doloribus explicabo necessitatibus harum voluptas
                possimus! Minus nulla nemo animi incidunt. Sequi!
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="service-row" align="center">
          <v-col cols="12" sm="12" md="8">
            <div class="service">
              <h3>Mobile App Development & Designing</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Modi odit nisi sed molestias, deserunt voluptas. Tempora at
                numquam doloribus explicabo necessitatibus harum voluptas
                possimus! Minus nulla nemo animi incidunt. Sequi!
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-img src="@/assets/app.svg"></v-img>
          </v-col>
        </v-row>
        <v-row class="service-row" align="center">
          <v-col cols="12" sm="12" md="4">
            <v-img src="@/assets/desktop.svg"></v-img>
          </v-col>
          <v-col cols="12" sm="12" md="8">
            <div class="service">
              <h3>Desktop App Development & Designing</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Modi odit nisi sed molestias, deserunt voluptas. Tempora at
                numquam doloribus explicabo necessitatibus harum voluptas
                possimus! Minus nulla nemo animi incidunt. Sequi!
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="service-row" align="center">
          <v-col cols="12" sm="12" md="8">
            <div class="service">
              <h3>Chatbots & Automation Solutions</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Modi odit nisi sed molestias, deserunt voluptas. Tempora at
                numquam doloribus explicabo necessitatibus harum voluptas
                possimus! Minus nulla nemo animi incidunt. Sequi!
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-img src="@/assets/bot.svg"></v-img>
          </v-col>
        </v-row>
      </section>

      <section id="contact">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos fugiat illo obcaecati possimus, tempore
                doloremque assumenda.
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
      </section>
    </v-container>

    <public-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PublicNav from '@/components/PublicNav.vue';
import PublicFooter from '@/components/PublicFooter.vue';

export default Vue.extend({
  components: {
    PublicNav,
    PublicFooter,
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

<style lang="scss" scoped>
section {
  margin-top: 80px;
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

// Header
.site-title {
  max-width: 680px;

  p {
    margin: 40px 0;
  }
}

.clients {
  margin-top: 120px;
}

.client-logo {
  filter: brightness(10%) invert(1);
  width: 40px;
  cursor: pointer;
}

// Services
.service-row {
  margin: 200px 0;
}

.service {
  max-width: 600px;
  margin: 0 auto;

  h3 {
    margin-bottom: 40px;
  }
}

// Get in Touch
#contact {
  margin-bottom: 120px;
}
</style>
