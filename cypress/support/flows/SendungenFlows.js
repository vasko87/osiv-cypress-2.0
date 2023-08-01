import pages from "../base/OsivPageObject";
import pageBase from "../base/PageBase";
class SendungenFlows {

  step_navigateSEN_searchBySENNr_openSEN(sendungenNr) {
    pages.desktopMenu.navigateToSendungenTab();
    pageBase.waitForLoadingDisappears();
    pages.sendungen.grid.searchAndOpenSendundenNr(sendungenNr);
    pages.sendungen.detail.waitForLoaded();
  }
}

export default SendungenFlows;
