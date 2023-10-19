import SendungenRibbon from "./SendungenRibbon";
import SendungenAbschliessenPopup from "./popups/SendungenAbschliessenPopup";
import SendungenSideMenu from "./SendungenSideMenu";
import constants from "../../../helpers/Constants";
import SendungenPageBase from "../SendungenPageBase";
import pageBase from "../../../base/PageBase";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import FormularVariablenTab from "../../sendungen/detail/sideMenuTabs/FormularVariablenTab";
import DossierBeilagenTab from "../../sendungen/detail/sideMenuTabs/dossierBeilagenTab/DossierBeilagenTab";
import DetailTab_Sen from "./tabBarTabs/DetailTab_Sen";
import ProtocollTab_Sen from "./tabBarTabs/ProtocollTab_Sen";
import EingliederungTabBar from "../../eingliederungen/details/EingliederungTabBar";
import SendungenTabBar from "./SendungenTabBar";
import SendungskopieTab from "./sideMenuTabs/SendungskopieTab";

class SendungenDetail extends SendungenPageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='SendungHauptdatenForm']`;
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.ribbonMenu = new SendungenRibbon();
    this.tabBar = new SendungenTabBar();
    this.detailTabBar = new DetailTab_Sen();
    this.protocollTabBar = new ProtocollTab_Sen();
    this.sideMenu = new SendungenSideMenu();
    this.formularVariablenTab = new FormularVariablenTab();
    this.dossierBeilagenTab = new DossierBeilagenTab();
    this.sendungskopieTab = new SendungskopieTab();
    this.sendungenAbschliessenPopup = new SendungenAbschliessenPopup();
    this.elements = {
      ...this.elements,
      detailForm: () => cy.get(detailFormCSS)
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.elements.detailForm().should("be.visible", constants.DEFAULT_TIMEOUT);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default SendungenDetail;
