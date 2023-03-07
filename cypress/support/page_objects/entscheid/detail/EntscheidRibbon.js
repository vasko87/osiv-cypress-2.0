import RibbonBase from "./../../../base/RibbonBase";
import BearbeitungEinleitenPopup from "../popup/BearbeitungEinleitenPopup";

class EntscheidRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      korrekturfunktionenBtn : () => this.elements.ribbonBlock().contains("Korrekturfunktionen"),
      bearbeitungEinleitenBtn : () => this.elements.ribbonBlock().contains("Bearbeitung einleiten")
    };

    this.korrekturfunktionenSubMenu =  {
      visumAufheben: "CancelVisieren",
      alleFreitexteLoschen: "DeleteAllVolltext",
      notizenEditieren: "EditNotizen",
      revisionAktivieren: "RevisionAktivieren",
      revisionReaktivieren: "RevisionReaktivieren",
      korrekturEntscheiddaten: "EntscheidKorrekturen",
      supertextEntscheidtypandern: "CorrectSupertext",
      vorbescheidErsetzen: "VorbescheidErsetzen",
      mitteilungAKKorrigieren: "MitteilungAKKorrigieren",
      verfugungKorrigieren: "VerfuegungKorrigieren",
      entscheidUngUltigMarkieren: "EntscheidUngueltigMarkieren",
      entscheidGultigMarkieren: "EntscheidGueltigMarkieren"
    }
  }

  clickKorrekturfunktionenBtn() {
    this.elements.korrekturfunktionenBtn().click();
    return this;
  }

  clickBearbeitungEinleitenBtn() {
    this.elements.bearbeitungEinleitenBtn().click();
    return new BearbeitungEinleitenPopup();
  }

  checkSupertextEntscheidtypandernMenuItemEnable(isEnabled){
    super.checkMenuItemEnable(this.korrekturfunktionenSubMenu.supertextEntscheidtypandern, isEnabled);
    return this;
  }
}
export default EntscheidRibbon;
