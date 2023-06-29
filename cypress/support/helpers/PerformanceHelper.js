import pageBase from "../base/PageBase";

export default {

  collectUsedJSHeapSize(set) {
    pageBase.executeJS(`window.performance.memory.usedJSHeapSize`).then((usedJSHeapSize) => {
      if (!window.usedJSHeapSize[set]) {
        window.usedJSHeapSize[set] = [];
      }
      window.usedJSHeapSize[set].push(Math.ceil(usedJSHeapSize / 1024 / 1024));

      for (const key in window.usedJSHeapSize) {
        cy.log(key + ": " + window.usedJSHeapSize[key].join("MB, ") + "MB");
      }
    });
  }
};
