<template>
  <div>
    <v-navigation-drawer clipped app v-model="cModel" overflow>
      <v-list>
        <div v-for="(item, i) in items" :key="i">
          <template v-if="item.items != null">
            <div style="height: 10px"></div>

            <v-subheader>{{item.title}}</v-subheader>

            <v-list-item
                v-for="subItem in item.items"
                :disabled="!!subItem.disabled"
                :key="subItem.title"
                :to="subItem.link"
                class="drawer-child"
            >
              <v-list-item-content>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list-item v-else :to="item.link">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "NavigationDrawer",
  components: {}
})
export default class NavigationDrawer extends Vue {
  @Prop({ type: Boolean })
  public cModel!: boolean;

  items = [
    {
      title: "Dashboard",
      icon: "dashboard",
      link: "/"
    },
    {
      title: "Test",
      icon: "dashboard",
      link: "/"
    },
    {
      title: "Test",
      icon: "dashboard",
      link: "/"
    },
  ];
}
</script>

<style scoped>
.smol-subtitle {
  font-size: 0.625em;
  color: grey;
}
</style>