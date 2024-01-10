import VersicherteSideMenu from "./VersicherteSideMenu";
import VersicherteRibbon from "./VersicherteRibbon";
import VersicherteTabBar from "./VersicherteTabBar";
import VersichertePageBase from "../VersichertePageBase";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import EntscheidTab_Versicherte from "./tabBarTabs/EntscheidTab_Versicherte";
import SendungenTab_Versicherte from "./tabBarTabs/SendungenTab_Versicherte";
import pageBase from "../../../base/PageBase";
import BasisdatenTab_VR from "./sideMenuTabs/BasisdatenTab_VR";
import DossierChronikTab from "./sideMenuTabs/DossierChronikTab";
import ProtocollPageObject from "../../protocoll/ProtocollPageObject";
import constants from "../../../helpers/Constants";
import EingliederungenTab_Versicherte from "./tabBarTabs/EingliederungenTab_Versicherte";
import AdressverbindungenTab from "./sideMenuTabs/AdressverbindungenTab";
import VersicherungenTab_VR from "./sideMenuTabs/VersicherungenTab_VR";
import DurchfuhrungsstellenTab_VR from "./sideMenuTabs/DurchfuhrungsstellenTab_VR";
import FallfuhrungTab from "./sideMenuTabs/FallfuhrungTab";
import EntscheidGrid from "../../entscheid/grid/EntscheidGrid";

class VersicherteDetail extends VersichertePageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_OPACITY1} [akid='sStammDetailBasisdatenForm'],${constants.CSS_OPACITY1} [akid='sStammDetailOverviewForm']`;
    super(detailFormCSS);
    this.windowHeader = new DetailWindowHeader();
    this.sideMenu = new VersicherteSideMenu();
    this.tabBar = new VersicherteTabBar();
    this.ribbonMenu = new VersicherteRibbon();
    this.basisdatenTab = new BasisdatenTab_VR();
    this.adressverbindungenTab = new AdressverbindungenTab();
    this.versicherungenTab = new VersicherungenTab_VR();
    this.durchfuhrungsstellenTab = new DurchfuhrungsstellenTab_VR();
    this.fallfuhrungTab = new FallfuhrungTab();
    this.dossierChronikTab = new DossierChronikTab();
    this.entscheidTabBar = new EntscheidTab_Versicherte();
    this.eingliederungenTabBar = new EingliederungenTab_Versicherte();
    this.sendungenTabBar = new SendungenTab_Versicherte();
    this.protocollTabBar = new ProtocollPageObject();
    this.entscheidGrid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidQueryStammGrid']`);
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

export default VersicherteDetail;
