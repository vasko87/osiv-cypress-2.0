import constants from "../../helpers/Constants";
import ProtocollGrid from "./grid/ProtocollGrid";
import ProtocollDetail from "./detail/ProtocollDetail";
import UrsprungAndernPopup from "./detail/popups/UrsprungAndernPopup";

class ProtocollPageObject {
  constructor() {
    this.grid = new ProtocollGrid(`${constants.CSS_OPACITY1} ${constants.CSS_ACTIVE_FORM} [akid='ProtokollQueryGrid']`);
    this.detail = new ProtocollDetail();
    this.ursprungAndernPopup = new UrsprungAndernPopup();
  }
}

export default ProtocollPageObject;
