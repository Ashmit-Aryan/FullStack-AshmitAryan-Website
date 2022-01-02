<template>
  <div class="home">
    <p-toolbar btn1="My Work" btn2="Tech Explain" btn3="Contact" />
    <lander-view />
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="about">This is me</div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div style="color:black; font-size:20px; font-weight:bolder;">
            {{ aboutText }}
          </div>
          <div style="color:black; font-size:20px; font-weight:bolder;">
            Working on starting an app development business and always looking
            for new clients! Would love to talk to you about your idea.
          </div>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="portfolio">My Work</div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout wrap>
            <template>
              <v-flex v-for="n in 4" :key="n" xs12 sm6 md4>
                <p-portfolio-app
                  style="color:black; font-weight:bolder; margin-left:20px; margin-right:20px; margin-top:10px; margin-bottom:10px;"
                  :apps="allApps[n]"
                />
              </v-flex>
              <v-flex xs12 sm6 md4>
                <more-apps
                  style="color:black; font-weight:bolder; margin-left:20px; margin-right:20px; margin-top:50px; margin-bottom:10px;"
                />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="techExp">
            Technology Explained
          </div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <p-tech-explain :techExp="allTechExp" />
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="techNews">
            Technology News
          </div>
        </v-flex>
        <v-flex  xs12 class="mt-5">
          <p-tech-news :techNews="allNews" />
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12 mb-5>
          <div class="display-1 font-weight-bold" id="contact">
            Connect With Me...... 😄😄
          </div>
        </v-flex>
        <template v-for="(contact, i) in getcontactLinks">
          <v-flex sm6 md4 xs12 :key="i">
            <p-contact-info
              style="color:black; font-weight:bolder;"
              :contact="contact"
            />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";

import PTechExplain from "../components/PTechExplain";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import LanderView from "./LanderView";
import MoreApps from "./MoreApps.vue";
import PTechNews from "../components/PTechNews.vue";
import PToolbar from '../components/PToolbar.vue';
export default {
  name: "Home",
  components: {
    PPortfolioApp,
    PContactInfo,

    PTechExplain,
    LanderView,
    MoreApps,
    PTechNews,
    PToolbar,
  },
  data() {
    return {
      aboutText:
        "A Teen who went totally in programming in high school. Learning different stuff but focusing on Android and Web Developemt I enjoy building apps in both Web and Android. Looking to get into machine learning and trying to have fun. Love to encourage new coders that they can do it too! I'm not very smart, just curious to see how things work. Anyways, you are free to download any of the code thats on my github! And I hope you have a great day!",
      showApps: []
    };
  },
  methods: {
    ...mapActions(["AddApps", "AddNews","AddTechExp"]),
  },
  computed: mapGetters(["allApps", "allNews", "getcontactLinks" , "allTechExp"]),
  async beforeCreate() {
    if (this.allApps === undefined) {
      const res = await axios.get("https://api-ashmitaryan.herokuapp.com/api/apps/");
      const Data = res.data;
      this.AddApps(Data);
    }
     function randomNumber(min, max) { 
     min = Math.ceil(min);
     max = Math.floor(max);
     var random =  Math.floor(Math.random() * (max - min + 1)) + min;
    return random.toString();
    } 

     if(this.allNews === null || this.allNews === undefined || this.allNews.length === 0){var options = {
      method: "GET",
      url: "https://newscatcher.p.rapidapi.com/v1/search_free",
      params: {
        q: "Programming Language",
        lang: "en",
        page: randomNumber(0 , 100),
        page_size: "30",
        media: "True",
      },
      headers: {
        "x-rapidapi-key": "98eca7b46cmshcc036a4accfbb38p1f5791jsne8c3a7823eba",
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
      },
    };
    const techRes = await axios.request(options)
    const techData = techRes.data.articles;
    this.AddNews(techData);}
    if(this.allTechExp === null || this.allTechExp === undefined || this.allTechExp.length === 0){
      const res = await axios.get('https://api-ashmitaryan.herokuapp.com/api/tech-explain/');
      const  a = res.data;
      this.AddTechExp(a);
  }
  
  },
  mounted(){
    this.$cookies.remove('session-token')
  }
};
</script>

<style scoped>


</style>
