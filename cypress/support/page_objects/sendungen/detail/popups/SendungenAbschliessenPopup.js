import SendungenCommonElements from "../../SendungenPageBase";
import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../base/PageBase";

class SendungenAbschliessenPopup extends SendungenCommonElements {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default SendungenAbschliessenPopup;
