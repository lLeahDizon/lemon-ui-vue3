<template>
  <div>
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
      <div class="features">
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
      </div>
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
  $yellow: #FFC700;
  $border-radius: 4px;
  $color: #2a71c1;

  .topnavAndBanner {
    background: linear-gradient(145deg, rgba(175, 217, 255, 1) 0%, rgba(80, 156, 240, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }

  .features {
    > svg {
      width: 64px;
      height: 64px;
    }
  }

  .banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        color: white;
        background: $yellow;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>
