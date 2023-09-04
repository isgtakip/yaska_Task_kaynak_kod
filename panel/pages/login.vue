<template>
    <v-app
      id="inspire"
    >
      <v-container >
        <v-layout wrap style="margin-top:100px;">
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="2" light tag="section" outlined >
              <v-card-title>
                <v-layout align-center >
                        <v-avatar :tile="true">
    <img :src="require('@/assets/images/anrufzentrale.png')" alt="logo">
  </v-avatar>
    <v-toolbar-title>
      Kontrol <span style="font-weight:bold;">Paneli</span></v-toolbar-title>
                </v-layout>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <p>Email ve şifrenizi girerek sisteme giriş yapabilirsiniz</p>
                <v-form ref="loginform" v-model="loginvalid">
                  <v-text-field
                    v-model="login.email"
                    label="E-mail"
                    type="text"
                    :rules="sorumlurules"
                    outlined
                    dense
                  />
                  <v-text-field
                    v-model="login.password"
                    hide-details
                    label="Şifre"
                    type="password"
                    :rules="sorumlurules"
                    outlined
                    dense
                  />
                </v-form>
              </v-card-text>
              <v-divider />
              <v-card-actions >
                <v-btn color="info" v-if="1==0">
                  Şifremi Unuttum
                </v-btn>
                <v-spacer />
               <v-btn
      color="blue"
      class="ma-2 white--text"
      :loading="loading"
      :disabled="loading"
      @click="userLogin"
    >
      Sisteme Giriş
      <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
         <v-flex sm12 md6 offset-md3>
            <v-layout align-center justify-space-between>
              <p class="caption my-3">
              </p>
              <p class="caption my-3">
                Made With <v-icon left small color="red">
                    mdi-heart
                  </v-icon>
              </p>
            </v-layout>
          </v-flex>
      </v-container>
    </v-app>
</template>
<script>
/*eslint-disable*/
import axios from 'axios'
axios.defaults.withCredentials = true

export default {
  layout:'empty',
  data() {
    return {
        login: {
        email: '',
        password: ''
      },
      loading:false,
      loginvalid: false,
      sorumlurules: [
          v => !!v || 'Bu alan Gereklidir',
        ],
    }
  },
  methods: {
    async userLogin() {
     this.$refs.loginform.validate();
     if(this.loginvalid){
      try {
      this.loading=true
      await this.$auth.loginWith('laravelSanctum', { data: this.login}).then((response) => {
      this.loading=false
      }).then((response) => {
      this.loading=false
      }).catch(error => {
      alert(error.response.data.errors.email)
      this.loading=false
      });
      
      } catch (err) {
        this.loading=false
      }
      }
    },
  }
}
</script>