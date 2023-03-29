import EntscheidGrid from "./grid/EntscheidGrid";
import EntscheidDetail from "./detail/EntscheidDetail";
import EntscheidNeuPopup from "./popup/EntscheidNeuPopup";
import BearbeitungEinleitenPopup from "./popup/BearbeitungEinleitenPopup";
import constants from "../../helpers/Constants";

class EntscheidPageObject {
  constructor() {
    this.grid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidQueryGrid'],[akid='EntscheidGesuchQueryGrid']`);
    this.detail = new EntscheidDetail();
    this.neuPopup = new EntscheidNeuPopup();
    this.bearbeitungEinleitenPopup = new BearbeitungEinleitenPopup();
  }
}

export default EntscheidPageObject;
