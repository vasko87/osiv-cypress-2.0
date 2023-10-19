import pageBase from "../../../../base/PageBase";
import GridBase from "../../../../base/GridBase";
import constants from "../../../../helpers/Constants";

class SendungskopieTab {
  constructor() {
    this.sendungskopieGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='SendungskopieEmpfaengerGrid']`);
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.sendungskopieGrid.waitGridWrapperLoaded();
    return this;
  }
}

export default SendungskopieTab;
