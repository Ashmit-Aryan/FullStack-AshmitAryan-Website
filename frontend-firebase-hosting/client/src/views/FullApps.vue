<template>
  <div class="container">
      <p-toolbar  btn1="Home" btn2="My Work"/>
      {{ $route.params.id}}
  </div> 
</template>

<script>
import PToolbar from '../components/PToolbar.vue'
export default {
  components: { PToolbar },
  name: 'FullApps',
  data(){
    return{

    }
  }
}
</script>

<style>

</style>