import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    // Usando os seletores oficiais do site alvo
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async verifyLoginSuccess() {
    // A validação de ouro: se logou, a URL tem que mudar pro inventário
    await expect(this.page).toHaveURL(/.*inventory.html/);
  }
}
