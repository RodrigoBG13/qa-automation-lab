import { Given, Then, After } from '@cucumber/cucumber';
import { request, APIRequestContext, expect } from '@playwright/test';

// Variáveis pra guardar nossa sessão e as respostas do servidor
let apiContext: APIRequestContext;
let apiResponse: any;
let responseBody: any;

// Garbage Collector. Terminou o cenário, destroi o contexto da API pra liberar a RAM.
After(async function () {
  if (apiContext) {
    await apiContext.dispose();
  }
});

Given('I send a GET request to {string}', async function (endpoint) {
  // Inicializa o motor de API do Playwright apontando pro alvo
  apiContext = await request.newContext({ baseURL: 'https://reqres.in' });
  
  // Dispara o GET
  apiResponse = await apiContext.get(endpoint);
  responseBody = await apiResponse.json(); // Converte a resposta pra JSON
});

Given('I send a POST request to {string} with name {string} and job {string}', async function (endpoint, name, job) {
  apiContext = await request.newContext({ baseURL: 'https://reqres.in' });
  
  // Dispara o POST enviando um payload (os dados)
  apiResponse = await apiContext.post(endpoint, {
    data: {
      name: name,
      job: job
    }
  });
});

Then('the response status code should be {int}', async function (expectedStatus) {
  // Valida se o servidor respondeu com o código certo (200 ou 201)
  expect(apiResponse.status()).toBe(expectedStatus);
});

Then('the response body should contain the user {string}', async function (expectedName) {
  // Navega no JSON da resposta pra ver se o nome bate com o esperado
  expect(responseBody.data.first_name).toBe(expectedName);
});
