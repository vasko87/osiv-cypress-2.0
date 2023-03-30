import VersicherteSideMenu from "./VersicherteSideMenu";
import VersicherteRibbon from "./VersicherteRibbon";
import VersicherteTabBar from "./VersicherteTabBar";
import VersichertePageBase from "../VersichertePageBase";
import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import EntscheidGrid from "../../entscheid/grid/EntscheidGrid";
import constants from "../../../helpers/Constants";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import EntscheidTab_Versicherte from "./tabBarTabs/EntscheidTab_Versicherte";
import SendungenTab_Versicherte from "./tabBarTabs/SendungenTab_Versicherte";

class VersicherteDetail extends VersichertePageBase {
  constructor() {
    const detailFormCSS = "[akid='sStammDetailBasisdatenForm']";
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.sideMenu = new VersicherteSideMenu();
    this.tabBar = new VersicherteTabBar();
    this.ribbonMenu = new VersicherteRibbon();
    this.entscheidTabBar = new EntscheidTab_Versicherte();
    this.sendungenTabBar = new SendungenTab_Versicherte();
    super.elements = {
      ...this.elements,
      detailForm : () => cy.get(detailFormCSS)
    };
  }

  waitForLoaded(){
    this.elements.detailForm().should("be.visible", 10000);
  }
}

export default VersicherteDetail;
