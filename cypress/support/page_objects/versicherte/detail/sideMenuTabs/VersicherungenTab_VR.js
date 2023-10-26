import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";
import GridBase from "../../../../base/GridBase";

class VersicherungenTab_VR {
  constructor() {
    this.grid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='VersicherungGrid']`);
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.grid.waitGridWrapperLoaded();
    return this;
  }
}

export default VersicherungenTab_VR;
