import AdressenAddDialog from "./detail/popups/AdressenAddDialog";
import AdressenDetail from "./detail/AdressenDetail";
import AdressenGrid from "./grid/AdressenGrid";
import constants from "../../helpers/Constants";

class AdressenPageObject {
  constructor() {
    this.addDialog = new AdressenAddDialog();
    this.detail = new AdressenDetail();
    this.grid = new AdressenGrid(`${constants.CSS_ACTIVE_FORM} [akid='AdresseQueryGrid']`);
  }
}

export default AdressenPageObject;
