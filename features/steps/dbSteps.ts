import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getDbConnection, seedDb } from '../../support/db';

let queryResult: any;

Given('the database is seeded with initial data', async function () {
  await seedDb(); // Prepara o terreno
});

When('I query the database for the user {string}', async function (name) {
  const db = await getDbConnection();
  // O "?" é pra evitar SQL Injection! O SQLite substitui de forma segura.
  queryResult = await db.get('SELECT * FROM users WHERE name = ?', [name]);
});

Then('the database should return the job {string}', async function (expectedJob) {
  // Primeiro, garante que ele achou alguma coisa e não é 'undefined'
  expect(queryResult).toBeDefined();
  
  // Depois, valida se a profissão bate com o esperado
  expect(queryResult.job).toBe(expectedJob);
});
