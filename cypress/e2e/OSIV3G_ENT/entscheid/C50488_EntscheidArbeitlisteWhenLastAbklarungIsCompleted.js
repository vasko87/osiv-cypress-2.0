import pages from "../../../support/base/OsivPageObject";
import flows from "../../../support/base/OsivFlowsObject";
import {c50488 as testData} from "../../../support/helpers/DataManager";
import pageBase from "../../../support/base/PageBase";

describe(`C50488: Entscheid arbeitliste when last Abklärung is completed; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50488`, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  [testData.scenario1, testData.scenario2].forEach((data) => {
    it(`Scenario ${data.scenarioNumber}: Open Gesuch 1 (${data.gesuchID})
    Open sendungens linked to Gesuch and Entscheid
    Close first Sendungen
    --> Verify: Entscheid AL is not changed (stays in Warten)
    Close second sendung
    --> Verify: Entscheid AL is set to ${data.arbeitslisteEntChanged}`, () => {
      pages.loginPage.openUrl();
      flows.gesuche.step_navigateGes_searchGes_openGes(data.gesuchID);
      pages.gesuche.detail.tabBar.navigateToEntscheideTab()
           .grid.waitGridViewLoaded()
           .checkGridRowCount(1)
           .dblClickRowNumber(1);
      pages.entscheid.detail.waitForLoaded();
      pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(data.arbeitslisteEntInitial);
      pages.groupedTaskbar.clickContainsGesuchTab();
      pageBase.waitForLoadingDisappears();
      pages.groupedTaskbar.closeContainsEntscheidTab();

      pages.gesuche.detail.tabBar.navigateToSendungenTab()
           .grid.waitGridViewLoaded()
           .dblClickRowNumber(1);
      pages.sendungen.detail.waitForLoaded();
      pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
      flows.modalPopup.clickOkBtn_CheckSuccessMsg();
      pages.sendungen.detail.waitForLoaded()
           .checkArbeitslisteTxt(data.arbeitslisteSendungenCompleted);

      pages.groupedTaskbar.clickContainsGesuchTab();
      pages.gesuche.detail.waitForLoaded();
      pages.gesuche.detail.tabBar.navigateToEntscheideTab()
           .grid.waitGridViewLoaded()
           .dblClickRowNumber(1);
      pages.entscheid.detail.waitForLoaded();
      pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(data.arbeitslisteEntInitial);

      pages.groupedTaskbar.clickContainsGesuchTab();
      pages.groupedTaskbar.closeContainsEntscheidTab();

      pages.gesuche.detail.tabBar.navigateToSendungenTab()
           .grid.waitGridViewLoaded()
           .dblClickRowWithText(data.arbeitslisteSendungenReceived);
      pages.sendungen.detail.waitForLoaded();
      pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
      flows.modalPopup.clickOkBtn_CheckSuccessMsg();
      pages.sendungen.detail.waitForLoaded()
           .checkArbeitslisteTxt(data.arbeitslisteSendungenCompleted);

      pages.groupedTaskbar.clickContainsGesuchTab();
      pages.gesuche.detail.tabBar.navigateToEntscheideTab()
           .grid.dblClickRowNumber(1);
      pages.entscheid.detail.waitForLoaded();
      pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(data.arbeitslisteEntChanged);
    });
  });

  it(`Scenario 3: Open POE list
  Select any item and VP:Zacharias Zwemmer in Versicherter dynselect (POE = 728 - For Zacharias Zwemmer (0395.5119.85))
  Select first abklarung sendung
  Assign and Close it
  --> Verify: Ent ID = 23194 is in Warten state
  In POE list select another item and VP:Zacharias Zwemmer (0395.5119.85) in Versicherter dynselect - (POE = 729 - For Zacharias Zwemmer (0395.5119.85))
  Select second abklarung sendung
  Assign and Close it
  --> Verify: Ent ID = 23194 is in Bearbeiten state`, () => {
    pages.loginPage.openUrl();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.scenario3.entID);
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario3.arbeitslisteEntInitial);
    pages.groupedTaskbar.closeContainsEntscheidTab();

    flows.posteingang.step_navigatePOE_searchByVPNr(testData.scenario3.vpNr);
    pages.posteingang.grid.checkGridRowCount(2)
         .clickRowNumber(1);
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.zuordnung.checkVersichertenNrDropdownContains(testData.scenario3.vpNr)
         .selectAbklarungDropdownByIndex(1)
         .clickZuordnenUndAbschliessen();
    flows.modalPopup.clickOkBtn_CheckSuccessMsg();
    pages.posteingang.grid.checkGridRowCount(1);

    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.scenario3.entID);
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario3.arbeitslisteEntInitial);
    pages.groupedTaskbar.closeContainsEntscheidTab();

    pages.nav.leftMenu.navigateToPosteingangTab();
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.grid.checkGridRowCount(1)
         .clickRowNumber(1);
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.zuordnung.checkVersichertenNrDropdownContains(testData.scenario3.vpNr)
         .selectAbklarungDropdownByIndex(1)
         .clickZuordnenUndAbschliessen();
    flows.modalPopup.clickOkBtn_CheckSuccessMsg();
    pages.posteingang.grid.checkGridRowCount(0);

    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.scenario3.entID);
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario3.arbeitslisteEntChanged);
  });

  it(`Scenario 4: Open VP Xalando Xaver
  Open Sendungen list
  Open Both sendungs and do Abklarung Einchecken for both sendungs (Basisdtaen>Korrekturfunctionen dynselect)
  Go to Sendung Desktop
  Perform sendung Abschlissen for both sendungs
  --> Verify: Ent ID = 39194 is in Bearbeiten state`, () => {
    pages.loginPage.openUrl();
    flows.versicherte.step_navigateVP_searchByVPName_openVP(testData.scenario4.versicherteName);

    pages.versicherte.detail.tabBar.navigateToEntscheideTab()
         .grid.waitGridViewLoaded()
         .dblClickRowNumber(1);
    pages.entscheid.detail.waitForLoaded();
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario4.arbeitslisteEntInitial);
    pages.entscheid.detail.windowHeader.clickCloseBtn();
    pages.versicherte.detail.tabBar.navigateToSendungenTab()
         .grid.waitGridViewLoaded()
         .checkGridRowCount(2)
         .dblClickRowNumber(1);
    pages.sendungen.detail.waitForLoaded();
    pages.sendungen.detail.ribbonMenu.clickKorrekturfunktionenBtn();
    pages.sendungen.detail.ribbonMenu.korrekturfunktionenSubMenu.clickAbklaerungEincheckenBtn();
    pages.confirmPopup.clickJaBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.sendungen.detail.waitForLoaded()
         .checkArbeitslisteTxt(testData.scenario4.arbeitslisteSendungenReceived);
    pages.sendungen.detail.windowHeader.clickCloseBtn();

    pages.groupedTaskbar.clickContainsVersichertendatenTab();
    pages.versicherte.detail.sendungenTabBar.grid.waitGridViewLoaded()
         .dblClickRowWithText(testData.scenario4.arbeitslisteSendungenOpen);
    pages.sendungen.detail.ribbonMenu.clickKorrekturfunktionenBtn();
    pages.sendungen.detail.ribbonMenu.korrekturfunktionenSubMenu.clickAbklaerungEincheckenBtn();
    pages.confirmPopup.clickJaBtn();
    pages.notification.checkSuccessMessageVisible();
    pages.sendungen.detail.waitForLoaded()
         .checkArbeitslisteTxt(testData.scenario4.arbeitslisteSendungenReceived);
    pages.sendungen.detail.windowHeader.clickCloseBtn();

    pages.groupedTaskbar.clickContainsVersichertendatenTab();
    pages.versicherte.detail.sendungenTabBar.grid.waitGridViewLoaded()
         .dblClickRowNumber(1);
    pages.sendungen.detail.waitForLoaded();
    pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
    flows.modalPopup.clickOkBtn_CheckSuccessMsg();
    pages.sendungen.detail.waitForLoaded()
         .checkArbeitslisteTxt(testData.scenario4.arbeitslisteSendungenCompleted);
    pages.sendungen.detail.windowHeader.clickCloseBtn();

    pages.groupedTaskbar.clickContainsVersichertendatenTab();
    pages.versicherte.detail.sendungenTabBar.grid.waitGridViewLoaded()
         .dblClickRowWithText(testData.scenario4.arbeitslisteSendungenReceived);
    pages.sendungen.detail.waitForLoaded();
    pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
    flows.modalPopup.clickOkBtn_CheckSuccessMsg();
    pages.sendungen.detail.waitForLoaded()
         .checkArbeitslisteTxt(testData.scenario4.arbeitslisteSendungenCompleted);
    pages.sendungen.detail.windowHeader.clickCloseBtn();

    pages.groupedTaskbar.clickContainsVersichertendatenTab();
    pages.versicherte.detail.tabBar.navigateToEntscheideTab()
         .grid.waitGridViewLoaded()
         .dblClickRowNumber(1);
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario4.arbeitslisteEntChanged);
  });

  it(`Scenario 5: Open POE list1499.9832.58
  Select any item and VP:Alessandra Gárcia in Versicherter dynselect - (POE- 730 - POE1 for Alessandra Gárcia (1499.9832.58)
  Select first abklarung sendung
  Assign and Close it
  --> Verify: Ent ID = 23198 is in Warten state

  In POE list select another item and VP:ZAlessandra Gárcia in Versicherter dynselect - ((POE- 731 - POE2 for Alessandra Gárcia (1499.9832.58))
  Select second abklarung sendung
  Assign and Close it
  --> Verify: Ent ID = 23198 is in Neu state`, () => {
    pages.loginPage.openUrl();
    flows.posteingang.step_navigatePOE_applyAllfilter_searchByVPNr(testData.scenario5.vpNr);
    pages.posteingang.grid.checkGridRowCount(2)
         .clickRowNumber(1);
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.zuordnung.checkVersichertenNrDropdownContains(testData.scenario5.vpNr)
         .selectAbklarungDropdownByIndex(1)
         .clickZuordnenUndAbschliessen();
    flows.modalPopup.clickOkBtn_CheckSuccessMsg();
    pages.posteingang.grid.checkGridRowCount(1);

    pages.nav.elements.homeBtn().click();
    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.scenario5.entID);
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario5.arbeitslisteEntInitial);
    pages.entscheid.detail.windowHeader.clickCloseBtn();

    flows.posteingang.step_navigatePOE_applyAllfilter_searchByVPNr(testData.scenario5.vpNr);
    pages.posteingang.grid.checkGridRowCount(1)
         .clickRowNumber(1);
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.zuordnung.checkVersichertenNrDropdownContains(testData.scenario5.vpNr)
         .selectAbklarungDropdownByIndex(1)
         .clickZuordnenUndAbschliessen();
    flows.modalPopup.clickOkBtn_CheckSuccessMsg();
    pages.posteingang.grid.checkGridRowCount(0);

    flows.entscheid.step_navigateEnt_searchEnt_openEnt(testData.scenario5.entID);
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario5.arbeitslisteEntChanged);
  });
});
