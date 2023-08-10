import ModalWindowBase from "../../../../../standalone/popup/ModalWindowBase";
import GridBase from "../../../../../base/GridBase";
import constants from "../../../../../helpers/Constants";
class IvStellenWahlenPopup extends ModalWindowBase {
  constructor() {
    super();
    this.sIVStelleGrid = new GridBase(`${constants.CSS_ACTIVE_FORM} [akid='sIVStelleGrid']`);
    super.elements = {
      ...this.elements
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    return this;
  }

}

export default IvStellenWahlenPopup;
