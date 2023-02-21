import AdressenPageBase from "../AdressenPageBase";
import ModalWindow from "../../../standalone/popup/ModalWindow";

class AdressenAddDialog extends AdressenPageBase {
  constructor() {
    super(ModalWindow.css);
    this.modalWindow = new ModalWindow();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }

}

export default AdressenAddDialog;
