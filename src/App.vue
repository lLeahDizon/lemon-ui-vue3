<template>
  <router-view/>
</template>

<script lang="ts" setup>
  import {provide, ref} from 'vue';
  import {router} from './router';

  const width = document.documentElement.clientWidth;
  const collapsed = ref(width > 500);
  provide('collapsed', collapsed); // set
  router.afterEach(() => {
    if (width <= 500) {
      collapsed.value = false;
    }
  });
</script>
