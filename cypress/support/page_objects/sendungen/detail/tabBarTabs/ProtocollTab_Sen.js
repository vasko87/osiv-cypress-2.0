import constants from "../../../../helpers/Constants";
import pageBase from "../../../../base/PageBase";
import ProtocollGrid from "../../../protocoll/grid/ProtocollGrid";
import ProtocollDetail from "../../../protocoll/detail/ProtocollDetail";

class ProtocollTab_Sen {
  constructor() {
    this.grid = new ProtocollGrid(`${constants.CSS_ACTIVE_FORM} [akid='SendungDetailWindow'],[akid='ProtokollQueryGrid']`);
    this.detail = new ProtocollDetail();
  };

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default ProtocollTab_Sen;
