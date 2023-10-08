import constants from "../../../helpers/Constants";
import BeschwerdeGrid from "./grid/BeschwerdeGrid";
import BeschwerdeDetail from "./detail/BeschwerdeDetail";

class BeschwerdePageObject {
  constructor() {
    this.grid = new BeschwerdeGrid(`${constants.CSS_ACTIVE_FORM} [akid='BeschwerdeDesktopQueryGrid']`);
    this.detail = new BeschwerdeDetail();
  }
}

export default BeschwerdePageObject;
