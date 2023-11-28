import constants from "../../../../helpers/Constants";
import TermineDetail from "../../../termine/details/TermineDetail";
import TermineGrid from "../../../termine/grid/TermineGrid";
import pageBase from "../../../../base/PageBase";

class TermineTab_Ein {
  constructor() {
    this.grid = new TermineGrid(`${constants.CSS_ACTIVE_FORM} [akid='EingliederungDetailWindow'`);
    this.detail = new TermineDetail();
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    cy.wait(constants.MIN_TIMEOUT);
    return this;
  }
}

export default TermineTab_Ein;
