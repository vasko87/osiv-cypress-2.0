import pageBase from "../../../../../base/PageBase";
import RentePageBase from "./RentePageBase";
import constants from "../../../../../helpers/Constants";
import GemischteCreatePopup from "./GemischteCreatePopup";

class RenteTab extends RentePageBase {
  constructor() {
    const renteFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='EntscheidRenteDetailForm']`;
    super(renteFormCSS);
    this.gemischteCreatePopup = new GemischteCreatePopup();
    this.elements = {
      renteForm: () => cy.get(renteFormCSS)
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
