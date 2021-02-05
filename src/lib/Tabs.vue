<template>
  <div class="lemon-tabs">
    <div class="lemon-tabs-nav">
      <div
        class="lemon-tabs-nav-item"
        :class="{selected: selected === p.key}"
        v-for="p in tabProps" :key="p.key"
        @click="select(p.key)"
      >
        {{ p.title }}
      </div>
    </div>
    <div class="lemon-tabs-content">
      <component class="lemon-tabs-content-item" :is="current" :key="current.props.key"/>
    </div>
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue';
  import {computed} from 'vue';

  export default {
    props: {
      selected: {
        type: String,
      }
    },
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab');
        }
        if (tag.props.key === '') {
          throw new Error('Tab 缺少 key');
        }
      });
      const current = computed(() => {
        return defaults.filter(tag => tag.props.key === props.selected)[0];
      });
      const tabProps: { key: string, title: string } = defaults.map((tag) => {
        console.log(tag.props);
        return tag.props;
      });
      const select = (key: string) => {
        context.emit('update:selected', key);
      };
      return {defaults, tabProps, current, select};
    }
  };
</script>
<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .lemon-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
