import GesuchePageBase from "../GesuchePageBase";
import GesucheTabBar from "./GesucheTabBar";
import pageBase from "../../../base/PageBase";
import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import constants from "../../../helpers/Constants";
import EntscheidGrid from "../../entscheid/grid/EntscheidGrid";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import EntscheidTab_Gesuche from "./tabBarTabs/EntscheidTab_Gesuche";
import SendungenTab_Gesuche from "./tabBarTabs/SendungenTab_Gesuche";
class GesucheDetail extends GesuchePageBase {
  constructor() {
    const detailFormCSS = "[akid='GesuchDetailForm']";
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.tabBar = new GesucheTabBar();
    this.entscheidTabBar = new EntscheidTab_Gesuche();
    this.sendungenTabBar = new SendungenTab_Gesuche();
    super.elements = {
      ...this.elements,
      detailForm : () => cy.get(detailFormCSS)
    };
  }

  waitForLoaded(){
    this.elements.detailForm().should("be.visible", 10000);
    pageBase.waitForLoadingDisappears();
  }
}

export default GesucheDetail;
