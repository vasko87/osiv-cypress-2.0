import pages from "../base/OsivPageObject";

class EntscheidFlows {

  step_navigateEnt_searchEnt_openEnt(entId) {
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(entId);
    pages.entscheid.detail.waitForLoaded();
  }
  step_navigateEnt_searchEnt_openEnt_navigateToHilflosigkeitTab(entId) {
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(entId);
    pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab();
    pages.waitForLoadingDisappears();
  }

  step_clickRibbonSave_checkSuccessMsg() {
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
  }

  step_clickRibbonSave_warningOK_checkSuccessMsg() {
    pages.entscheid.detail.ribbonMenu.clickSpeichernBtn();
    pages.warningPopup.clickOkBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.waitForLoadingDisappears();
  }
}

export default EntscheidFlows;
