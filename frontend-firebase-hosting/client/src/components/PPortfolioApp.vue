<template>
  <v-card style="border-radius: 20px;" elevation="10"  color="error" >
    <v-card-title>
      <v-layout>
        <v-flex>
          <v-card
            :href="apps.platforms[index].link"
            target="_blank"
            elevation="10"
            style="border-radius: 20px; border:black solid 1px"
            width="100px"
            height="100px"
            color="#FF5252"
          >
          <img width="100px" height="100px" alt="image" :src="apps.logo"/>
          </v-card>
        </v-flex>
        <v-flex xs7>
          <div>{{apps.name}}</div>
          <div>
            <v-chip small pill color="purple" dark>{{apps.price}}</v-chip>
          </div>

          <template >
           <div :key="platform" v-for="platform in apps.platforms"> 
            <v-btn :href="platform.link" target="_blank" icon>
              <v-icon color="black">mdi-{{platform.icon}}</v-icon>
            </v-btn>
           </div>
          </template>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <div v-if="disBool" style=" color:black; font-weight:bolder;">{{apps.description}}</div>
      <div style=" color:black; font-weight:bolder;" class="title mt-2">Technologies Used</div>
      <v-layout>
        <template v-for="(tech, i) in apps.tech_stack">
          <v-flex xs3 :key="i">
            <div class="text-center">
              <v-btn icon :href="tech.link" target="_blank">
                <v-icon color="black">mdi-{{tech.icon}}</v-icon>
              </v-btn>
              <div style=" color:black; font-weight:bolder;" class="caption">{{tech.name}}</div>
            </div>
          </v-flex>
        </template>
      </v-layout>
      <div  v-if="codeBool">
        <div style="color:black; font-weight:bolder;" class="title mt-2">Code</div>
        <v-btn icon :href="apps.code.link" target="_blank">
          <v-icon color="black">mdi-{{apps.code.icon}}</v-icon>
        </v-btn>
        <div style="color:black; font-weight:bolder;"><a style="color:black;" :href="apps.code.link" target="_blank" >{{ apps.code.name }}</a></div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data(){
    return {codeBool : false,
    disBool: false,
    route: this.$router,
    index: 0
    }

  },
  props: {
    apps: {
      type: Object,
      default: function() {
        return {};
      }
    },
    code: {
      type: Boolean,
      default: false
    },
    dis: {
      type: Boolean,
      default: false
    }
  },
  created(){
    if(this.code){
      this.codeBool = true;
    }
    if(this.dis){
      this.disBool = true; 
    }
  },
  methods: {
    logo(name) {
      return require("../assets/" + name);
    },
    // goToApps(id){
    //   this.route.push({path: `/full-apps/${id}`})
    // }
  }
};
</script>
