import pages from "../base/OsivPageObject";
import pageBase from "../base/PageBase";

class EntscheidFlows {

  step_navigateEin_searchEin_openEin(einID) {
    pages.desktopMenu.navigateToEingliederungTab();
    pageBase.waitForLoadingDisappears();
    pages.eingliederung.grid.searchAndOpenEingliederungID(einID);
    pages.eingliederung.detail.waitForLoaded();
  }
}

export default EntscheidFlows;
