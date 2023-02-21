import AdressenAddDialog from "./popup/AdressenAddDialog";
import AdressenDetailPage from "./detail/AdressenDetailPage";
import AdressenGrid from "./grid/AdressenGrid";

class AdressenPageObject {
  constructor() {
    this.addDialog = new AdressenAddDialog();
    this.detail = new AdressenDetailPage();
    this.grid = new AdressenGrid();
  }
}

export default AdressenPageObject;
