import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";
import GridBase from "../../../../base/GridBase";

class AdressverbindungenTab {
  constructor() {
    this.adressverbindungGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='sAdressverbindungGrid']`);
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.adressverbindungGrid.waitGridWrapperLoaded();
    return this;
  }
}

export default AdressverbindungenTab;
