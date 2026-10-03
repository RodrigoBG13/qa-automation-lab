import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/LoginPage';

Given('I am on the login page', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('I login with valid credentials {string} and {string}', async function (username, password) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password);
});

Then('I should be redirected to the inventory page', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.verifyLoginSuccess();
});

When('I login with invalid credentials {string} and {string}', async function (username, password) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password);
});

Then('I should see an error message {string}', async function (errorMessage) {
  const loginPage = new LoginPage(this.page);
  await loginPage.verifyErrorMessage(errorMessage);
});