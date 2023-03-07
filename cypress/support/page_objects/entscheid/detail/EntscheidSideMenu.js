import FreitexteTab from "./tabs/FreitexteTab";
import HilflosigkeitTab from "./tabs/HilflosigkeitTab";
import PageBase from "../../../base/PageBase";
import EntscheidDetail from "./EntscheidDetail";
import constants from "../../../helpers/Constants";

class EntscheidSideMenu extends PageBase {
  constructor() {
    super();
    this.elements = {
      basisdatenTab          : () => cy.get(`${constants.cssActiveForm} [akid='EntscheidDetailBasisFrameTabbar-Basisdaten']`),
      durchfuhrungsstellenTab: () => cy.get(`${constants.cssActiveForm} [akid='EntscheidDetailBasisFrameTabbar-Durchführungsstellen']`),
      hilflosigkeitTab       : () => cy.get(`${constants.cssActiveForm} [akid='EntscheidDetailBasisFrameTabbar-Hilflosigkeit']`),
      freitexteTab           : () => cy.get(`${constants.cssActiveForm} [akid='EntscheidDetailBasisFrameTabbar-Freitexte']`),
      entscheidSendungenTab  : () => cy.get(`${constants.cssActiveForm} [akid='EntscheidDetailBasisFrameTabbar-Entscheid-Sendungen']`),
      diskutierenTab         : () => cy.get(`${constants.cssActiveForm} [akid='EntscheidDetailBasisFrameTabbar-Diskutieren']`)
    };
  }

  navigateToBasisdatenTab() {
    this.elements.basisdatenTab().should("be.visible").click();
    return new EntscheidDetail();
  }

  navigateToHilflosigkeitTab() {
    this.elements.hilflosigkeitTab().should("be.visible").click();
    return new HilflosigkeitTab();
  }

  navigateToDurchfuhrungsstellenTab() {
    this.elements.durchfuhrungsstellenTab().should("be.visible").click();
    return this;
  }

  navigateToEntscheidSendungenTab() {
    this.elements.entscheidSendungenTab().should("be.visible").click();
    return this;
  }

  checkEntscheidSendungenTabVisible(isVisible) {
    super.checkElementVisible(this.elements.entscheidSendungenTab(), isVisible);
    return this;
  }

  checkFreitexteTabVisible(isVisible) {
    super.checkElementVisible(this.elements.freitexteTab(), isVisible);
    return this;
  }

  checkDiskutierenTabVisible(isVisible) {
    super.checkElementVisible(this.elements.diskutierenTab(), isVisible);
    return this;
  }

  navigateToFreitexteTab() {
    this.elements.freitexteTab().should("be.visible").click();
    return new FreitexteTab();
  }

  checkBasisdatenTabColor(color, shouldHave) {
    super.checkElementColor(this.elements.basisdatenTab(), color, shouldHave);
    return this;
  }

  checkHilflosigkeitTabColor(color, shouldHave) {
    super.checkElementColor(this.elements.hilflosigkeitTab(), color, shouldHave);
    return this;
  }

  checkDurchfuhrungsstellenTabColor(color, shouldHave) {
    super.checkElementColor(this.elements.durchfuhrungsstellenTab(), color, shouldHave);
    return this;
  }
}

export default EntscheidSideMenu;
