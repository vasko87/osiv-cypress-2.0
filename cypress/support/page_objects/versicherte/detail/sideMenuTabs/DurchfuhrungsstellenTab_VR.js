import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";
import GridBase from "../../../../base/GridBase";

class DurchfuhrungsstellenTab_VR {
  constructor() {
    this.grid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='DurchfuehrungQueryGrid']`);
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.grid.waitGridWrapperLoaded();
    return this;
  }
}

export default DurchfuhrungsstellenTab_VR;
