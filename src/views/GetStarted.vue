<template>
  <article class="markdown-body" v-html="md"/>
</template>
<script lang="ts">
  import md from '../markdown/getStarted.md';

  export default {
    data() {
      return {md};
    }
  };
</script>
