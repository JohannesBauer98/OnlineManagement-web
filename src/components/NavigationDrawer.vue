<template>
  <div>
    <v-navigation-drawer clipped app v-model="cModel" overflow>
      <v-list class="pa-0">
        <div v-for="(item, i) in items" :key="i">
          <v-list-item-group>
            <v-list-item :to="item.link">
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title class="pl-2">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
  name: "NavigationDrawer",
  components: {}
})
export default class NavigationDrawer extends Vue {
  @Prop({type: Boolean})
  public cModel!: boolean;

  items = [
    {
      title: "Dashboard",
      icon: "mdi-view-dashboard",
      link: "/"
    },
    {
      title: "Vermögensübersicht",
      icon: "mdi mdi-chart-pie",
      link: "/assets"
    }
  ];
}
</script>

<style scoped>
</style>