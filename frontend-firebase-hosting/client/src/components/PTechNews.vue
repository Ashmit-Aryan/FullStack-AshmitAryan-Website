<template>
  <section>
    <vue-horizontal-list :items="techNews" :options="options">
      <template v-slot:default="{ item }">
        <div class="items">
          <v-card class="mx-auto" max-width="344" max-height="1000" >
            <v-card-title class="pa-2">
              <v-img
                class="align-center"
                v-if="item.media"
                :src="item.media"
                max-width="250"
              ></v-img>
              <!-- <iframe
                v-if="item.urlToImage == null"
                width="250"
                height="300"
                :src="item.url"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> -->

              <div class="mt-3 mr-3 ml-3 mb-0">
                
              <p >
                {{ item.title }}<br/>
              </p>
              
              <p>
                <b>{{ item.clean_url }}</b><br/>
              </p>
              </div>

              <v-divider></v-divider>
              <p class="align-center mt-3">
                {{ item.summary.slice(0, 100) }}.....
              </p>
              
              <v-btn class="ma-3" color="primary" elevation="4"
              @click="goToFullNews(item._id)"
              >
                Read More
              </v-btn>
            </v-card-title>
          </v-card>
        </div>
      </template>
    </vue-horizontal-list>
  </section>
</template>

<script>
import Vue from "vue";
import VueHorizontalList from "vue-horizontal-list";
export default Vue.extend({
  name: "ServeDev",
  props: {
    techNews: {
      type: Array,
      default: function() {
        return [];
      },
    },

  },
  components: {
    VueHorizontalList,
  },
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
    },
    reveal: false,
    options: {
      responsive: [
        { end: 576, size: 1 },
        { start: 576, end: 768, size: 2 },
        { start: 768, end: 992, size: 3 },
        { size: 4 },
        { size: 5 },
      ],
    },
  }),
  methods:{
    goToFullNews(id){
      this.$router.push(`/full-news/${id}`)
    }
  }
});
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
