import FreitexteTab from "./sideMenuTabs/FreitexteTab";
import HilflosigkeitTab from "./sideMenuTabs/HilflosigkeitTab";
import constants from "../../../helpers/Constants";
import pageBase from "../../../base/PageBase";
import VisierenTab from "./sideMenuTabs/VisierenTab";
import DurchfuhrungsstellenTab_ENT from "./sideMenuTabs/DurchfuhrungsstellenTab_ENT";
import VersicherungenTab_ENT from "./sideMenuTabs/VersicherungenTab_ENT";
import BasisdatenTab_Ent from "./tabBarTabs/BasisdatenTab_Ent";
import DiskutierenTab from "./sideMenuTabs/DiskutierenTab";
import RenteTab from "./sideMenuTabs/rente/RenteTab";

class EntscheidSideMenu {
  constructor() {
    this.elements = {
      basisdatenTab          : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Basisdaten']`),
      durchfuhrungsstellenTab: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Durchführungsstellen']`),
      versicherungTab        : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Versicherungen']`),
      hilflosigkeitTab       : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Hilflosigkeit']`),
      freitexteTab           : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Freitexte']`),
      entscheidSendungenTab  : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen']`),
      visierenTab            : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Visieren']`),
      diskutierenTab         : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Diskutieren']`),
      renteTab               : () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisFrameTabbar-Rente']`)
    };
  }

  navigateToBasisdatenTab() {
    this.elements.basisdatenTab().should("be.visible").click();
    return new BasisdatenTab_Ent();
  }

  navigateToDurchfuhrungsstellenTab() {
    this.elements.durchfuhrungsstellenTab().should("be.visible").click();
    return new DurchfuhrungsstellenTab_ENT();
  }

  navigateToVersicherungTab() {
    this.elements.versicherungTab().should("be.visible").click();
    return new VersicherungenTab_ENT();
  }

  navigateToFreitexteTab() {
    this.elements.freitexteTab().should("be.visible").click();
    return new FreitexteTab();
  }

  navigateToHilflosigkeitTab() {
    this.elements.hilflosigkeitTab().should("be.visible").click();
    return new HilflosigkeitTab();
  }

  navigateToEntscheidSendungenTab() {
    this.elements.entscheidSendungenTab().should("be.visible").click();
    return this;
  }

  navigateToVisierenTab() {
    this.elements.visierenTab().should("be.visible").click();
    return new VisierenTab();
  }

  navigateToDiskutierenTab() {
    this.elements.diskutierenTab().should("be.visible").click();
    return new DiskutierenTab();
  }

  navigateToRenteTab() {
    this.elements.renteTab().should("be.visible").click();
    return new RenteTab();
  }

  checkEntscheidSendungenTabVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.entscheidSendungenTab(), isVisible);
    return this;
  }

  checkFreitexteTabVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.freitexteTab(), isVisible);
    return this;
  }

  checkVisierenTabVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.visierenTab(), isVisible);
    return this;
  }

  checkDiskutierenTabVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.diskutierenTab(), isVisible);
    return this;
  }

  checkBasisdatenTabColor(color, shouldHave) {
    pageBase.checkElementBorderLeftColor(this.elements.basisdatenTab(), color, shouldHave);
    return this;
  }

  checkHilflosigkeitTabColor(color, shouldHave) {
    pageBase.checkElementBorderLeftColor(this.elements.hilflosigkeitTab(), color, shouldHave);
    return this;
  }

  checkFreitexteTabColor(color, shouldHave) {
    pageBase.checkElementBorderLeftColor(this.elements.freitexteTab(), color, shouldHave);
    return this;
  }

  checkDurchfuhrungsstellenTabColor(color, shouldHave) {
    pageBase.checkElementBorderLeftColor(this.elements.durchfuhrungsstellenTab(), color, shouldHave);
    return this;
  }

  checkEntscheidSendungenTabColor(color, shouldHave) {
    pageBase.checkElementBorderLeftColor(this.elements.entscheidSendungenTab(), color, shouldHave);
    return this;
  }

  checkVisierenTabColor(color, shouldHave) {
    pageBase.checkElementBorderLeftColor(this.elements.visierenTab(), color, shouldHave);
    return this;
  }
}

export default EntscheidSideMenu;
