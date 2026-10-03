// support/hooks.ts
import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { CustomWorld } from './CustomWorld';

let browser: Browser;

// Aguarda 15 segundos pro robô agir antes de dar timeout
setDefaultTimeout(15000);

BeforeAll(async function () {
  // Pega qualquer sinal de que estamos na nuvem
  const isCI = !!process.env.GITHUB_ACTIONS || !!process.env.CI;
  browser = await chromium.launch({ headless: isCI }); 
});

// We explicitly type 'this' as CustomWorld
Before(async function (this: CustomWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage(); 
});

After(async function (this: CustomWorld) {
  if (this.page) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});