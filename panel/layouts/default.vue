<template>
<v-app>
  <v-app-bar
  app
  dense
  color="white"
  fixed
  flat
  height="60"
  >
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      Kontrol Paneli <span style="font-weight:bold;">v0.1</span></v-toolbar-title>
    <!-- -->

    <v-spacer></v-spacer>
<v-menu offset-y>
    <template v-slot:activator="{ on }">
        <v-btn text v-on="on" color="grey" class="text--darken-2">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
        </v-btn>
    </template>
        <v-list>
            <v-list-item
                v-for="(link,idx) in links"
                :key="idx"
                to="/"
                @click="logout"
            >
          <v-list-item-title>Güvenli Çıkış</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
     <v-navigation-drawer
      v-model="drawer"
      left
      app
    >
    <v-divider></v-divider>
          <v-parallax
    height="120"
    src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  ><div class="d-flex flex-column fill-height justify-center align-center text-white">
      <img :src="require('@/assets/images/anrufzentrale.png')" alt="logo" max-width="100px" width="100px">
    </div></v-parallax>
    <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title><b>{{ $auth.user.name }}</b></v-list-item-title>
            <v-list-item-subtitle>{{ $auth.user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list
        nav
        dense
      >
         <v-list-group
        prepend-icon="mdi-exclamation"
      >
        <template v-slot:activator>
          <v-list-item-title>Mesaj Yönetimi</v-list-item-title>
        </template>
          <v-list-item
            link
            to="/customer_messages"
          >
            <v-list-item-title>Site Mesajları</v-list-item-title>
          </v-list-item>
        </v-list-group>
         <v-list-group
        prepend-icon="mdi-cog"
      >
        <template v-slot:activator>
          <v-list-item-title>Bölüm Yönetimi</v-list-item-title>
        </template>
          <v-list-item
            link
            to="/sections"
          >
            <v-list-item-title>Bölümler</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <Nuxt/>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
/*eslint-disable*/
export default {
  name:"default",
  middleware: 'auth',
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
       links: [
          { text: 'Ayarlar',route:'/ayarlar' },
        ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
