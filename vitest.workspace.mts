import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    test: {
      include: ['**/*.test.ts'],
      globals: true,
      environment: 'jsdom',
    },
  },
  {
    test: {
      include: ['**/*.browser.test.ts'],
      globals: true,
      browser: {
        enabled: true,
        name: 'chromium',
      },
    },
  },
])
