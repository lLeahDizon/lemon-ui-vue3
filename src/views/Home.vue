<template>
  <div class="topnavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>Lemon UI</h1>
      <h2>一个基于 Vue 3 的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/lLeahDizon/lemon-ui-vue3">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';

  export default {
    components: {TopNav}
  };
</script>

<style lang="scss" scoped>
  .topnavAndBanner {
    background: linear-gradient(145deg, rgba(255, 134, 79, 1) 0%, rgba(80, 23, 161, 1) 100%);
  }

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #fff;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
  }
</style>
