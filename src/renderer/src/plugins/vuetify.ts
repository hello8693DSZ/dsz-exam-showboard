/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

import { md3 } from 'vuetify/blueprints';

// 添加全局样式来隐藏滚动条
const style = document.createElement('style');
style.innerHTML = `
  body {
    overflow: hidden;
  }
  .no-scrollbar {
    overflow: hidden;
  }
  * {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }
  *::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`;
document.head.appendChild(style);

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  blueprint: md3
});
