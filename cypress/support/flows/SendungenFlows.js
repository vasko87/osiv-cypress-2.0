import pages from "../base/OsivPageObject";
import pageBase from "../base/PageBase";
class SendungenFlows {

  step_navigateSEN_searchBySENNr_openSEN(sendungenNr) {
    pages.desktopMenu.navigateToSendungenTab();
    pageBase.waitForLoadingDisappears();
    pages.sendungen.detail.waitForLoaded();
    pages.sendungen.grid.searchAndOpenSendundenNr(sendungenNr);
    pages.sendungen.detail.waitForLoaded();
    pageBase.waitForLoadingDisappears();
  }
}

export default SendungenFlows;
