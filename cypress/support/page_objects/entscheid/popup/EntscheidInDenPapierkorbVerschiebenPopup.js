import ModalWindowBase from "../../../standalone/popup/ModalWindowBase";
import EntscheidPageBase from "../EntscheidPageBase";
import pageBase from "../../../base/PageBase";

class EntscheidInDenPapierkorbVerschiebenPopup extends ModalWindowBase {

  constructor() {
    super();
    super.elements = {
      ...this.elements,
      loschgrundDropdown: () => this.elements.modalWindow().find("[akid='EntscheidInPapierkorbForm-loschgrund']")
    };
  }

  waitForLoaded() {
    this.elements.loschgrundDropdown().should("be.visible");
    return this;
  }

  selectLoschgrundDropdownByIndex(index) {
    pageBase.selectDropdownValueByIndex(this.elements.loschgrundDropdown(), index);
    return this;
  }

  selectLoschgrundDropdown(value) {
    pageBase.selectInDropdownContains(this.elements.loschgrundDropdown(), value);
    return this;
  }

}

export default EntscheidInDenPapierkorbVerschiebenPopup;
