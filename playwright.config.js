import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  reporter: 'list',
  outputDir: undefined,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true
  },
  webServer: {
    command: 'npm run start',
    port: 3000,
    timeout: 60000,
    reuseExistingServer: true
  },
});