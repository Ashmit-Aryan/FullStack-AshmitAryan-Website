<template>
  <v-app class="app">

    <v-content style="background-color: white">
      <router-view />
    </v-content>
    <p-footer />
  </v-app>
</template>

<script>

import PFooter from "./components/PFooter";



export default {
  name: "App",

  components: {
    
    PFooter
  },

  data: () => ({
   
  }),
  
};
</script>
<style scoped>

</style>
