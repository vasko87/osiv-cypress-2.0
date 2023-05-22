import pages from "../base/OsivPageObject";
import pageBase from "../base/PageBase";
import constants from "../helpers/Constants";

class EntscheidFlows {

  step_navigateEin_searchEin_openEin(einID) {
    pages.desktopMenu.navigateToEingliederungTab();
    pageBase.waitForLoadingDisappears();
    pages.eingliederung.grid.searchAndOpenEingliederungID(einID);
    pages.eingliederung.detail.waitForLoaded();
    cy.wait(constants.MIN_TIMEOUT);
  }
}

export default EntscheidFlows;
