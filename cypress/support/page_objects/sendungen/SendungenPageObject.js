import SendungenGrid from "./grid/SendungenGrid";
import SendungenDetail from "./detail/SendungenDetail";
import constants from "../../helpers/Constants"
import DruckUndVersandPopup from "./detail/popups/DruckUndVersandPopup";

class SendungenPageObject {
  constructor() {
    this.grid = new SendungenGrid(`${constants.CSS_OPACITY1} ${constants.CSS_ACTIVE_FORM} [akid='SendungQueryDesktopGrid']`);
    this.detail = new SendungenDetail();
    this.druckUndVersandPopup = new DruckUndVersandPopup();
  }
}

export default SendungenPageObject;
