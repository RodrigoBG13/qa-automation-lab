// features/steps/loginSteps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/LoginPage';
import { CustomWorld } from '../../support/CustomWorld';

Given('I am on the login page', async function (this: CustomWorld) {
  // The '!' tells TypeScript that 'this.page' is definitely initialized by the Before hook
  const loginPage = new LoginPage(this.page!);
  await loginPage.navigate();
});

When('I login with valid credentials {string} and {string}', async function (this: CustomWorld, username, password) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.login(username, password);
});

Then('I should be redirected to the inventory page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.verifyLoginSuccess();
});

When('I login with invalid credentials {string} and {string}', async function (this: CustomWorld, username, password) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.login(username, password);
});

Then('I should see an error message {string}', async function (this: CustomWorld, errorMessage) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.verifyErrorMessage(errorMessage);
});