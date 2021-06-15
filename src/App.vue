<template>
  <v-app>
    <v-app-bar
        color="blue"
        dense
        dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title><div class="text-white">Getting Started with PWAs and Vue 3</div></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
    <v-main>
        <v-row justify="center" class="pt-5">
          <v-col cols="12" md="6" sm="12" xs="12">
            <v-card color="blue-lighten-5">
              <v-card-title>My App</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid distinctio error est explicabo illo laborum praesentium voluptate? Architecto distinctio esse exercitationem expedita illo magnam minima, praesentium totam. Atque, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis dignissimos, dolor eos inventore maiores, nam sed suscipit, tempora ullam vel veniam? Amet aperiam assumenda cumque dolor quis rerum sed.</v-card-text>
              <v-card-actions>
                <v-btn>
                  Yes
                </v-btn>
                <v-btn>
                  No
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    select: "",
    items: ["test"],
  }),
}
</script>
