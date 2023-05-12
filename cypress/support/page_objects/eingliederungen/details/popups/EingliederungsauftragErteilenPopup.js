import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";
import EingliederungPageBase from "../../EingliederungPageBase";

class EingliederungsauftragErteilenPopup extends EingliederungPageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
    super.elements = {
      ...this.elements,
      createForm: () => this.modalWindow.elements.modalWindow().find("[akid='EingliederungsauftragCreateForm']")
    };
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    this.elements.createForm().should("be.visible");
    return this;
  }
}

export default EingliederungsauftragErteilenPopup;
