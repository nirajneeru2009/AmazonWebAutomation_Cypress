const { defineConfig } = require('cypress');

module.exports =defineConfig({
    defaultCommandTimeout: 90000,
    pageLoadTimeout: 90000,
    requestTimeout: 60000,
    responseTimeout: 120000,
    taskTimeout: 150000,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 0,
    env: {
        isLocalHost: true,
        local_development_host: 'https://www.amazon.in/',
        app_path: 'https://www.amazon.in/',
        username: '',
        password: '',
    },
    video: false,
    videoCompression: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reportDir: 'cypress/reports/mocha',
        overwrite: false,
        html: false,
        json: true,
    },
    mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/reports/junit/[hash].xml',
    },
    e2e: {
        baseUrl: 'https://www.amazon.com/',
        specPattern: 'cypress/e2e/specFiles/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: false,
    },

});