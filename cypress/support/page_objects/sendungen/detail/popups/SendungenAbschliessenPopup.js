import SendungenCommonElements from "../../SendungenPageBase";
import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";

class SendungenAbschliessenPopup extends SendungenCommonElements {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }
}

export default SendungenAbschliessenPopup;
