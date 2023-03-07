import EntscheidPageBase from "../EntscheidPageBase";
import EntscheidSideMenu from "./EntscheidSideMenu";
import HilflosigkeitTab from "./tabs/HilflosigkeitTab";
import EntscheidRibbon from "./EntscheidRibbon";
import EntscheidTabBar from "./EntscheidTabBar";
import SendungenGrid from "../../sendungen/grid/SendungenGrid";
import FreitexteTab from "./tabs/FreitexteTab";
import helpers from "../../../helpers/HelperObject";
import constants from "../../../helpers/Constants";

class EntscheidDetail extends EntscheidPageBase {
  constructor() {
    const detailFormCSS = `${constants.cssActiveForm} [akid='EntscheidDetailBasisDatenForm']`;
    super(detailFormCSS);
    this.sideMenu = new EntscheidSideMenu();
    this.tabBar = new EntscheidTabBar();
    this.ribbonMenu = new EntscheidRibbon();
    this.hilflosigkeitTab = new HilflosigkeitTab();
    this.freitexteTab = new FreitexteTab();
    this.sendungenGrid = new SendungenGrid(`${constants.cssActiveForm} [akid='EntscheidDetailWindow']`);
    super.elements = {
      ...this.elements,
      detailForm: () => cy.get(`${constants.cssActiveForm} [akid='EntscheidDetailBasisDatenForm']`)
    };
  }

  waitForLoaded() {
    this.elements.detailForm().should("be.visible", 10000);
  }

  verifyValuesBulk(data) {
    if (data.arbeitslistevalueTxt) {
      this.checkArbeitslistevalueTxt(data.arbeitslistevalueTxt);
    }
    if (data.bearbeiterDropdown === "username") {
      this.checkBearbeiterDropdownReadonlyValue(Cypress.env("username"));
    } else if (data.bearbeiterDropdown) {
      this.checkBearbeiterDropdownReadonlyValue(data.bearbeiterDropdown);
    }
    if (data.leistungsgruppeDropdown) {
      this.checkLeistungsgruppeDropdown(data.leistungsgruppeDropdown);
    }
    if (data.leistungscodeDropdown) {
      this.checkLeistungscodeDropdown(data.leistungscodeDropdown);
    }
    if (data.entscheidDropdown) {
      this.checkEntscheidDropdown(data.entscheidDropdown);
    }
    if (data.supertextDropdown) {
      this.checkSupertextDropdown(data.supertextDropdown);
    }
    if (data.gesuchDropdown) {
      this.checkGesuchDropdown(data.gesuchDropdown);
    }
    if (data.ereignisDropdown) {
      this.checkEreignisDropdown(data.ereignisDropdown);
    }
    if (data.bereichDropdown) {
      this.checkBereichDropdown(data.bereichDropdown);
    }
    return this;
  }

  fillInFieldsBulk(data) {
    if (data.leistungsgruppeDropdown) {
      this.checkLeistungsgruppeDropdown(data.leistungsgruppeDropdown());
    }
    if (data.leistungscodeDropdown) {
      this.checkLeistungscodeDropdown(data.leistungscodeDropdown);
    }
    if (data.entscheidDropdown) {
      this.selectEntscheidDropdown(data.entscheidDropdown);
    }
    if (data.supertextDropdown) {
      this.selectSupertextDropdown(data.supertextDropdown);
    }
    if (data.entscheidtypDropdown) {
      this.selectEntscheidtypDropdown(data.entscheidtypDropdown);
    }
    if (data.gebrechenDropdown) {
      this.selectGebrechenDropdown(data.gebrechenDropdown);
    }
    if (data.funktausfallDropdown) {
      this.selectFunktausfallDropdown(data.funktausfallDropdown);
    }
    if (data.beginnDate === "today") {
      this.setBeginnDate(helpers.date.getCurrentDate());
    }
    return this;
  }

}

export default EntscheidDetail;
