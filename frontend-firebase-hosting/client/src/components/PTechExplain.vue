<template>
  <div  id="app">
    <section>
      <vue-horizontal-list responsive :items="techExp" :options="options">
        <template v-slot:default="{item}">
           <v-card
           @click="$router.push(`/tech-explain/${item._id}`)"
    class="mx-auto"
   elevation="10"
            style="border-radius: 20px; border:black solid 1px"
            width="200px"
            color="#FF5252"
    
  >
   <v-img
   class="$img-preload-filter"
   :src="item.img_url"
   height="200px"
   ></v-img>
 <v-card-title>{{item.title}}</v-card-title>
  </v-card>
        </template>
      </vue-horizontal-list>
    </section>
  </div>
</template>
 
<script>
  import Vue from 'vue';
  import VueHorizontalList from 'vue-horizontal-list';
 
  export default Vue.extend({
    name: 'ServeDev',
    props:{
      techExp: {
        type: Array,
        default: function() {
          return [];
        }
    }
    },
    components: {
      VueHorizontalList
    },
    data() {
      return {
        route: this.$router,
        options: {
          responsive: [
            {end: 560, size: 1}, 
            {start: 560, end: 760, size: 2},
            {start: 760, end: 990, size: 3},
            {size: 4},
            {size:5}
          ]
        }
       
      }
    },

  });
</script>
 
<style scoped>

 
</style>