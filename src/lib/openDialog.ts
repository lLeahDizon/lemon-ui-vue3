import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content, ...rest} = options;
  const div = document.createElement('div');
  document.body.append(div);
  const close = () => {
    app.unmount(div);
    div.parentNode.removeChild(div);
  };
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        ...rest,
        'onUpdate:visible': (newVisible) => {
          if (!newVisible) {
            close();
          }
        }
      }, {
        title, content
      });
    }
  });
  app.mount(div);
};
