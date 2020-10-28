<template>
  <v-row class="mx-6">
    <v-col>
      <div class="page-title ma-0">
        <slot name="title"></slot>
      </div>
      <slot></slot>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  name: "BasePage",
  components: {}
})
export default class BasePage extends Vue {
  // Props
  // Data
  // Hook Callbacks
  // Refs
  // Getters
  // Setters
  // Watchers
  // Logic
}
</script>

<style scoped>
.page-title {
  font-size: 1.5em;
  color: #707070;
}
</style>