<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>default</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
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
      <Button level="main">main</Button>
      <Button>default</Button>
      <Button level="danger">danger</Button>
    </dir>
    <dir>
      <Button theme="link" level="main">main</Button>
      <Button theme="link">default</Button>
      <Button theme="link" level="danger">danger</Button>
    </dir>
    <dir>
      <Button theme="text" level="main">main</Button>
      <Button theme="text">default</Button>
      <Button theme="text" level="danger">danger</Button>
    </dir>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>disabled</Button>
    <Button theme="link" disabled>disabled link</Button>
    <Button theme="text" disabled>disabled text</Button>
  </div>
  <h1>示例5</h1>
  <div style="display: flex;">
    <Button loading>loading</Button>
    <Button>loading complete</Button>
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
