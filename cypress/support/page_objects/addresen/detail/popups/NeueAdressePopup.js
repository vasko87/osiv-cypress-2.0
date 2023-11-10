import AdressenPageBase from "../../AdressenPageBase";
import ModalWindowBase from "../../../../standalone/popup/ModalWindowBase";

class NeueAdressePopup extends AdressenPageBase {
  constructor() {
    super(ModalWindowBase.css);
    this.modalWindow = new ModalWindowBase();
    super.elements = {
      ...this.elements,
      adresseDetailOverviewForm: () => this.modalWindow.elements.modalWindow().find("[akid='sAdresseDetailOverviewForm']")
    };
  }

  scrollToTop() {
    this.elements.adresseDetailOverviewForm().scrollTo("top");
    return this;
  }

  waitForLoaded() {
    this.modalWindow.waitForLoaded();
    return this;
  }

}

export default NeueAdressePopup;
