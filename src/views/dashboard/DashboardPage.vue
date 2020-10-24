<template>
  <base-page>
    <template v-slot:title>
      <v-row no-gutters align="center" justify="space-between">
        <span>Dashboard</span>
      </v-row>
    </template>
    <template v-slot:default>
      <template v-if="!somethingFailed">
        <v-row align="top">
          <p>TEST</p>
        </v-row>
      </template>
      <template v-else>
        <p>Hier sind aktuell keine Informationen verfügbar, da aktuell keine Stores mit ihrem Account verknüpft sind.</p>
      </template>
    </template>
  </base-page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasePage from "@/views/base/BasePage.vue";

@Component({
  name: "Dashboard",
  components: {BasePage}
})
export default class Dashboard extends Vue {
  // Data
  somethingFailed = false;
}
</script>

<style scoped>
</style>