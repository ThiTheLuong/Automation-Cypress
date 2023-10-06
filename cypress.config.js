const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "leo",
    specPattern:"./cypress/tests/*/*",
    baseUrl: "https://www.development.opal2.conexus.net/app/"
  },
  defaultCommandTimeout: 10000
});
