import VersicherteGrid from "./grid/VersicherteGrid";
import VersicherteDetail from "./detail/VersicherteDetail";
import NeuerVersicherterPopup from "./detail/popups/NeuerVersicherterPopup";

class VersichertePageObject {
  constructor() {
    this.grid = new VersicherteGrid();
    this.detail = new VersicherteDetail();
    this.neuerVersicherterPopup = new NeuerVersicherterPopup();
  }
}

export default VersichertePageObject;
