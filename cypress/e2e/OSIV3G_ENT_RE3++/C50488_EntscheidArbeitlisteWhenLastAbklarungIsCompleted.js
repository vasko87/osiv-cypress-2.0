import pages from "../../support/base/OsivPageObject";
import {c50488 as testData} from "../../support/helpers/DataManager";
import ModalPopupFlows from "../../support/flows/ModalPopupFlows";
import pageBase from "../../support/base/PageBase";

describe(`C50488: Entscheid arbeitliste when last Abklärung is completed; 
  TestRail:https://osiv.testrail.net/index.php?/cases/view/50488`, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  // [testData.scenario1, testData.scenario2].forEach((data) => {
  //   it(`Scenario ${data.scenarioNumber}: Open Gesuch 1 (${data.gesuchID})
  //   Open sendungens linked to Gesuch and Entscheid
  //   Close first Sendungen
  //   --> Verify: Entscheid AL is not changed (stays in Warten)
  //   Close second sendung
  //   --> Verify: Entscheid AL is set to ${data.arbeitslisteEntChanged}`, () => {
  //     pages.loginPage.openUrl();
  //     pages.nav.leftMenu.navigateToGesucheTab();
  //     pages.gesuche.grid.searchAndOpenGesuchID(data.gesuchID);
  //     pages.gesuche.detail.waitForLoaded();
  //     pages.gesuche.detail.tabBar.navigateToEntscheideTab()
  //          .checkGridRowCount(1)
  //          .dblClickRowNumber(1);
  //     pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(data.arbeitslisteEntInitial);
  //     pages.groupedTaskbar.clickContainsGesuchTab();
  //     pages.groupedTaskbar.closeContainsEntscheidTab();
  //
  //     pages.gesuche.detail.tabBar.navigateToSendungenTab()
  //          .waitGridViewLoaded()
  //          .dblClickRowNumber(1);
  //     pages.waitForLoadingDisappears();
  //     pages.sendungen.detail.waitForLoaded();
  //     pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
  //     ModalPopupFlows.clickOkBtn_CheckSuccessMsg();
  //     pages.sendungen.detail.waitForLoaded()
  //          .checkArbeitslisteTxt(data.arbeitslisteSendungenCompleted);
  //
  //     pages.groupedTaskbar.clickContainsGesuchTab();
  //     pages.gesuche.detail.tabBar.navigateToEntscheideTab()
  //          .dblClickRowNumber(1);
  //     pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(data.arbeitslisteEntInitial);
  //
  //     pages.groupedTaskbar.clickContainsGesuchTab();
  //     pages.groupedTaskbar.closeContainsEntscheidTab();
  //
  //     pages.gesuche.detail.tabBar.navigateToSendungenTab()
  //          .dblClickRowWithText(data.arbeitslisteSendungenReceived);
  //     pages.waitForLoadingDisappears();
  //     pages.sendungen.detail.waitForLoaded();
  //     pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
  //     ModalPopupFlows.clickOkBtn_CheckSuccessMsg();
  //     pages.sendungen.detail.waitForLoaded()
  //          .checkArbeitslisteTxt(data.arbeitslisteSendungenCompleted);
  //
  //     pages.groupedTaskbar.clickContainsGesuchTab();
  //     pages.gesuche.detail.tabBar.navigateToEntscheideTab()
  //          .dblClickRowNumber(1);
  //     pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(data.arbeitslisteEntChanged);
  //   });
  // });
  //
  // it(`Scenario 3: Open POE list
  // Select any item and VP:Zacharias Zwemmer in Versicherter dynselect (POE = 728 - For Zacharias Zwemmer (0395.5119.85))
  // Select first abklarung sendung
  // Assign and Close it
  // --> Verify: Ent ID = 23194 is in Warten state
  // In POE list select another item and VP:Zacharias Zwemmer (0395.5119.85) in Versicherter dynselect - (POE = 729 - For Zacharias Zwemmer (0395.5119.85))
  // Select second abklarung sendung
  // Assign and Close it
  // --> Verify: Ent ID = 23194 is in Bearbeiten state`, () => {
  //   pages.loginPage.openUrl();
  //   pages.nav.leftMenu.navigateToEntscheidTab();
  //   pages.entscheid.grid.searchAndOpenEntscheidID(testData.scenario3.entID);
  //   pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario3.arbeitslisteEntInitial);
  //   pages.groupedTaskbar.closeContainsEntscheidTab();
  //
  //   pages.nav.leftMenu.navigateToPosteingangTab();
  //   pages.virtualViewer.waitVirtualViewerLoaded();
  //   pages.posteingang.grid.filter.searchVersichertenNrTxt(testData.scenario3.vpNr);
  //   pages.posteingang.grid.checkGridRowCount(2)
  //        .clickRowNumber(1);
  //   pages.waitForLoadingDisappears();
  //   pages.virtualViewer.waitVirtualViewerLoaded();
  //   pages.waitForLoadingDisappears();
  //   pages.posteingang.zuordnung.checkVersichertenNrDropdownContains(testData.scenario3.vpNr)
  //        .selectAbklarungDropdownByIndex(1)
  //        .clickZuordnenUndAbschliessen();
  //   ModalPopupFlows.clickOkBtn_CheckSuccessMsg();
  //   pages.posteingang.grid.checkGridRowCount(1);
  //
  //   pages.nav.leftMenu.navigateToEntscheidTab();
  //   pages.entscheid.grid.searchAndOpenEntscheidID(testData.scenario3.entID);
  //   pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario3.arbeitslisteEntInitial);
  //   pages.groupedTaskbar.closeContainsEntscheidTab();
  //
  //   pages.nav.leftMenu.navigateToPosteingangTab();
  //   pages.virtualViewer.waitVirtualViewerLoaded();
  //   pages.posteingang.grid.checkGridRowCount(1)
  //        .clickRowNumber(1);
  //   pages.waitForLoadingDisappears();
  //   pages.virtualViewer.waitVirtualViewerLoaded();
  //   pages.waitForLoadingDisappears();
  //   pages.posteingang.zuordnung.checkVersichertenNrDropdownContains(testData.scenario3.vpNr)
  //        .selectAbklarungDropdownByIndex(1)
  //        .clickZuordnenUndAbschliessen();
  //   ModalPopupFlows.clickOkBtn_CheckSuccessMsg();
  //   pages.posteingang.grid.checkGridRowCount(0);
  //
  //   pages.nav.leftMenu.navigateToEntscheidTab();
  //   pages.entscheid.grid.searchAndOpenEntscheidID(testData.scenario3.entID);
  //   pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario3.arbeitslisteEntChanged);
  // });
  //
  // it(`Scenario 4: Open VP Xalando Xaver
  // Open Sendungen list
  // Open Both sendungs and do Abklarung Einchecken for both sendungs (Basisdtaen>Korrekturfunctionen dynselect)
  // Go to Sendung Desktop
  // Perform sendung Abschlissen for both sendungs
  // --> Verify: Ent ID = 39194 is in Bearbeiten state`, () => {
  //   pages.loginPage.openUrl();
  //   pages.nav.leftMenu.navigateToVersicherteTab();
  //   pages.versicherte.grid.searchAndOpenVersicherteName(testData.scenario4.versicherteName);
  //
  //   pages.versicherte.detail.tabBar.navigateToEntscheideTab()
  //        .grid.waitGridViewLoaded()
  //        .dblClickRowNumber(1);
  //   pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario4.arbeitslisteEntInitial);
  //   pageBase.waitForLoadingDisappears();
  //   pages.entscheid.detail.windowHeader.clickCloseBtn();
  //   pages.versicherte.detail.tabBar.navigateToSendungenTab()
  //        .grid.waitGridViewLoaded()
  //        .checkGridRowCount(2)
  //        .dblClickRowNumber(1);
  //   pages.sendungen.detail.waitForLoaded();
  //   pages.sendungen.detail.ribbonMenu.clickKorrekturfunktionenBtn();
  //   pages.sendungen.detail.ribbonMenu.korrekturfunktionenSubMenu.abklaerungEinchecken().click();
  //   pages.confirmPopup.clickJaBtn();
  //   pages.notification.checkSuccessMessageVisible();
  //   pages.sendungen.detail.waitForLoaded()
  //        .checkArbeitslisteTxt(testData.scenario4.arbeitslisteSendungenReceived);
  //   pages.sendungen.detail.windowHeader.clickCloseBtn();
  //
  //   pages.groupedTaskbar.clickContainsVersichertendatenTab();
  //   pages.versicherte.detail.sendungenTabBar.grid.dblClickRowWithText(testData.scenario4.arbeitslisteSendungenOpen);
  //   pages.sendungen.detail.ribbonMenu.clickKorrekturfunktionenBtn();
  //   pages.sendungen.detail.ribbonMenu.korrekturfunktionenSubMenu.abklaerungEinchecken().click();
  //   pages.confirmPopup.clickJaBtn();
  //   pages.notification.checkSuccessMessageVisible();
  //   pages.sendungen.detail.waitForLoaded()
  //        .checkArbeitslisteTxt(testData.scenario4.arbeitslisteSendungenReceived);
  //   pages.sendungen.detail.windowHeader.clickCloseBtn();
  //
  //   pages.groupedTaskbar.clickContainsVersichertendatenTab();
  //   pages.versicherte.detail.sendungenTabBar.grid.dblClickRowNumber(1);
  //   pages.sendungen.detail.waitForLoaded();
  //   pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
  //   ModalPopupFlows.clickOkBtn_CheckSuccessMsg();
  //   pages.sendungen.detail.waitForLoaded()
  //        .checkArbeitslisteTxt(testData.scenario4.arbeitslisteSendungenCompleted);
  //
  //   pages.groupedTaskbar.clickContainsVersichertendatenTab();
  //   pages.versicherte.detail.sendungenTabBar.grid.dblClickRowWithText(testData.scenario4.arbeitslisteSendungenReceived);
  //   pages.sendungen.detail.waitForLoaded();
  //   pages.sendungen.detail.ribbonMenu.clickAbschliessenBtn();
  //   ModalPopupFlows.clickOkBtn_CheckSuccessMsg();
  //   pages.sendungen.detail.waitForLoaded()
  //        .checkArbeitslisteTxt(testData.scenario4.arbeitslisteSendungenCompleted);
  //
  //   pages.groupedTaskbar.clickContainsVersichertendatenTab();
  //   pages.versicherte.detail.tabBar.navigateToEntscheideTab()
  //        .grid.waitGridViewLoaded()
  //        .dblClickRowNumber(1);
  //   pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario4.arbeitslisteEntChanged);
  // });

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
    pages.nav.leftMenu.navigateToPosteingangTab();
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.grid.headerActivePanel.selectPosteingangQueryGridDropdownAll();
    pages.posteingang.grid.filter.searchVersichertenNrTxt(testData.scenario5.vpNr);
    pages.waitForLoadingDisappears();
    pages.posteingang.grid.checkGridRowCount(2)
         .clickRowNumber(1);
    pages.waitForLoadingDisappears();
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.waitForLoadingDisappears();
    pages.posteingang.zuordnung.checkVersichertenNrDropdownContains(testData.scenario5.vpNr)
         .selectAbklarungDropdownByIndex(1)
         .clickZuordnenUndAbschliessen();
    ModalPopupFlows.clickOkBtn_CheckSuccessMsg();
    pages.posteingang.grid.checkGridRowCount(1);

    pages.nav.elements.homeBtn().click();
    pages.nav.leftMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(testData.scenario5.entID);
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario5.arbeitslisteEntInitial);
    pages.entscheid.detail.windowHeader.clickCloseBtn();

    pages.nav.leftMenu.navigateToPosteingangTab();
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.posteingang.grid.filter.searchVersichertenNrTxt(testData.scenario5.vpNr);
    pages.posteingang.grid.checkGridRowCount(1)
         .clickRowNumber(1);
    pages.waitForLoadingDisappears();
    pages.virtualViewer.waitVirtualViewerLoaded();
    pages.waitForLoadingDisappears();
    pages.posteingang.zuordnung.checkVersichertenNrDropdownContains(testData.scenario5.vpNr)
         .selectAbklarungDropdownByIndex(1)
         .clickZuordnenUndAbschliessen();
    ModalPopupFlows.clickOkBtn_CheckSuccessMsg();
    pages.posteingang.grid.checkGridRowCount(0);

    pages.nav.leftMenu.navigateToEntscheidTab();
    pages.entscheid.grid.searchAndOpenEntscheidID(testData.scenario5.entID);
    pages.groupedTaskbar.clickContainsEntscheidTab();
    pages.entscheid.detail.basisdatenTabBar.checkArbeitslisteTxt(testData.scenario5.arbeitslisteEntChanged);
  });
});
