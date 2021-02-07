<template>
  <div class="lemon-tabs">
    <div class="lemon-tabs-nav" ref="container">
      <div
        class="lemon-tabs-nav-item"
        :class="{selected: selected === p.key}"
        v-for="p in tabProps" :key="p.key"
        @click="select(p.key)"
        :ref="el => { if (p.key === selected) selectedItem = el }"
      >
        {{ p.title }}
      </div>
      <div class="lemon-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="lemon-tabs-content">
      <component class="lemon-tabs-content-item" :is="current" :key="current.props.key"/>
    </div>
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue';
  import {computed, onMounted, ref, watchEffect} from 'vue';

  export default {
    props: {
      selected: {
        type: String,
      }
    },
    setup(props, context) {
      const selectedItem = ref<HTMLDivElement>(null);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);
      onMounted(() => {
        watchEffect(() => {
          const {width, left: leftResult} = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + 'px';
          const {left: leftContainer} = container.value.getBoundingClientRect();
          const left = leftResult - leftContainer;
          indicator.value.style.left = left + 'px';
        });
      });
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
        return tag.props;
      });
      const select = (key: string) => {
        context.emit('update:selected', key);
      };
      return {
        defaults,
        tabProps,
        current,
        select,
        selectedItem,
        indicator,
        container
      };
    },
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
      position: relative;

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

      &-indicator {
        content: '';
        position: absolute;
        height: 3px;
        background-color: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
