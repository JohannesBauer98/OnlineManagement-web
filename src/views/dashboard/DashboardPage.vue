<template>
  <base-page>
    <template v-slot:title>
      <v-row no-gutters align="center" justify="space-between">
        <span>Dashboard</span>
      </v-row>
    </template>
    <template v-slot:default>
      <template>
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