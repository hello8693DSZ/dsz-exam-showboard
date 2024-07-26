/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';

const router = createRouter({
  history: createWebHashHistory(),
  extendRoutes: setupLayouts
});

export default router;
