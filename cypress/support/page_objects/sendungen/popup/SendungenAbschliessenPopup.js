import SendungenCommonElements from "../SendungenPageBase";
import ModalWindow from "../../../standalone/popup/ModalWindow";

class SendungenAbschliessenPopup extends SendungenCommonElements {
  constructor() {
    super(ModalWindow.css);
    this.modalWindow = new ModalWindow();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }
}

export default SendungenAbschliessenPopup;
