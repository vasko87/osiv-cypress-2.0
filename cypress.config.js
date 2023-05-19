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
      reportDir          : "cypress/reports",
      charts             : true,
      overwrite          : true,
      html               : true,
      json               : true,
      embeddedScreenshots: true,
      inlineAssets       : true,
      showSkipped        : true,
      showPending        : true,
      quite              : true,
      capture            : "runner" // capture: "fullPage",
    },
    // reporter       : "cypress-mochawesome-reporter",
    // reporterOptions: {
    //   reporterEnabled           : "mochawesome",
    //   charts                : true,
    //   mochawesomeReporterOptions: {
    //     reportDir             : "cypress/reports/mochawesome-report",
    //     screenshotOnRunFailure: true,
    //     overwrite             : false,
    //     html                  : false,
    //     json                  : true,
    //     timestamp             : "mmddyyyy_HHMMss",
    //     showSkipped           : true,
    //     quite                 : true,
    //     embeddedScreenshots   : true,
    //     inlineAssets          : true,
    //     capture               : "runner" // capture: "fullPage",
    //   }
    // },
    e2e: {
      setupNodeEvents(on, config) {
        require("cypress-mochawesome-reporter/plugin")(on);
        require("cypress-fail-fast/plugin")(on, config);
        new TestRailReporter(on, config).register();

        config.env.FAIL_FAST_STRATEGY = "spec";
        config.env.FAIL_FAST_ENABLED = false;

        on("before:browser:launch", (browser = {}, launchOptions) => {
          // console.log(config, browser, launchOptions);
          // if (browser.name === "chrome") {
          //   launchOptions.args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating," +
          //     "CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
          //   const ignoreXFrameHeadersExtension = path.join(__dirname, "../extensions/ignore-x-frame-headers");
          //   launchOptions.args.push(`--load-extension=${ignoreXFrameHeadersExtension}`);
          // }
          // return launchOptions;
        });
        return config;
      },

      specPattern           : "cypress/e2e/**/*.{js,jsx,ts,tsx}",
      excludeSpecPattern    : [
        "**/1-getting-started/*",
        "**/2-advanced-examples/*"
      ],
      screenshotOnRunFailure: true,
      screenshotsFolder     : "cypress/reports/assets",
      videosFolder          : "cypress/reports/videos",
      requestTimeout        : 25000,
      numTestsKeptInMemory  : 0,
      responseTimeout       : 25000,
      pageLoadTimeout       : 25000,
      defaultCommandTimeout : 25000,
      hideXHR               : true,
      chromeWebSecurity     : false,
      video                 : false,
      videoUploadOnPasses   : false,
      videoCompression      : 15,
      testIsolation         : false,
      all_frames            : true,
      retries               : {
        runMode : 0,
        openMode: 0
      },
      scrollBehavior        : "top",
      slowTestThreshold     : 500//Time, in milliseconds, to consider a test "slow" during cypress run
    }
  }
);
