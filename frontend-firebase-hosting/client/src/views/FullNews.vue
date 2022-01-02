<template>
  <div>
    <p-toolbar  btn1="Home" btn2="My Work"/>
    <div class="mt-16 pt-6" v-if="goHome(fullNews)">
      <v-img
      v-if="fullNews.media != null"
        style="margin-left:20px;margin-right:20px;margin-top:20px;"
        :src="fullNews.media"
        max-height="500"
      >
         
      </v-img>
     
          <p v-if="fullNews.media != null" style="font-size:20px" class="ma-3 pa-3"><b>Photo Courtesy:- {{ fullNews.clean_url }}</b></p>

      <v-layout fill-height align-center>
        <v-container style="margin-top:20px;">
          <v-row align="center" justify="center" class="black--text">
            <v-col cols="12">
              <div class="text_div">
                {{ fullNews.title }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
      <v-divider></v-divider>
      <v-layout wrap>
        <v-flex class="pa-5 mr-3 ml-3">
          <div
            style="color:black; font-size:20px; font-weight:bold; margin:2px;"
          >
            {{ fullNews.summary }}
          </div>
        </v-flex>
      </v-layout>
      <v-img
        v-if="fullNews.media_content != null"
        style="margin-left:20px;margin-right:20px;"
        :src="fullNews.media_content"
        max-height="500"
      >
       
      </v-img>
       <p v-if="fullNews.media_content  != null" style="font-size:20px" class="mb-3 pb-3">
          <b>Picture Courtesy: {{ fullNews.clean_url }}</b>
        </p>
      <p class="pa-3 ma-3"><a :href="fullNews.link">Read More On Website</a></p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import PToolbar from '../components/PToolbar.vue';

export default {
  components: { PToolbar },
  name: "FullNews",
  data() {
    return {
      router: this.$route,
      path: this.$router,
      fullNews: {},
    };
  },
  computed: mapGetters(["allNews"]),
  mounted() {
    const data = this.allNews;
    this.fullNews = data.find((c) => {
      return c._id === this.router.params.id;
    });
  },
  methods:{
    goHome(news){
      if(news !== undefined){
        return true;
      }else{
        this.path.push({path: '/'})
        return false;
      }
    }
  }
};
</script>

<style scoped>
.text_div {
  margin: 10px;
  font-size: 30px;
  color: black;
  font-weight: bolder;
}
</style>
