import VersicherteGrid from "./grid/VersicherteGrid";
import VersicherteDetail from "./detail/VersicherteDetail";
import NeuerVersicherterPopup from "./detail/popups/NeuerVersicherterPopup";
import AbgabeRegistrierenPopup from "./detail/popups/AbgabeRegistrierenPopup";

class VersichertePageObject {
  constructor() {
    this.grid = new VersicherteGrid();
    this.detail = new VersicherteDetail();
    this.neuerVersicherterPopup = new NeuerVersicherterPopup();
    this.abgabeRegistrierenPopup = new AbgabeRegistrierenPopup();
  }
}

export default VersichertePageObject;
