import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [HstVue()],
  setupFile: resolve(__dirname, './scripts/setup-histoire.ts'),
  theme: {}
})
