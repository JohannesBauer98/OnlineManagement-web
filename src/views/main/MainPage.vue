<template>
  <div>
    <NavigationDrawer :cModel="menuOpen"></NavigationDrawer>

    <v-app-bar app fixed clipped-left color="white">
      <v-app-bar-nav-icon @click="toggleMenuOpen"></v-app-bar-nav-icon>
      <v-toolbar-title>
          <div>Online Management</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <UserTile v-bind:user="user" :key="user.id"/>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import User from '../../models/User';
import UserTile from "@/components/UserTile.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import {AuthenticationModule} from "@/store/modules/authentication";

@Component({
  name: "MainPage",
  components: {
    UserTile,
    NavigationDrawer,
  }
})
export default class MainPage extends Vue {
  menuOpen: boolean = true;
  user: User | null = null;

  beforeMount() {
    this.user = AuthenticationModule.user;
  }

  toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }
}
</script>

<style scoped>
</style>