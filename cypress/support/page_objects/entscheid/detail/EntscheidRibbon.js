import RibbonBase from "./../../../base/RibbonBase";
import BearbeitungEinleitenPopup from "../popup/BearbeitungEinleitenPopup";

class EntscheidRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      korrekturfunktionenBtn         : () => this.elements.ribbonBlock().contains("Korrekturfunktionen"),
      bearbeitungEinleitenBtn        : () => this.elements.ribbonBlock().contains("Bearbeitung einleiten"),
      begrundungSpeichernBtn         : () => this.elements.ribbonBlock().contains("Begründung speichern"),
      freitextGenerierenBtn          : () => this.elements.ribbonBlock().contains("Freitext generieren"),
      freitextSpeichernBtn           : () => this.elements.ribbonBlock().contains("Freitext speichern"),
      entscheidSendungenGenerierenBtn: () => this.elements.ribbonBlock().contains("Entscheid-Sendungen generieren"),
      entscheidSendungVerschickenBtn : () => this.elements.ribbonBlock().contains("Entscheid-Sendung verschicken"),
      visumSpeichernBtn              : () => this.elements.ribbonBlock().contains("Visum speichern"),
      kopierenBtn                    : () => this.elements.ribbonBlock().contains("Kopieren")
    };

    this.korrekturfunktionenSubMenu = {
      visumAufheben              : () => this.elements.subMenu().get("[id*='CancelVisieren']"),
      alleFreitexteLoschen       : () => this.elements.subMenu().get("[id*='DeleteAllVolltext']"),
      notizenEditieren           : () => this.elements.subMenu().get("[id*='EditNotizen']"),
      revisionAktivieren         : () => this.elements.subMenu().get("[id*='RevisionAktivieren']"),
      revisionReaktivieren       : () => this.elements.subMenu().get("[id*='RevisionReaktivieren']"),
      korrekturEntscheiddaten    : () => this.elements.subMenu().get("[id*='EntscheidKorrekturen']"),
      supertextEntscheidtypandern: () => this.elements.subMenu().get("[id*='CorrectSupertext']"),
      vorbescheidErsetzen        : () => this.elements.subMenu().get("[id*='VorbescheidErsetzen']"),
      mitteilungAKKorrigieren    : () => this.elements.subMenu().get("[id*='MitteilungAKKorrigieren']"),
      verfugungKorrigieren       : () => this.elements.subMenu().get("[id*='VerfuegungKorrigieren']"),
      entscheidUngUltigMarkieren : () => this.elements.subMenu().get("[id*='EntscheidUngueltigMarkieren']"),
      entscheidGultigMarkieren   : () => this.elements.subMenu().get("[id*='EntscheidGueltigMarkieren']")
    };
  }

  clickKorrekturfunktionenBtn() {
    this.elements.korrekturfunktionenBtn().click();
    return this;
  }

  clickBearbeitungEinleitenBtn() {
    this.elements.bearbeitungEinleitenBtn().click();
    return new BearbeitungEinleitenPopup();
  }

  clickBegrundungSpeichernBtn() {
    this.elements.begrundungSpeichernBtn().click();
    return this;
  }

  clickFreitextGenerierenBtn() {
    this.elements.freitextGenerierenBtn().click();
    return this;
  }

  clickFreitextSpeichernBtn() {
    this.elements.freitextSpeichernBtn().click();
    return this;
  }

  clickEntscheidSendungenGenerierenBtn() {
    this.elements.entscheidSendungenGenerierenBtn().click();
    return this;
  }

  clickEntscheidSendungVerschickenBtn() {
    this.elements.entscheidSendungVerschickenBtn().click();
    return this;
  }

  clickVisumSpeichernBtn() {
    this.elements.visumSpeichernBtn().click();
    return this;
  }

  clickKopierenBtn() {
    this.elements.kopierenBtn().click();
    return this;
  }

  checkSupertextEntscheidtypandernMenuItemEnable(isEnabled) {
    super.checkMenuItemEnable(this.korrekturfunktionenSubMenu.supertextEntscheidtypandern(), isEnabled);
    return this;
  }
}

export default EntscheidRibbon;
