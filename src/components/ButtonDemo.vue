<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">Big Button</Button>
    <Button>Normal Button</Button>
    <Button size="small">Small Button</Button>
  </div>
  <div>
    <Button theme="link" size="big">Big Button</Button>
    <Button theme="link">Normal Button</Button>
    <Button theme="link" size="small">Small Button</Button>
  </div>
  <div>
    <Button theme="text" size="big">Big Button</Button>
    <Button theme="text">Normal Button</Button>
    <Button theme="text" size="small">Small Button</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <dir>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </dir>
    <dir>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </dir>
  </div>
</template>
<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    components: {Button},
    setup() {
      const onClick = () => {
        console.log('hi');
      };
      return {onClick};
    }
  };
</script>
