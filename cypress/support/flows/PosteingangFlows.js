import pages from "../base/OsivPageObject";
import pageBase from "../base/PageBase";

class PosteingangFlows {
  step_navigatePOE_searchByVPNr(vpNr) {
    pages.nav.leftMenu.navigateToPosteingangTab();
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.grid.headerActivePanel.selectAllDropdown();
    pageBase.waitForLoadingDisappears();
    pages.posteingang.grid.filter.searchVersichertenNrTxt(vpNr);
    pages.waitForLoadingDisappears();
  }

  step_navigatePOE_applyAllfilter_searchByVPNr(vpNr) {
    pages.nav.leftMenu.navigateToPosteingangTab();
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.grid.headerActivePanel.selectPosteingangQueryGridDropdownAll();
    pages.posteingang.grid.filter.searchVersichertenNrTxt(vpNr);
    pages.waitForLoadingDisappears();
  }
}

export default PosteingangFlows;
