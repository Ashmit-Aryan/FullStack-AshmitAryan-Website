<template>
  <v-list-item :href="contact.link" target="_blank" class="list-item">
    <v-list-item-icon class="pa-0 mr-2">
      <v-btn icon :href="contact.link" target="_blank">
        <v-icon color="black">mdi-{{contact.icon}}</v-icon>
      </v-btn>
    </v-list-item-icon>
    <v-list-item-content >
      <v-list-item-title>{{contact.value}}</v-list-item-title>
      <v-list-item-subtitle>{{contact.name}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.list-item:hover{
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
}
</style>