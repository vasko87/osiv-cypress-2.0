import GesuchePageBase from "../GesuchePageBase";
import GesucheTabBar from "./GesucheTabBar";
import pageBase from "../../../base/PageBase";
import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import constants from "../../../helpers/Constants";
import EntscheidGrid from "../../entscheid/grid/EntscheidGrid";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
class GesucheDetail extends GesuchePageBase {
  constructor() {
    const detailFormCSS = "[akid='GesuchDetailForm']";
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.tabBar = new GesucheTabBar();
    this.entscheidGrid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='GesuchDetailWindow'] [akid='EntscheidGesuchQueryGrid']`);
    this.sendungenGrid = new SendungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='GesuchDetailWindow'] [akid='eSendungQueryVPContextB']`);
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
