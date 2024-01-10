import VersicherteGrid from "./grid/VersicherteGrid";
import VersicherteDetail from "./detail/VersicherteDetail";
import NeuerVersicherterPopup from "./detail/popups/NeuerVersicherterPopup";
import AbgabeRegistrierenPopup from "./detail/popups/AbgabeRegistrierenPopup";
import DossierErhaltRegistrierenPopup from "./detail/popups/dossierChronikPopup/DossierErhaltRegistrierenPopup";
import DelegationAbschlussRegistrierenPopup
  from "./detail/popups/dossierChronikPopup/DelegationAbschlussRegistrierenPopup";
import ZASDatenAbfragenPopup from "./detail/popups/zasDatenAbfragenPopup/ZASDatenAbfragenPopup";
import NeueAdressverbindungPopup from "./detail/popups/NeueAdressverbindungPopup";
import EntscheidGrid from "../entscheid/grid/EntscheidGrid";
import constants from "../../helpers/Constants";

class VersichertePageObject {
  constructor() {
    this.grid = new VersicherteGrid();
    this.detail = new VersicherteDetail();
    this.neuerVersicherterPopup = new NeuerVersicherterPopup();
    this.zASDatenAbfragenPopup = new ZASDatenAbfragenPopup();
    this.abgabeRegistrierenPopup = new AbgabeRegistrierenPopup();
    this.dossierErhaltRegistrierenPopup = new DossierErhaltRegistrierenPopup();
    this.delegationAbschlussRegistrierenPopup = new DelegationAbschlussRegistrierenPopup();
    this.neueAdressverbindungPopup = new NeueAdressverbindungPopup();
    this.elements = {
      addNewBtn: () => cy.get("[akid='sStammQueryB-StammCreateDialog']")
    };
  }

  clickAddNewBtn() {
    this.elements.addNewBtn().click();
    return new NeuerVersicherterPopup();
  }
}

export default VersichertePageObject;
