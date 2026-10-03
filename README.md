# 🧪 E-commerce QA Automation Lab

[![QA Automation Pipeline](https://github.com/RodrigoBG13/qa-automation-lab/actions/workflows/playwright.yml/badge.svg)](https://github.com/RodrigoBG13/qa-automation-lab/actions/workflows/playwright.yml)
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

> 🤖 **Automated Testing Framework** using BDD (Behavior Driven Development) to validate UI, REST APIs, and Database integrity. 

## 🎯 The Mission
This lab was created to demonstrate a full-stack QA approach. It doesn't just test the UI; it tests all layers of an application.

- **UI Testing:** Automated browser interactions using Playwright (POM Architecture).
- **API Testing:** Direct endpoint validation using Playwright's `APIRequestContext`.
- **Database Testing:** SQL queries validation to guarantee data integrity.
- **CI/CD:** Automated pipeline with GitHub Actions.

## 🗺️ Test Scenarios Coverage

Here is a quick overview of what is currently being validated:

```text
UI (@ui)
├── Successful authentication (Happy Path)
└── Locked out user authentication (Sad Path)

API (@api)
├── GET: Retrieve an existing user
└── POST: Create a new user

Database (@database)
└── Validate persisted user data integrity
```

## ⚙️ How to run locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/RodrigoBG13/qa-automation-lab.git
   cd qa-automation-lab
   ```
2. **Install dependencies:**
   ```bash
   npm install
   npx playwright install --with-deps
   ```
3. **Run the magic:**
   ```bash
   npx cucumber-js
   ```
*(Check the generated `cucumber-report.html` for a detailed test execution view!)*

---
*Created by Rodrigo Brambilla - Questing for quality code.*
