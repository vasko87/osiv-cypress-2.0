import AdressenAddDialog from "./detail/popups/AdressenAddDialog";
import AdressenDetail from "./detail/AdressenDetail";
import AdressenGrid from "./grid/AdressenGrid";

class AdressenPageObject {
  constructor() {
    this.addDialog = new AdressenAddDialog();
    this.detail = new AdressenDetail();
    this.grid = new AdressenGrid();
  }
}

export default AdressenPageObject;
