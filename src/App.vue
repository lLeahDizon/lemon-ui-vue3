<template>
  <div>导航栏 |
    <router-link to="/">Lemon</router-link>
    |
    <router-link to="/xxx">Lemon2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
