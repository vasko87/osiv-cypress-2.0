import pages from "../base/OsivPageObject";
import pageBase from "../base/PageBase";

class VersicherteFlows {
  step_navigateVP_searchByVPName_openVP(versicherteName) {
    pages.nav.leftMenu.navigateToVersicherteTab();
    pages.versicherte.detail.waitForLoaded();
    pages.versicherte.grid.searchAndOpenVersicherteName(versicherteName);
    pages.versicherte.detail.waitForLoaded();
  }
}

export default VersicherteFlows;
