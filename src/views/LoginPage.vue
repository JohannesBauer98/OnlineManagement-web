<template>
  <v-container fill-height>
    <v-col align="center" justify="center">
      <v-card width="300" class="pa-4">
        <v-img src="" width="200" contain class="mx-6 mt-6 pa-2"></v-img>
        <div id="partner-logo" class="mx-6 mt-4 mb-10">TEst</div>
        <v-form ref="form" v-model="isLoginValid" lazy-validation>
          <v-text-field
              :label="$t('login.email')"
              prepend-icon="mdi-account"
              v-model=""
              :rules="[usernameRule]"
              required
          ></v-text-field>

          <v-text-field
              :label="$t('login.password')"
              prepend-icon="mdi-key-variant"
              v-model=""
              :rules="[passwordRule]"
              :error-messages="passwordErrors"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              @click:append=""
              required
              @click="passwordErrors = []"
              @keydown=""
          ></v-text-field>

          <v-btn
              text
              color="primary"
              block
              :loading="isLoading"
              @click="login"
          >{{$t('login.loginBtn')}}</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "LoginPage",
  components: {}
})
export default class LoginPage extends Vue {
  // Data
  submitErrors: Array<string> = [];
  usernameRule: Function = (v: any) => !!v || "Bitte Email eingeben";
  passwordRule: Function = (v: any) => !!v || "Bitte Passwort eingeben";
  isLoginValid: boolean = true;
  isLoading: boolean = false;
  showPass: boolean = false;
  passwordErrors: Array<string> = [];
}
</script>