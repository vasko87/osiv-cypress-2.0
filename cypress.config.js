const {defineConfig} = require("cypress");
const path = require("path");

module.exports = defineConfig(
  {
    projectId       : "vkywii",
    viewportWidth   : 1920,
    viewportHeight  : 1080,
    reporter        : "cypress-multi-reporters",
    reporterOptions : {
      configFile : "reporter-config.json"
    },
    e2e             : {
      setupNodeEvents(on, config) {
        let EntscheidIdNM;
        on("task", {
          setEntscheidIdNM : (val) => {
            return (EntscheidIdNM = val);
          },

          getEntscheidIdNM : () => {
            return EntscheidIdNM;
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
      },

      specPattern           : "cypress/e2e/**/*.{js,jsx,ts,tsx}",
      excludeSpecPattern    : [
        "**/1-getting-started/*",
        "**/2-advanced-examples/*"
      ],
      requestTimeout        : 100000,
      numTestsKeptInMemory  : 0,
      responseTimeout       : 100000,
      pageLoadTimeout       : 100000,
      defaultCommandTimeout : 100000,
      hideXHR               : true,
      chromeWebSecurity     : false,
      video                 : true,
      testIsolation         : false,
      all_frames            : true,
      retries               : {
        runMode  : 0,
        openMode : 0
      }
    }
  }
);
