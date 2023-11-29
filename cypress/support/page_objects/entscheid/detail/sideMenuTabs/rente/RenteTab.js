import pageBase from "../../../../../base/PageBase";
import constants from "../../../../../helpers/Constants";
import GemischtePopup from "./popups/GemischtePopup";
import InvGradBerechnungenGrid from "./InvGradBerechnungenGrid";
import FruhinvaliditatPopup from "./popups/FruhinvaliditatPopup";
import EingliederungQuery from "../../../../../helpers/restMgrs/EingliederungQuery";
import EinkommensvergleichPopup from "./popups/EinkommensvergleichPopup";

class RenteTab {
  constructor() {
    this.gemischtePopup = new GemischtePopup();
    this.fruhinvaliditatPopup = new FruhinvaliditatPopup();
    this.einkommensvergleichPopup = new EinkommensvergleichPopup();
    this.grid = new InvGradBerechnungenGrid(`${constants.CSS_ACTIVE_FORM} [akid='Rente'] [akid='EntscheidInvGradBerechnungenGrid']`);
    this.elements = {
      renteForm: () => cy.get(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidRenteDetailForm']`),
      lohnInFrTxt: () => this.elements.renteForm().find("[akid$='ve_lohn']")
    };
  }

  setLohnInFr(value) {
    this.elements.lohnInFrTxt().should("be.visible").clear().type(value);
    return this;
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default RenteTab;
