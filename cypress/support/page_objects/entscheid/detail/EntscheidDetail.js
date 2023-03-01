import EntscheidPageBase from "../EntscheidPageBase";
import EntscheidSideMenu from "./EntscheidSideMenu";
import HilflosigkeitTab from "./tabs/HilflosigkeitTab";
import EntscheidRibbon from "./EntscheidRibbon";
import EntscheidTabBar from "./EntscheidTabBar";
import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import FreitexteTab from "./tabs/FreitexteTab";

class EntscheidDetail extends EntscheidPageBase {
  constructor() {
    const detailFormCSS = "[akid='EntscheidDetailBasisDatenForm']";
    super(detailFormCSS);
    this.sideMenu = new EntscheidSideMenu();
    this.tabBar = new EntscheidTabBar();
    this.ribbonMenu = new EntscheidRibbon();
    this.hilflosigkeitTab = new HilflosigkeitTab();
    this.freitexteTab = new FreitexteTab();
    this.sendungenGrid = new SendungenGrid("[akid='EntscheidDetailWindow']");
    super.elements = {
      ...this.elements,
      detailForm : () => cy.get("[akid='EntscheidDetailBasisDatenForm']")
    };
  }

  waitForLoaded(){
    this.elements.detailForm().should("be.visible", 10000);
  }
}

export default EntscheidDetail;
