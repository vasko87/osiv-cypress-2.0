import pages from "../base/OsivPageObject";
import pageBase from "../base/PageBase";

class VersicherteFlows {
  step_navigateVP_searchByVPName_openVP(versicherteName) {
    pages.nav.leftMenu.navigateToVersicherteTab();
    pages.versicherte.detail.waitForLoaded();
    pages.versicherte.grid.searchAndOpenVersicherteName(versicherteName);
    pages.versicherte.detail.waitForLoaded();
  }

  step_navigateVP_searchByVPNr_openVP(versicherteNr) {
    pages.nav.leftMenu.navigateToVersicherteTab();
    pages.versicherte.detail.waitForLoaded();
    pages.versicherte.grid.searchAndOpenVersicherteNr(versicherteNr);
    pages.versicherte.detail.waitForLoaded();
  }

  step_navigateVP_searchByVPNr_openVP_navigateToDossierChronikTab(versicherteNr) {
    this.step_navigateVP_searchByVPNr_openVP(versicherteNr);
    pages.versicherte.detail.sideMenu.navigateToDossierChronikTab()
         .waitForLoaded();
  }
}

export default VersicherteFlows;
