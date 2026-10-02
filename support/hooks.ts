import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from '@playwright/test';

let browser: Browser;

// Aguarda 15 segundos pro robô agir antes de dar timeout
setDefaultTimeout(15000);

BeforeAll(async function () {
  // Se o GitHub Actions estiver rodando, process.env.CI será 'true'.
  // Portanto, headless será true (invisível na nuvem). 
  // No seu PC, process.env.CI não existe, então será false (visível pra você!).
  const isCI = process.env.CI === 'true';

  // headless: false -> Pra ver o navegador abrindo e o robô clicando
  browser = await chromium.launch({ headless: false }); 
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