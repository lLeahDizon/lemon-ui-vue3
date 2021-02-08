<template>
  <div class="layout">
    <TopNav toggle-menu-button-visible class="nav"/>
    <div class="content">
      <aside v-if="collapsed">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
  import TopNav from '../components/TopNav.vue';
  import {inject, Ref} from 'vue';

  export default {
    components: {TopNav},
    setup() {
      const collapsed = inject<Ref<boolean>>('collapsed'); // get
      return {collapsed};
    }
  };
</script>
<style lang="scss" scoped>
  $box-shadow: 0 2px 8px #f0f1f2;
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .nav {
      flex-shrink: 0;
      background: white;
      box-shadow: $box-shadow;
    }

    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    > aside {
      flex-shrink: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }

  aside {
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 70px 0 16px;
    height: 100%;
    box-shadow: $box-shadow;

    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;
    }

    > ol {
      > li {
        > a {
          display: block;
          padding: 4px 16px;
          text-decoration: none;
        }

        .router-link-active {
          background: #e6f7ff;
          color: #1890ff;
          border-right: 3px solid #1890ff;
        }
      }
    }
  }

  main {
    overflow: auto;
  }
</style>
