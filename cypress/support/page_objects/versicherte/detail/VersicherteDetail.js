import VersicherteSideMenu from "./VersicherteSideMenu";
import VersicherteRibbon from "./VersicherteRibbon";
import VersicherteTabBar from "./VersicherteTabBar";
import VersichertePageBase from "../VersichertePageBase";
import SendungenGrid from "../../sendungen/grid/SendungenGrid";

class VersicherteDetail extends VersichertePageBase {
  constructor() {
    const detailFormCSS = "[akid='sStammDetailBasisdatenForm']";
    super(detailFormCSS);
    this.sideMenu = new VersicherteSideMenu();
    this.tabBar = new VersicherteTabBar();
    this.ribbonMenu = new VersicherteRibbon();
    this.entscheidGrid = new SendungenGrid("[akid='sStammDetailWindow']");
    super.elements = {
      ...this.elements,
      detailForm : () => cy.get("[akid='sStammDetailBasisdatenForm']")
    };
  }

  waitForLoaded(){
    this.elements.detailForm().should("be.visible", 10000);
  }
}

export default VersicherteDetail;
