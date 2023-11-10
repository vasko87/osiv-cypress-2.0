import NeueAdressePopup from "./detail/popups/NeueAdressePopup";
import AdressenDetail from "./detail/AdressenDetail";
import AdressenGrid from "./grid/AdressenGrid";
import constants from "../../helpers/Constants";

class AdressenPageObject {
  constructor() {
    this.neueAdressePopup = new NeueAdressePopup();
    this.detail = new AdressenDetail();
    this.grid = new AdressenGrid(`${constants.CSS_ACTIVE_FORM} [akid='AdresseQueryGrid']`);
  }
}

export default AdressenPageObject;
