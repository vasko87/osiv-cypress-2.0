import SendungenGrid from "./grid/SendungenGrid";
import SendungenDetail from "./detail/SendungenDetail";
import constants from "../../helpers/Constants"
import DruckUndVersandPopup from "./detail/popups/DruckUndVersandPopup";
import DossierAusgebenPopup from "./detail/popups/DossierAusgebenPopup";

class SendungenPageObject {
  constructor() {
    this.grid = new SendungenGrid(`${constants.CSS_OPACITY1} ${constants.CSS_ACTIVE_FORM} [akid='SendungQueryDesktopGrid']`);
    this.detail = new SendungenDetail();
    this.druckUndVersandPopup = new DruckUndVersandPopup();
    this.dossierAusgebenPopup = new DossierAusgebenPopup();
  }
}

export default SendungenPageObject;
