import EntscheidSideMenu from "./EntscheidSideMenu";
import HilflosigkeitTab from "./sideMenuTabs/HilflosigkeitTab";
import EntscheidRibbon from "./EntscheidRibbon";
import EntscheidTabBar from "./EntscheidTabBar";
import FreitexteTab from "./sideMenuTabs/FreitexteTab";
import VisierenTab from "./sideMenuTabs/VisierenTab";
import pageBase from "../../../base/PageBase";
import DurchfuhrungsstellenTab_ENT from "./sideMenuTabs/DurchfuhrungsstellenTab_ENT";
import VersicherungenTab_ENT from "./sideMenuTabs/VersicherungenTab_ENT";
import DetailWindowHeader from "../../../base/DetailWindowHeader";
import MetaInfoTab_Ent from "./tabBarTabs/MetaInfoTab_Ent";
import SendungenTab_Ent from "./tabBarTabs/SendungenTab_Ent";
import BasisdatenTab_Ent from "./tabBarTabs/BasisdatenTab_Ent";
import constants from "../../../helpers/Constants";
import RenteTab from "./sideMenuTabs/rente/RenteTab";

class EntscheidDetail {
  constructor() {
    this.windowHeader = new DetailWindowHeader();
    this.sideMenu = new EntscheidSideMenu();
    this.tabBar = new EntscheidTabBar();
    this.ribbonMenu = new EntscheidRibbon();
    this.hilflosigkeitTab = new HilflosigkeitTab();
    this.durchfuhrungsstellenTab = new DurchfuhrungsstellenTab_ENT();
    this.versicherungenTab = new VersicherungenTab_ENT();
    this.freitexteTab = new FreitexteTab();
    this.visierenTab = new VisierenTab();
    this.renteTab = new RenteTab();
    this.basisdatenTabBar = new BasisdatenTab_Ent();
    this.sendungenTabBar = new SendungenTab_Ent();
    this.metaInfoTabBar = new MetaInfoTab_Ent();
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisDatenForm']`).should("be.visible", 10000);
    cy.wait(2000);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default EntscheidDetail;
