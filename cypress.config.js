const {defineConfig} = require("cypress");
const path = require("path");
const TestRailReporter = require("cypress-testrail");

module.exports = defineConfig(
  {
    projectId      : "nnmsrw",
    viewportWidth  : 1920,
    viewportHeight : 1080,
    reporter       : "cypress-mochawesome-reporter",
    reporterOptions: {
      reporterEnabled           : "mochawesome",
      mochawesomeReporterOptions: {
        reportDir             : "cypress/reports/mochawesome-report",
        screenshotOnRunFailure: true,
        overwrite             : false,
        html                  : false,
        json                  : true,
        timestamp             : "mmddyyyy_HHMMss",
        showSkipped           : true,
        charts                : true,
        quite                 : true,
        embeddedScreenshots   : true,
        inlineAssets          : true,
        capture               : "runner" // capture: "fullPage",
      }
    },
    e2e            : {
      setupNodeEvents(on, config) {
        require("cypress-mochawesome-reporter/plugin")(on);

        on('task', {
          log(message) {
            console.log(message);

            return null;
          }
        });

        on("before:browser:launch", (browser = {}, launchOptions) => {
          console.log(config, browser, launchOptions);
          if (browser.name === "chrome") {
            launchOptions.args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating," +
              "CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
            const ignoreXFrameHeadersExtension = path.join(__dirname, "../extensions/ignore-x-frame-headers");
            launchOptions.args.push(`--load-extension=${ignoreXFrameHeadersExtension}`);
          }
          return launchOptions;
        });
        new TestRailReporter(on, config).register();
      },

      specPattern           : "cypress/e2e/**/*.{js,jsx,ts,tsx}",
      excludeSpecPattern    : [
        "**/1-getting-started/*",
        "**/2-advanced-examples/*"
      ],
      screenshotOnRunFailure: true,
      screenshotsFolder     : "cypress/reports/mochawesome-report/assets",
      videosFolder          : "cypress/reports/mochawesome-report/videos",
      requestTimeout        : 100000,
      numTestsKeptInMemory  : 0,
      responseTimeout       : 100000,
      pageLoadTimeout       : 200000,
      defaultCommandTimeout : 100000,
      hideXHR               : true,
      chromeWebSecurity     : false,
      video                 : true,
      testIsolation         : false,
      all_frames            : true,
      retries               : {
        runMode : 0,
        openMode: 0
      },
      scrollBehavior        : "top",
      slowTestThreshold     : 250//Time, in milliseconds, to consider a test "slow" during cypress run
    }
  }
);
