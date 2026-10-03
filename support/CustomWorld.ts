// support/CustomWorld.ts
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Page, BrowserContext } from '@playwright/test';

// Defines the custom context for our tests, keeping TypeScript happy and strictly typed.
export class CustomWorld extends World {
  page?: Page;
  context?: BrowserContext;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

// Registers our custom world with Cucumber
setWorldConstructor(CustomWorld);