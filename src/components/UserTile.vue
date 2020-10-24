<template>
  <div>
    <v-list-item>
      <v-list-item-content class="d-inline float-right">
        <v-list-item-title>{{user.name}}</v-list-item-title>
        <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action class="logout-icon">
        <v-btn icon @click="logout"><v-icon>mdi-logout</v-icon></v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import User from "@/models/User";

@Component({
  name: "UserTile"
})
export default class UserTile extends Vue {
  @Prop({type: User})
  public user!: User;

  logout() {
    //@ToDo: Logout
  }
}
</script>

<style scoped>
.logout-icon {
  margin: 0!important;
}
</style>
