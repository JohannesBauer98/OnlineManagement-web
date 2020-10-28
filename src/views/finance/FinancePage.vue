<template>
  <base-page>
    <template v-slot:title>
      <span>Vemögensübersicht</span>
    </template>
    <template v-slot:default>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title style="color: #727272;">Einnahmen</v-card-title>
            <v-card-text>
              <v-list class="pa-0" dense>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-row>
                      <v-col class="pb-0">
                        <v-list-item-title>mb support GmbH</v-list-item-title>
                        <v-list-item-subtitle>Lohn</v-list-item-subtitle>
                      </v-col>
                      <v-col class="pb-0">
                        <v-list-item-title class="float-right">Two-line item</v-list-item-title>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Two-line item</v-list-item-title>
                    <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                    <v-divider></v-divider>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Two-line item</v-list-item-title>
                    <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                    <v-divider></v-divider>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title style="color: #727272;">Ausgaben</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </base-page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasePage from "@/views/base/BasePage.vue";

@Component({
  name: "FinancePage",
  components: {
    BasePage
  }
})
export default class FinancePage extends Vue {
  // Props
  // Data
  // Rules
  // Hook Callbacks
  // Refs
  // PropSync
  // Getters
  // Setters
  // Watchers
  // Logic
}
</script>

<style scoped>
</style>
