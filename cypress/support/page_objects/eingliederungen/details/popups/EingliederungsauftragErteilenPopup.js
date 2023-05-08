import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import EingliederungPageBase from "../../EingliederungPageBase";

class EingliederungsauftragErteilenPopup extends EingliederungPageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }
}

export default EingliederungsauftragErteilenPopup;
