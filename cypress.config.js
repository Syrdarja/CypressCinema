const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "6nyd3b",
    retries: 1,
    baseUrl: "http://qamid.tmweb.ru",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
