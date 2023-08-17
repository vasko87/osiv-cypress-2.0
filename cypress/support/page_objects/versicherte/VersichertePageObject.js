import VersicherteGrid from "./grid/VersicherteGrid";
import VersicherteDetail from "./detail/VersicherteDetail";
import NeuerVersicherterPopup from "./detail/popups/NeuerVersicherterPopup";
import AbgabeRegistrierenPopup from "./detail/popups/AbgabeRegistrierenPopup";
import DossierErhaltRegistrierenPopup from "./detail/popups/dossierChronikPopup/DossierErhaltRegistrierenPopup";
import DelegationAbschlussRegistrierenPopup
  from "./detail/popups/dossierChronikPopup/DelegationAbschlussRegistrierenPopup";

class VersichertePageObject {
  constructor() {
    this.grid = new VersicherteGrid();
    this.detail = new VersicherteDetail();
    this.neuerVersicherterPopup = new NeuerVersicherterPopup();
    this.abgabeRegistrierenPopup = new AbgabeRegistrierenPopup();
    this.dossierErhaltRegistrierenPopup = new DossierErhaltRegistrierenPopup();
    this.delegationAbschlussRegistrierenPopup = new DelegationAbschlussRegistrierenPopup();
  }
}

export default VersichertePageObject;
