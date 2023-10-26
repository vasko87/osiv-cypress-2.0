import pageBase from "../../../../base/PageBase";
import constants from "../../../../helpers/Constants";
import GridBase from "../../../../base/GridBase";

class DurchfuhrungsstellenTab_ENT {
  constructor() {
    this.durchfuehrungGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='DurchfuehrungQueryGrid']`);
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
  }
}

export default DurchfuhrungsstellenTab_ENT;
