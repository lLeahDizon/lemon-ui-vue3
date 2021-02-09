<template>
  <article class="markdown-body" v-html="content"/>
</template>

<script lang="ts">
  export default {
    props: {
      content: {
        type: String,
        required: true
      }
    },
  };
</script>
