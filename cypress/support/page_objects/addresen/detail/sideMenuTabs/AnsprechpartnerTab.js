import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";
import GridBase from "../../../../base/GridBase";

class AnsprechpartnerTab {
  constructor() {
    this.adresseZuhandenGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='sAdresseZuhandenQueryGrid']`);
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.adresseZuhandenGrid.waitGridWrapperLoaded();
    return this;
  }
}

export default AnsprechpartnerTab;
