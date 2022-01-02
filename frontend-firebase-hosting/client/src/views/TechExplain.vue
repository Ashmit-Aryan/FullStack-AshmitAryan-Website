<template>
  <div>
    <p-toolbar btn1="Home" />
    <div v-if="goHome(techExp)" class="container mt-16 pt-6">
      <v-img
        style="margin-left:20px;margin-right:20px;margin-top:20px;"
        :src="techExp.img_url"
        max-height="500"
      >
      </v-img>

      <v-layout fill-height align-center>
        <v-container style="margin-top:20px;">
          <v-row align="center" justify="center" class="black--text">
            <v-col cols="12">
              <div class="name_div">
                {{ techExp.title }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
      <v-divider></v-divider>
      <v-layout wrap>
        <v-flex class="pa-5 mr-3 ml-3 mb-5 pb-5">
          <div
            style="color:black; font-size:20px; font-weight:bold; margin:2px;"
          >
            {{ techExp.description }}
          </div>
          
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <div class="d-flex flex-column ma-6 pa-3">
        <h3 style="font-size: 30px; font-weight:bolder;">Pros</h3>
            <v-card v-for="n in techExp.pros" :key="n" class="pa-3 mt-7" outlined tile>
              {{ n }}
            </v-card>
          </div>
      <div class="d-flex flex-column ma-6 pa-3">
        <h3 style="font-size: 30px; font-weight:bolder;">Cons</h3>
            <v-card v-for="n in techExp.cons" :key="n" class="pa-3 mt-7" outlined tile>
               {{ n }}
            </v-card>
          </div>
        <p v-if="techExp.video_link !== undefined" class="pa-3 ma-3"><a :href="techExp.video_link">Know More</a></p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import PToolbar from "../components/PToolbar.vue";

export default {
  name: "TechExplain",
  data() {
    return {
      router: this.$route,
      path: this.$router,
      techExp: {},
    };
  },
  components: { PToolbar },
  computed: mapGetters(["allTechExp"]),
  mounted() {
    const data = this.allTechExp;
    this.techExp = data.find((x) => {
      return x._id === this.router.params.id;
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
.name_div {
  margin: 10px;
  font-size: 30px;
  color: black;
  font-weight: bolder;
}
</style>
