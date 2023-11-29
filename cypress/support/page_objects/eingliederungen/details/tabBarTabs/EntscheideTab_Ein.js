import constants from "../../../../helpers/Constants";
import EntscheidGrid from "../../../entscheid/grid/EntscheidGrid";
import EntscheidDetail from "../../../entscheid/detail/EntscheidDetail";
import pageBase from "../../../../base/PageBase";

class EntscheideTab_Ein {
  constructor() {
    this.grid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='EingliederungDetailWindow'],[akid='EntscheidEingliederungQueryGrid']`);
    this.detail = new EntscheidDetail();
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default EntscheideTab_Ein;
