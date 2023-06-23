import pageBase from "../base/PageBase";

export default {

  collectUsedJSHeapSize() { // min and max included
    pageBase.executeJS(`window.performance.memory.usedJSHeapSize`).then((usedJSHeapSize) => {
      window.usedJSHeapSize.push(usedJSHeapSize);
      cy.log(window.usedJSHeapSize);
    });
  }
};
