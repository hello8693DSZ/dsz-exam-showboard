/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from './plugins';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

import { VueShowdownPlugin } from 'vue-showdown';
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(VueShowdownPlugin, {
  // 设置 showdown 默认 flavor
  flavor: 'github'
});

registerPlugins(app);

// 添加全局样式来隐藏滚动条
const style = document.createElement('style');
style.innerHTML = `
  body {
    overflow: hidden;
  }
  .no-scrollbar {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

app.mount('#app');
