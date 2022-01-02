<template>
  <div class="main">
    <p-toolbar  btn1="home"/>
    <div class="not">
      404 Error...
      File Not Found..
    </div>
  </div>
</template>

<script>
import PToolbar from '../components/PToolbar.vue';
export default {
    name:"FileNotFound",
    components: {
    PToolbar,
  }
}
</script>

<style scoped>
.not{
  position:relative;
  text-align: center;
  color: black;
  font-weight: bolder;
  border: black solid 10px;
  border-radius: 20px;
  margin-top: 200px;
  margin-left: 10px;
  font-size: 100px;
  font-style: italic;
}

</style>