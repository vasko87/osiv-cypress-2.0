import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";
import GridBase from "../../../../base/GridBase";

class VersicherungenTab_ENT {
  constructor() {
    this.versicherungGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='VersicherungGrid']`);
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.versicherungGrid.waitGridViewLoaded();
  }
}

export default VersicherungenTab_ENT;
