import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from '@playwright/test';

let browser: Browser;

// Aguarda 15 segundos pro robô agir antes de dar timeout
setDefaultTimeout(15000);

BeforeAll(async function () {
  // Pega qualquer sinal de que estamos na nuvem
  const isCI = !!process.env.GITHUB_ACTIONS || !!process.env.CI;
  
  browser = await chromium.launch({ headless: isCI }); 
});

Before(async function () {
  const context = await browser.newContext();
  this.page = await context.newPage(); // Injeta a página no "this" do Cucumber
});

After(async function () {
  if (this.page) {
    await this.page.close();
  }
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});