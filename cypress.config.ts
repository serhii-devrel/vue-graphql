import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    video: false,
    baseUrl: "http://localhost:8080",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
