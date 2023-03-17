import AdressenPageBase from "../AdressenPageBase";
import ModalWindowBase from "../../../standalone/popup/ModalWindowBase";

class AdressenAddDialog extends AdressenPageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }

}

export default AdressenAddDialog;
