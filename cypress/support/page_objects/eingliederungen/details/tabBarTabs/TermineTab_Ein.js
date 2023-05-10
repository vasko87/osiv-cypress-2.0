import constants from "../../../../helpers/Constants";
import TermineDetail from "../../../termine/details/TermineDetail";
import TermineGrid from "../../../termine/grid/TermineGrid";

class TermineTab_Ein {
  constructor() {
    this.grid = new TermineGrid(`${constants.CSS_ACTIVE_FORM} [akid='EingliederungDetailWindow']`);
    this.detail = new TermineDetail();
  }
}

export default TermineTab_Ein;
