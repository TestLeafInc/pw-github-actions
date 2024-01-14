import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  //testMatch: 'github-actions.spec.ts',
  reporter: [['html']],
  timeout: 120000,
  workers: 1,
  retries: 0,
  use: {
    trace: 'on',
    video:'on',
    screenshot:'on',
    headless: true,
  },
  projects: [
   
    {
      name: 'chrome',
       use: {channel: 'chrome'},
    }, 
  ],
 
})