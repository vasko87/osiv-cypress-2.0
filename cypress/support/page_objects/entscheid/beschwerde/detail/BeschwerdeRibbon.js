import RibbonBase from "../../../../base/RibbonBase";
import NotizenPopup from "./popups/NotizenPopup";

class EntscheidRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      korrekturfunktionenBtn         : () => this.elements.ribbonBlock().contains("Korrekturfunktionen"),
    };

    const ribbonBase = this

    this.korrekturfunktionenSubMenu = {
      aufNeukorrigieren              : () => this.elements.subMenu().find("[id*='BeschwerdeUndoBearbeiten']"),
      AaufBearbeitenKorrigieren       : () => this.elements.subMenu().find("[id*='BeschwerdeUndoAbgeschlossen']"),
      notizenEditieren           : () => this.elements.subMenu().find("[id*='BeschwerdeNotizenEditieren']"),

      clickNotizenEditieren() {
        this.notizenEditieren().should("be.visible").click();
        return new NotizenPopup();
      },

      checkNotizenEditierenDisabled(isDisabled) {
        ribbonBase.checkMenuItemDisable(this.notizenEditieren(), isDisabled);
        return true;
      }
    };
  }

  clickKorrekturfunktionenBtn() {
    this.elements.korrekturfunktionenBtn().should("be.visible").click();
    return this;
  }
}

export default EntscheidRibbon;
