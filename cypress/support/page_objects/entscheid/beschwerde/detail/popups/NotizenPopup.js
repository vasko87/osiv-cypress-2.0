import ModalWindowBase from "../../../../../standalone/popup/ModalWindowBase";
import pageBase from "../../../../../base/PageBase";

class NotizenPopup extends ModalWindowBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      beschwerdeNotizenEditierenForm: () => this.elements.modalWindow().find("[akid='BeschwerdeNotizenEditierenForm']"),
      notizenTxt: () => this.elements.modalWindow().find("[akid='BeschwerdeNotizenEditierenForm-bem'] textarea")
    };
  }

  waitForLoaded() {
    super.waitForLoaded();
    this.elements.beschwerdeNotizenEditierenForm().should("be.visible");
    return this;
  }

  checkPopupIsClosed() {
    this.elements.beschwerdeNotizenEditierenForm().should("not.be.visible");
    return this;
  }

  checkNotizenTxtVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.notizenTxt(), isVisible);
    return this;
  }

  setNotizenTxt(value) {
    this.elements.notizenTxt().should("be.visible").focus().clear().type(value);
    return this;
  }
}
export default NotizenPopup;
