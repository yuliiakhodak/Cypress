const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  retries : 2,
  env: {
    SITE_URL: "https://techglobal-training.com/"
  },
  viewportHeight: 1080,
  viewportWidth: 1980,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/intergation/*.cy.{js,jsx,ts,tsx}',
  },
});
