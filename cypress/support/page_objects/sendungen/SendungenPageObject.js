import SendungenGrid from "./grid/SendungenGrid";
import SendungenDetail from "./detail/SendungenDetail";
import constants from "../../helpers/Constants"

class SendungenPageObject {
  constructor() {
    this.grid = new SendungenGrid(constants.cssOpacity);
    this.detail = new SendungenDetail();
  }
}

export default SendungenPageObject;
