import RibbonBase from "../../../base/RibbonBase";
import DruckUndVersandPopup from "./popups/DruckUndVersandPopup";
import SendungenAbschliessenPopup from "./popups/SendungenAbschliessenPopup";
import constants from "../../../helpers/Constants";

class EntscheidRibbon extends RibbonBase {
  constructor() {
    super();
    super.elements = {
      ...this.elements,
      abschliessenBtn       : () => this.elements.ribbonBlock().find("[title='Abschliessen']"),
      adressatOffnenBtn     : () => this.elements.ribbonBlock().find("[title='Adressat öffnen']"),
      variablenSpeichernBtn : () => this.elements.ribbonBlock().find("[title='Variablen speichern']"),
      druckVersandBtn       : () => this.elements.ribbonBlock().find("[title='Druck/Versand']"),
      korrekturfunktionenBtn: () => this.elements.ribbonBlock().contains("Korrekturfunktionen"),
      beilagenSpeichernBtn: () => this.elements.ribbonBlock().contains("Beilagen speichern"),
      beilagenAusgebenBtn: () => this.elements.ribbonBlock().contains("Beilagen ausgeben")
    };

    this.korrekturfunktionenSubMenu = {
      abklaerungAbbrechen            : () => this.elements.subMenu().get(`[id*='AbklaerungAbbrechen']`),
      abklaerungEinchecken           : () => this.elements.subMenu().get(`[id*='AbklaerungEinchecken']`),
      abschlussRueckgaengig          : () => this.elements.subMenu().get(`[id*='AbschlussRueckgaengig']`),
      dokumenteigenschaftenBearbeiten: () => this.elements.subMenu().get(`[id*='EditDokumenteigenschaften']`),
      eingangRueckgaengig            : () => this.elements.subMenu().get(`[id*='EingangRueckgaengig']`),
      versandKorrigiertWiederholen   : () => this.elements.subMenu().get(`[id*='VersandKorrigiertWiederholen']`),
      vertraulichkeitEntfernen       : () => this.elements.subMenu().get(`[id*='VertraulichkeitEntfernen']`),
      vertraulichkeitSetzen          : () => this.elements.subMenu().get(`[id*='VertraulichkeitSetzen']`),
      versandAnnullieren             : () => this.elements.subMenu().get(`[id*='VersandAnnullieren']`),
      notizenEditieren               : () => this.elements.subMenu().get(`[id*='SendungNotizenEdit']`),
      abklarungVollstandig           : () => this.elements.subMenu().get(`[id*='SendungAbklaerungVollstaendig']`),
      abklarungUnvollstandig         : () => this.elements.subMenu().get(`[id*='SendungAbklaerungUnvollstaendig']`),
      korrekturSendungsdaten         : () => this.elements.subMenu().get(`[id*='SendungKorrektur']`),

      clickAbklaerungEincheckenBtn() {
        this.abklaerungEinchecken().should("be.visible").click();
        return new SendungenAbschliessenPopup();
      }
    };
  }

  clickAbschliessenBtn() {
    cy.wait(constants.MIN_TIMEOUT * 2);
    this.elements.abschliessenBtn().should("be.visible").click();
    return new SendungenAbschliessenPopup();
  }

  clickAdressatOffnenBtn() {
    this.elements.adressatOffnenBtn().click();
    return this;
  }

  clickVariablenSpeichernBtn() {
    this.elements.variablenSpeichernBtn().click();
    return this;
  }

  clickDruckVersandBtn() {
    this.elements.druckVersandBtn().click();
    return new DruckUndVersandPopup();
  }

  clickKorrekturfunktionenBtn() {
    this.elements.korrekturfunktionenBtn().click();
    return new DruckUndVersandPopup();
  }

  clickBeilagenSpeichernBtn() {
    this.elements.beilagenSpeichernBtn().click();
    return this;
  }

  clickBeilagenAusgebenBtn() {
    this.elements.beilagenAusgebenBtn().click();
    return this;
  }
}

export default EntscheidRibbon;
