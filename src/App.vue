<template>
  <router-view/>
</template>

<script lang="ts">
  import {provide, ref} from 'vue';

  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth;
      console.log(width);
      const collapsed = ref(width > 500);
      provide('collapsed', collapsed); // set
    }
  };
</script>
