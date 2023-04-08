import RibbonBase from "./../../../base/RibbonBase";
import BearbeitungEinleitenPopup from "../popup/BearbeitungEinleitenPopup";
import pageBase from "../../../base/PageBase";

class EntscheidRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      inDenPapierkorbBtn : () => this.elements.ribbonBlock().find("[title='In den Papierkorb']"),
      wiederherstellenBtn: () => this.elements.ribbonBlock().find("[title='Wiederherstellen']"),

      korrekturfunktionenBtn         : () => this.elements.ribbonBlock().find("[title='Korrekturfunktionen']"),
      bearbeitungEinleitenBtn        : () => this.elements.ribbonBlock().find("[title='Bearbeitung einleiten']"),
      begrundungSpeichernBtn         : () => this.elements.ribbonBlock().find("[title='Begründung speichern']"),
      freitextGenerierenBtn          : () => this.elements.ribbonBlock().find("[title='Freitext generieren']"),
      freitextSpeichernBtn           : () => this.elements.ribbonBlock().find("[title='Freitext speichern']"),
      entscheidSendungenGenerierenBtn: () => this.elements.ribbonBlock().find("[title='Entscheid-Sendungen generieren']"),
      entscheidSendungVerschickenBtn : () => this.elements.ribbonBlock().find("[title='Entscheid-Sendung verschicken']"),
      visumSpeichernBtn              : () => this.elements.ribbonBlock().find("[title='Visum speichern']"),
      kopierenBtn                    : () => this.elements.ribbonBlock().find("[title='Kopieren']"),

      //Entscheid Hilflosigkeit spezifische Funktionen block
      grenzgradAb30TBtn      : () => this.elements.ribbonBlock().find("[title='Grenzgrad ab 30T']"),
      wartefristBearbeitenBtn: () => this.elements.ribbonBlock().find("[title='Wartefrist Bearbeiten']"),
      hEGradBearbeitenBtn: () => this.elements.ribbonBlock().find("[title='HE-Grad bearbeiten']"),

      //Allgemeine Funktionen block
      vPOffnenBtn: () => this.elements.ribbonBlock().find("[title='vP öffnen']"),
      bearbeiterMeldungBtn: () => this.elements.ribbonBlock().find("[title='Bearbeiter & Meldung']"),
      dossierExternOffnenBtn: () => this.elements.ribbonBlock().find("[title='Dossier extern öffnen']"),
      dossierDokExternOffnenBtn: () => this.elements.ribbonBlock().find("[title='Dossier & Dok. extern öffnen']"),

      diskussionStartenBtn: () => this.elements.ribbonBlock().find("[title='Diskussion starten']"),
      diskussionBeendenBtn: () => this.elements.ribbonBlock().find("[title='Diskussion beenden']")
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

  clickInDenPapierkorbBtn() {
    this.elements.inDenPapierkorbBtn().should("be.visible").click();
    return this;
  }

  checkInDenPapierkorbBtnVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.inDenPapierkorbBtn(), isVisible);
    return this;
  }

  clickWiederherstellenBtn() {
    this.elements.wiederherstellenBtn().should("be.visible").click();
    return this;
  }

  checkWiederherstellenBtnVisible(isVisible) {
    pageBase.checkElementVisible(this.elements.wiederherstellenBtn(), isVisible);
    return this;
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
    super.checkMenuItemDisable(this.korrekturfunktionenSubMenu.supertextEntscheidtypandern(), isEnabled);
    return this;
  }

  clickGrenzgradAb30TBtn() {
    this.elements.grenzgradAb30TBtn().click();
    return this;
  }

  checkGrenzgradAb30TBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.grenzgradAb30TBtn(), isDisabled);
    return this;
  }

  clickWartefristBearbeitenBtnBtn() {
    this.elements.wartefristBearbeitenBtn().click();
    return this;
  }

  checkWartefristBearbeitenBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.wartefristBearbeitenBtn(), isDisabled);
    return this;
  }

  clickHEGradBearbeitenBtn() {
    this.elements.hEGradBearbeitenBtn().click();
    return this;
  }

  checkHEGradBearbeitenBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.hEGradBearbeitenBtn(), isDisabled);
    return this;
  }

  clickVPOffnenBtn() {
    this.elements.vPOffnenBtn().click();
    return this;
  }

  checkVPOffnenBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.vPOffnenBtn(), isDisabled);
    return this;
  }

  clickBearbeiterMeldungBtn() {
    this.elements.bearbeiterMeldungBtn().click();
    return this;
  }

  checkBearbeiterMeldungBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.bearbeiterMeldungBtn(), isDisabled);
    return this;
  }

  clickDossierExternOffnenBtn() {
    this.elements.dossierExternOffnenBtn().click();
    return this;
  }

  checkDossierExternOffnenBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.dossierExternOffnenBtn(), isDisabled);
    return this;
  }

  clickDossierDokExternOffnenBtn() {
    this.elements.dossierDokExternOffnenBtn().click();
    return this;
  }

  checkDossierDokExternOffnenBtnDisabled(isDisabled) {
    super.checkMenuItemDisable(this.elements.dossierDokExternOffnenBtn(), isDisabled);
    return this;
  }

  clickDiskussionStartenBtn() {
    this.elements.diskussionStartenBtn().click();
    return this;
  }

  clickDiskussionBeendenBtn() {
    this.elements.diskussionBeendenBtn().click();
    return this;
  }
}

export default EntscheidRibbon;
