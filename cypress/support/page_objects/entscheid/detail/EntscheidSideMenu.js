import FreitexteTab from "./sideMenuTabs/FreitexteTab";
import HilflosigkeitTab from "./sideMenuTabs/HilflosigkeitTab";
import constants from "../../../helpers/Constants";
import pageBase from "../../../base/PageBase";
import VisierenTab from "./sideMenuTabs/VisierenTab";
import DurchfuhrungsstellenTab from "./sideMenuTabs/DurchfuhrungsstellenTab";
import VersicherungenTab from "./sideMenuTabs/VersicherungenTab";
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
    cy.log(`[ENT view]: Navigate to 'Basisdaten' side tab`);
    this.elements.basisdatenTab().should("be.visible").click();
    return new BasisdatenTab_Ent();
  }

  navigateToDurchfuhrungsstellenTab() {
    cy.log(`[ENT view]: Navigate to 'Durchfuhrungsstellen' side tab`);
    this.elements.durchfuhrungsstellenTab().should("be.visible").click();
    return new DurchfuhrungsstellenTab();
  }

  navigateToVersicherungTab() {
    cy.log(`[ENT view]: Navigate to 'Versicherung' side tab`);
    this.elements.versicherungTab().should("be.visible").click();
    return new VersicherungenTab();
  }

  navigateToFreitexteTab() {
    cy.log(`[ENT view]: Navigate to 'Freitexte' side tab`);
    this.elements.freitexteTab().should("be.visible").click();
    return new FreitexteTab();
  }

  navigateToHilflosigkeitTab() {
    cy.log(`[ENT view]: Navigate to 'Hilflosigkeit' side tab`);
    this.elements.hilflosigkeitTab().should("be.visible").click();
    return new HilflosigkeitTab();
  }

  navigateToEntscheidSendungenTab() {
    cy.log(`[ENT view]: Navigate to 'EntscheidSendungen' side tab`);
    this.elements.entscheidSendungenTab().should("be.visible").click();
    return this;
  }

  navigateToVisierenTab() {
    cy.log(`[ENT view]: Navigate to 'Visieren' side tab`);
    this.elements.visierenTab().should("be.visible").click();
    return new VisierenTab();
  }

  navigateToDiskutierenTab() {
    cy.log(`[ENT view]: Navigate to 'Diskutieren' side tab`);
    this.elements.diskutierenTab().should("be.visible").click();
    return new DiskutierenTab();
  }

  navigateToRenteTab() {
    cy.log(`[ENT view]: Navigate to 'Rente' side tab`);
    this.elements.renteTab().should("be.visible").click();
    return new RenteTab();
  }

  checkEntscheidSendungenTabVisible(isVisible) {
    cy.log(`[ENT view]: Check 'Sendungen' side tab is visible[${isVisible}]`);
    pageBase.checkElementVisible(this.elements.entscheidSendungenTab(), isVisible);
    return this;
  }

  checkFreitexteTabVisible(isVisible) {
    cy.log(`[ENT view]: Check 'Freitexte' side tab is visible[${isVisible}]`);
    pageBase.checkElementVisible(this.elements.freitexteTab(), isVisible);
    return this;
  }

  checkVisierenTabVisible(isVisible) {
    cy.log(`[ENT view]: Check 'Visieren' side tab is visible[${isVisible}]`);
    pageBase.checkElementVisible(this.elements.visierenTab(), isVisible);
    return this;
  }

  checkDiskutierenTabVisible(isVisible) {
    cy.log(`[ENT view]: Check 'Diskutieren' side tab is visible[${isVisible}]`);
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
