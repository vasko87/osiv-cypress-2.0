import pages from "../base/OsivPageObject";

export default {
  step_searchEnt_navigateToHilflosigkeitTab(entId) {
    pages.loginPage.openUrl();
    pages.desktopMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(entId);
    pages.entscheid.detail.sideMenu.navigateToHilflosigkeitTab();
    pages.waitForLoadingDisappears();
  }
};
