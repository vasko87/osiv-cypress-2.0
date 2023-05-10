import constants from "../../helpers/Constants";
import EingliederungsauftragErteilenPopup from "./details/popups/EingliederungsauftragErteilenPopup";
import EingliederungDetail from "./details/EingliederungDetail";
import EingliederungGrid from "./grid/EingliederungGrid";

class EingliederungPageObject {
  constructor() {
    this.grid = new EingliederungGrid(`${constants.CSS_ACTIVE_FORM} [akid='EingliederungGrid']`);
    this.detail = new EingliederungDetail();
    this.neuPopup = new EingliederungsauftragErteilenPopup();
  }
}

export default EingliederungPageObject;
