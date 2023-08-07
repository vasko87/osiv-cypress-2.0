import EntscheidDetail from "../page_objects/entscheid/detail/EntscheidDetail";
import VersicherteDetail from "../page_objects/versicherte/detail/VersicherteDetail";

class GroupedTaskbar {
  constructor() {
    this.elements = {
      groupedTaskbar         : () => cy.get("div[class='vue-taskbar-container']"),
      groupedTaskbarContainer: () => cy.get("[class='taskbar-contain']"),
      entscheidHEHETab       : () => this.elements.groupedTaskbar().find("[title='Entscheid HE HE']"),
      entscheidTab           : () => this.elements.groupedTaskbar().find("[title*='Entscheid']"),
      sendungenTab           : () => this.elements.groupedTaskbar().find("[title*='Sendungen']"),
      protokollTab           : () => this.elements.groupedTaskbar().find("[title*='Protokoll']"),
      eingliederungTab       : () => this.elements.groupedTaskbar().find("[title*='Eingliederung']"),
      gesuchTab              : () => this.elements.groupedTaskbar().find("[title*='Gesuch']"),
      versichertendatenTab   : () => this.elements.groupedTaskbar().find("[title*='Versichertendaten']"),
      groupСontentTab        : () => this.elements.groupedTaskbar().find("[class='vue-taskbar-group-content']")
    };
  }

  navigateToTabByTitle(title) {
    this.elements.groupedTaskbarContainer().find(`[title*='${title}']`).click();
  }

  closeGroupContentTab() {
    this.elements.groupСontentTab().find(".vue-close-icon").click();
    return this;
  }

  clickEntscheidHEHETab() {
    this.elements.entscheidHEHETab().click();
    return this;
  }

  clickContainsEntscheidTab() {
    this.elements.entscheidTab().click();
    return new EntscheidDetail();
  }

  closeContainsEntscheidTab() {
    this.elements.entscheidTab().parent("div[class*='vue-taskbar-item']").find(".vue-close-icon").click();
    return new EntscheidDetail();
  }

  closeContainsSendungenTab() {
    this.elements.sendungenTab().parent("div[class*='vue-taskbar-item']").find(".vue-close-icon").click();
    return new EntscheidDetail();
  }

  closeContainsProtokollTab() {
    this.elements.protokollTab().parent("div[class*='vue-taskbar-item']").find(".vue-close-icon").click();
    return this;
  }

  closeContainsVersichertendatenTab() {
    this.elements.versichertendatenTab().parent("div[class*='vue-taskbar-item']").find(".vue-close-icon").click();
    return this;
  }

  clickContainsGesuchTab() {
    this.elements.gesuchTab().click();
    return this;
  }

  clickContainsVersichertendatenTab() {
    this.elements.versichertendatenTab().click();
    return new VersicherteDetail();
  }

  clickContainsEingliederungTab() {
    this.elements.eingliederungTab().click();
    return this;
  }
}

export default GroupedTaskbar;
