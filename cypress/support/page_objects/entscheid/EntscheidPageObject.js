import EntscheidGrid from "./grid/EntscheidGrid";
import EntscheidDetail from "./detail/EntscheidDetail";
import EntscheidNeuPopup from "./popup/EntscheidNeuPopup";
import BearbeitungEinleitenPopup from "./popup/BearbeitungEinleitenPopup";
import constants from "../../helpers/Constants";
import EntscheidInDenPapierkorbVerschiebenPopup from "./popup/EntscheidInDenPapierkorbVerschiebenPopup";

class EntscheidPageObject {
  constructor() {
    this.grid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidQueryGrid'],[akid='EntscheidGesuchQueryGrid']`);
    this.detail = new EntscheidDetail();
    this.neuPopup = new EntscheidNeuPopup();
    this.inDenPapierkorbPopup = new EntscheidInDenPapierkorbVerschiebenPopup();
    this.bearbeitungEinleitenPopup = new BearbeitungEinleitenPopup();
  }
}

export default EntscheidPageObject;
