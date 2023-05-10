import constants from "../../helpers/Constants";
import TermineGrid from "./grid/TermineGrid";
import TermineDetail from "./details/TermineDetail";

class TerminePageObject {
  constructor() {
    this.grid = new TermineGrid(`${constants.CSS_ACTIVE_FORM} [akid='eTerminQueryB']`);
    this.detail = new TermineDetail();
  }
}

export default TerminePageObject;
