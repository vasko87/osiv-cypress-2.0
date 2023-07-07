import pages from "../base/OsivPageObject";
class SendungenFlows {

  step_navigateSEN_searchBySENNr_openSEN(sendungenNr) {
    pages.desktopMenu.navigateToSendungenTab();
    pages.sendungen.grid.waitGridViewLoaded();
    pages.sendungen.grid.searchAndOpenSendundenNr(sendungenNr);
    pages.sendungen.detail.waitForLoaded();
  }
}

export default SendungenFlows;
