import ModalWindow from "../../../standalone/popup/ModalWindow";
import EntscheidPageBase from "../EntscheidPageBase";

class EntscheidNueDialog extends EntscheidPageBase {
  constructor() {
    super(ModalWindow.css);
    this.modalWindow = new ModalWindow();
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }

}

export default EntscheidNueDialog;
