import SendungenGrid from "./grid/SendungenGrid";
import SendungenDetail from "./detail/SendungenDetail";
import constants from "../../helpers/Constants"
import DruckUndVersandPopup from "./popup/DruckUndVersandPopup";

class SendungenPageObject {
  constructor() {
    this.grid = new SendungenGrid(`${constants.CSS_OPACITY1}`);
    this.detail = new SendungenDetail();
    this.druckUndVersandPopup = new DruckUndVersandPopup();
  }
}

export default SendungenPageObject;
