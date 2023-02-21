import RibbonBase from "./../../../base/RibbonBase";

class EntscheidRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      korrekturfunktionenBtn : () => this.elements.ribbonBlock().contains("Korrekturfunktionen")
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

  checkSupertextEntscheidtypandernMenuItemEnable(isEnabled){
    super.checkMenuItemEnable(this.korrekturfunktionenSubMenu.supertextEntscheidtypandern, isEnabled);
    return this;
  }
}
export default EntscheidRibbon;
