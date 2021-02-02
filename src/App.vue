<template>
  <router-view/>
</template>

<script lang="ts">
  import {provide, ref} from 'vue';

  export default {
    name: 'App',
    setup() {
      const collapsed = ref(false);
      provide('collapsed', collapsed); // set
    }
  };
</script>
