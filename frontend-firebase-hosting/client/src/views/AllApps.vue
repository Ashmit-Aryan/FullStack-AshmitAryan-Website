<template>
  <div>
    <p-toolbar btn1="Home"/>
        <v-flex xs12 class="mt-16 pt-9">
          <v-layout wrap>
            <template class="d-flex flex-column mb-6" v-for="(app ,i) in allApps">
              <v-flex  :key="i" xs12 sm6 md4>
                <p-portfolio-app  style="color:black; font-weight:bolder; margin-left:20px; margin-right:20px; margin-top:10px; margin-bottom:10px;" :apps="app" :code="true" />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PToolbar from '../components/PToolbar.vue'
import PPortfolioApp from '../components/PPortfolioApp.vue'
export default {
  components: { PPortfolioApp,PToolbar },
  computed:  mapGetters(["allApps"])
}
</script>

<style>

</style>