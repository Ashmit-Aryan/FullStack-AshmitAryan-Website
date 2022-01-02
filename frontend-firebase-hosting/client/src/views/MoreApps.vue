<template>
  <v-card @click="push" style="border-radius: 20px;" elevation="20"  color="#FFEBEE" >
    <v-card-title>
      <div class="centerText">
        <div id="text">See More Apps ></div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  methods: {
    push(){
      this.$router.push('/all-apps');
    }
  }
};
</script>

<style scoped>
.centerText{
  align-self: center;
  padding: 60px;
}
#text{
  text-align: center;
}
</style>