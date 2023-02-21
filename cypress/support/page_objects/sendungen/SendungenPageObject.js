import SendungenGrid from "./grid/SendungenGrid";
import SendungenDetail from "./detail/SendungenDetail";

class SendungenPageObject {
  constructor() {
    this.grid = new SendungenGrid("[style*='opacity: 1']");
    this.detail = new SendungenDetail();
  }
}

export default SendungenPageObject;
