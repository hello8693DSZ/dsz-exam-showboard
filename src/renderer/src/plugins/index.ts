/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import pinia from '../stores';
import router from '../router';
import { App } from 'vue';

export function registerPlugins(app: App) {
  app.use(router).use(pinia);
}
