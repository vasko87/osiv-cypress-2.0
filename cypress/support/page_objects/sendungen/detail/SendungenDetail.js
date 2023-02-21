import SendungenRibbon from "./SendungenRibbon";
import SendungenAbschliessenPopup from "../popup/SendungenAbschliessenPopup";

class SendungenDetail {
  constructor() {
    this.ribbonMenu = new SendungenRibbon();
    this.sendungenAbschliessenPopup = new SendungenAbschliessenPopup();
    this.elements = {
    };
  }
}

export default SendungenDetail;
