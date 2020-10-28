<template>
  <v-container fill-height class="justify-center text-center">
    <v-col class="col-6">
      <v-card class="pa-4">
        <div class="mx-6 mt-4 mb-10 text-h4">{{ $t('signIn.heading') }}</div>
        <v-form ref="form" v-model="isLoginValid" lazy-validation>
          <v-text-field
              :label="$t('label.email')"
              prepend-icon="mdi-account"
              v-model="loginCredentials.username"
              :rules="[usernameRule]"
              required
          ></v-text-field>

          <v-text-field
              :label="$t('label.password')"
              prepend-icon="mdi-key-variant"
              v-model="loginCredentials.password"
              :rules="[passwordRule]"
              :error-messages="passwordErrors"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              @click:append="passwordBlinkToggle"
              required
              @click="passwordErrors = []"
              @keydown="enterLogin"
          ></v-text-field>

          <v-btn
              color="primary"
              :loading="isLoading"
              @click="login"
          >{{ $t('button.signIn') }}</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LoginCredentials } from "@/models/LoginCredentials";
import {AuthenticationModule} from "@/store/modules/authentication";

@Component({
  name: "SignIn",
  components: {}
})
export default class LoginPage extends Vue {
  // Props

  // Data
  loginCredentials: LoginCredentials = new LoginCredentials();
  submitErrors: Array<string> = [];
  usernameRule: Function = (v: any) => !!v || "Bitte Email eingeben";
  passwordRule: Function = (v: any) => !!v || "Bitte Passwort eingeben";
  isLoginValid: boolean = true;
  isLoading: boolean = false;
  showPass: boolean = false;
  passwordErrors: Array<string> = [];

  // Hook Callbacks

  // Refs
  $refs!: {
    form: HTMLFormElement;
  };

  // Getters

  // Setters

  // Watchers
  passwordBlinkToggle() {
    this.showPass = !this.showPass;
  }

  // Logic
  async login() {
    if (this.$refs.form.validate()) {
      this.isLoading = true;
      let loginMessage = await AuthenticationModule.login(this.loginCredentials);
      this.isLoading = false;
      if (loginMessage === "success") {
        this.$router.push("/");
      } else {
        this.passwordErrors.push(loginMessage);
      }
    }
  }

  enterLogin(event) {
    if (event.keyCode === 13) {
      this.login();
    } else {
      this.passwordErrors = [];
    }
  }
}
</script>

<style scoped>
</style>