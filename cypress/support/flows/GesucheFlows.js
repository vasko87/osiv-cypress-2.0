import pages from "../base/OsivPageObject";

class GesucheFlows {
  step_navigateGes_searchGes_openGes(gesuchID) {
    pages.nav.leftMenu.navigateToGesucheTab();
    pages.gesuche.grid.searchAndOpenGesuchID(gesuchID);
    pages.gesuche.detail.waitForLoaded();
  }
}

export default GesucheFlows;
