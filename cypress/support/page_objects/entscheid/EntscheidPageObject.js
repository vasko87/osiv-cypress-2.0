import EntscheidGrid from "./grid/EntscheidGrid";
import EntscheidDetail from "./detail/EntscheidDetail";
import EntscheidNeuPopup from "./popup/EntscheidNeuPopup";
import BearbeitungEinleitenPopup from "./popup/BearbeitungEinleitenPopup";

class EntscheidPageObject {
  constructor() {
    this.grid = new EntscheidGrid();
    this.detail = new EntscheidDetail();
    this.neuPopup = new EntscheidNeuPopup();
    this.bearbeitungEinleitenPopup = new BearbeitungEinleitenPopup();
  }
}

export default EntscheidPageObject;
