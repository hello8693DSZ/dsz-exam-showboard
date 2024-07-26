import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
// Plugins
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Fonts from 'unplugin-fonts/vite';
import Layouts from 'vite-plugin-vue-layouts';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
// import rawLoader from 'raw-loader'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      VueRouter({
        dts: resolve('src/renderer/src/typed-router.d.ts'),
        routesFolder: [
          {
            src: resolve('src/renderer/src/pages'),
            path: '',
            // override globals
            exclude: (excluded) => excluded,
            filePatterns: (filePatterns) => filePatterns,
            extensions: (extensions) => extensions
          }
        ]
      }),
      Layouts(),
      Vue(),
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
      Components({
        dts: 'src/components.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
      Fonts({
        google: {
          families: [
            {
              name: 'Roboto',
              styles: 'wght@100;300;400;500;700;900'
            }
          ]
        }
      }),
      AutoImport({
        imports: [
          'vue',
          {
            'vue-router/auto': ['useRoute', 'useRouter']
          }
        ],
        dts: 'src/auto-imports.d.ts',
        eslintrc: {
          enabled: true
        },
        vueTemplate: true,
        resolvers: [ElementPlusResolver()],
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [resolve('src/renderer/src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',

        /**
         * custom insert position
         * @default: body-last
         */
        // inject?: 'body-last' | 'body-first',

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__'
      })
    ],
    define: { 'process.env': {} }
  }
});
