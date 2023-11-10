import AdressenPageBase from "../AdressenPageBase";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import AdressenRibbon from "./AdressenRibbon";
import AdressenZusammenfuehrenpPopup from "./popups/AdressenZusammenfuehrenpPopup";
import AdressenTabBar from "./AdressenTabBar";
import AdressenSideMenu from "./AdressenSideMenu";
import AnsprechpartnerTab from "./sideMenuTabs/AnsprechpartnerTab";
import pageBase from "../../../base/PageBase";

class AdressenDetail extends AdressenPageBase {
  constructor() {
    const detailOrPreviewFormCSS = "[akid='sAdresseDetailsForm']";

    super(detailOrPreviewFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.ribbonMenu = new AdressenRibbon();
    this.tabBar = new AdressenTabBar();
    this.sideMenu = new AdressenSideMenu();
    this.ansprechpartnerTab = new AnsprechpartnerTab();
    this.adressenZusammenfuehrenpPopup = new AdressenZusammenfuehrenpPopup();
    super.elements = {
      ...this.elements,
      adresseNewBtn: () => cy.get("[akid='AdresseQueryGrid-AdresseNew']"),
      detailForm : () => cy.get(detailOrPreviewFormCSS)
    };
  }

  waitForLoaded(){
    this.elements.detailForm().should("be.visible", 10000);
    pageBase.waitForLoadingDisappears();
  }

}

export default AdressenDetail;
