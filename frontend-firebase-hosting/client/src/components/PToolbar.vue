<template>
  <v-app-bar desne absolute color="transparent" light height="100px">
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <v-img
            class="img"
            max-height="35px"
            max-width="35px"
            style="margin-left: 0"
            :src="require('../assets/side-logo.png')"
          ></v-img>
          <div
          @click="$router.push({path: '/'})"
            :class="{
              'display-1 font-weight-bold ': $vuetify.breakpoint.smAndUp,
              'subtitle font-weight-bold': $vuetify.breakpoint.smAndDown,
            }"
          >
            Ashmit Aryan
          </div>
          <v-spacer></v-spacer>
          <v-toolbar-items style="font-weight: bolder" class="text-right">
            <v-btn
              v-if="btn1 != null"
              style="font-weight: bolder"
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="btnGo(btn1)"
              text
              >{{ btn1 }}</v-btn
            >
            <v-btn
              v-if="btn2 != null"
              style="font-weight: bolder"
              :x-small="$vuetify.breakpoint.smAndDown"
              text
              @click="btnGo(btn2)"
              >{{ btn2 }}</v-btn
            >
            <v-btn
              v-if="btn3 != null"
              style="font-weight: bolder"
              :x-small="$vuetify.breakpoint.smAndDown"
              text
              @click="btnGo(btn3)"
              >{{ btn3 }}</v-btn
            >
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>

<script>
// import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {
  data() {
    return {
      route: this.$router,
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic",
      },
    };
  },
  props: {
    btn1: {
      type: String,
      default: function() {
        return null;
      },
    },
    btn2: {
      type: String,
      default: function() {
        return null;
      },
    },
    btn3: {
      type: String,
      default: function() {
        return null;
      },
    },
  },
  methods: {
    btnGo(name) {
      if(name === 'home' || name === 'Home'){
        this.route.push({path: '/'})
      }else if(name === 'tech Explain' || name === 'Tech Explain'){
        this.$vuetify.goTo("#techExp", this.options);
      }else if(name === 'Contact' || name === 'contact'){
      this.$vuetify.goTo("#contact", this.options);
      }else if(name === 'Tech News' || name === 'tech News'){
        this.$vuetify.goTo("#techNews", this.options);
      }else if(name === 'My Work' || name === 'my Work'){
        this.route.push({path: '/all-apps'})
      }
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 700px) {
  .img {
    display: none;
  }
}
</style>
