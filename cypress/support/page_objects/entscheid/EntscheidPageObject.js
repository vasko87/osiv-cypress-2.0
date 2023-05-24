import EntscheidGrid from "./grid/EntscheidGrid";
import EntscheidDetail from "./detail/EntscheidDetail";
import EntscheidNeuPopup from "./detail/popups/EntscheidNeuPopup";
import BearbeitungEinleitenPopup from "./detail/popups/BearbeitungEinleitenPopup";
import constants from "../../helpers/Constants";
import EntscheidInDenPapierkorbVerschiebenPopup from "./detail/popups/EntscheidInDenPapierkorbVerschiebenPopup";
import ZustandigkeitenWechselnPopup from "./detail/popups/ZustandigkeitenWechselnPopup";
import SupertextFreidefinierbareVariablenPopup from "./detail/popups/SupertextFreidefinierbareVariablenPopup";

class EntscheidPageObject {
  constructor() {
    this.grid = new EntscheidGrid(`${constants.CSS_ACTIVE_FORM} [akid='EntscheidQueryGrid'],[akid='EntscheidGesuchQueryGrid']`);
    this.detail = new EntscheidDetail();
    this.neuPopup = new EntscheidNeuPopup();
    this.inDenPapierkorbPopup = new EntscheidInDenPapierkorbVerschiebenPopup();
    this.bearbeitungEinleitenPopup = new BearbeitungEinleitenPopup();
    this.zustandigkeitenWechselnPopup = new ZustandigkeitenWechselnPopup();
    this.supertextFreidefinierbareVariablenPopup = new SupertextFreidefinierbareVariablenPopup();
  }
}

export default EntscheidPageObject;
