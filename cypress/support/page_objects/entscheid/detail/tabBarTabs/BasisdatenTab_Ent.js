import EntscheidPageBase from "../../EntscheidPageBase";
import constants from "../../../../helpers/Constants";
import helpers from "../../../../helpers/HelperObject";
import ZustandigkeitenWechselnPopup from "../popups/ZustandigkeitenWechselnPopup";

class BasisdatenTab_Ent extends EntscheidPageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='EntscheidDetailBasisDatenForm']`;
    super(detailFormCSS);
    super.elements = {
      ...this.elements,
      detailForm    : () => cy.get(detailFormCSS),
      meldungtextBtn: () => cy.get(detailFormCSS).find("[akid$='EntscheidDetailBasisDatenForm-meldungtextbutton']")
    };
  }

  verifyValuesBulk(data) {
    if (data.arbeitslisteTxt) {
      this.checkArbeitslisteTxt(data.arbeitslisteTxt);
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

  clickMeldungtextBtn(){
    this.elements.meldungtextBtn().should("be.visible").click();
    return new ZustandigkeitenWechselnPopup();
  }
}

export default BasisdatenTab_Ent;
