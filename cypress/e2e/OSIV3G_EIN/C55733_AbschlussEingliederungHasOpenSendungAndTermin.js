import pages from "../../support/base/OsivPageObject";
import flows from "../../support/base/OsivFlowsObject";
import {c55733 as testData} from "../../support/helpers/DataManager";
import helperObject from "../../support/helpers/HelperObject";
import Utility from "../../support/Utility";

const responseData = {
  entFolgeID        : "",
  senAmount         : "",
  terAmount         : "",
  sendungTabGridData: "",
  terminTabGridData : "",
  newEinId          : ""
};

describe.skip(`C55733: "Abschluss Eingliederung" _has open Sendung and Termin 
  TestRail: https://osiv.testrail.net/index.php?/cases/view/55733;`, {failFast: {enabled: true}}, () => {

  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    pages.loginPage.openUrl();
  });

  it(`Step 1: Open Eingliederung ${testData.einID}`, () => {
    flows.eingliederung.step_navigateEin_searchEin_openEin(testData.einID);
    helperObject.rest.EIN.getEntFolgeID(testData.einID).then((entFolgeID) => {
      responseData.entFolgeID = entFolgeID;
    });
    helperObject.rest.EIN.getSenAmountBy_StammId_EinId(testData.stammID, testData.einID).then((senAmount) => {
      responseData.senAmount = senAmount;
    });
    helperObject.rest.EIN.getTerAmountBy_StammId_EinId(testData.stammID, testData.einID).then((terAmount) => {
      responseData.terAmount = terAmount;
    });
    pages.eingliederung.detail.tabBar.navigateToSendungenTab().grid.getGridData().then((sendungTabGridData) => {
      responseData.sendungTabGridData = sendungTabGridData;
      cy.log(JSON.stringify(sendungTabGridData));
    });
    pages.eingliederung.detail.tabBar.navigateToTermineTab().grid.getGridData().then((terminTabGridData) => {
      responseData.terminTabGridData = terminTabGridData;
      cy.log(JSON.stringify(terminTabGridData));
    });
    pages.eingliederung.detail.tabBar.navigateToDetailsTab();
  });

  it(`Step 2: Press button "Abschluss Eingliederung" -> confirm warning: Es existieren noch offene Termine zu dieser Eingliederung.`, () => {
    pages.eingliederung.detail.ribbonMenu.clickAbschlussEingliederungBtn();
    pages.warningPopup.checkWarningContainsText("Es existieren noch offene Termine zu dieser Eingliederung")
         .checkWarningContainsText("Die Eingliederung kann in diesem Zustand nur abgeschlossen werden, wenn Sie nachfolgend eine Folgeeingliederung starten. Dies wird erzwungen.")
         .checkWarningContainsText("Wollen Sie fortfahren? (OSCEIN:52)")
         .clickOkBtn();
  });

  it(`Step 3: confirm warning:
          Es existieren noch offene Sendungen zu dieser Eingliederung.
          Die Eingliederung kann in diesem Zustand nur abgeschlossen werden, wenn Sie nachfolgend eine Folgeeingliederung starten. Dies wird erzwungen. (OSCEIN:53)`, () => {
    pages.warningPopup.checkWarningContainsText("Es existieren noch offene Sendungen zu dieser Eingliederung.")
         .checkWarningContainsText("Die Eingliederung kann in diesem Zustand nur abgeschlossen werden, wenn Sie nachfolgend eine Folgeeingliederung starten. Dies wird erzwungen.")
         .clickOkBtn();
  });


  it(`Step 4: Fill in mandatory data , select Rentenfrage = Nein; add text to Auftragstext field`, () => {
    pages.eingliederung.abschlussEingliederungPopup.waitForLoaded()
         .selectResultatDropdownByIndex(1)
         .selectFolgeAuftragAnDropdownByIndex(1)
         .setAuftragsText("TEXT")
         .selectRentenfrageDropdown("Nein");
  });

  it(`Step 5: Click OK confirm warning  (OSCEIN:83)`, () => {
    pages.eingliederung.abschlussEingliederungPopup.clickOkBtn();
    pages.warningPopup.checkWarningContainsText("OSCEIN:83")
         .clickOkBtn();
  });

  it(`Expected results: Current Eing is closed, has Arbeitliste = Abgeschlossen`, () => {
    pages.eingliederung.detail.detailTabBar.checkArbeitslisteTxt("Abgeschlossen");
    pages.eingliederung.detail.ribbonMenu.checkFolgeentscheidOffnenBtnDisabled(true);
  });

  it(`Expected results: New Eing is created
          new eing has all sendungs from the old Eing and Termine`, () => {
    helperObject.rest.EIN.checkAmount(testData.stammID, 2);
    pages.eingliederung.detail.ribbonMenu.clickVPOffnenBtn().waitForLoaded();
    pages.versicherte.detail.tabBar.navigateToEingliederungenTab().grid.waitGridViewLoaded();
    pages.versicherte.detail.eingliederungenTabBar.grid.checkGridRowsCount(2)
         .dblClickRowWithText("Neu");
    pages.eingliederung.detail.waitForLoaded();
    Utility.gatherElements({
      einId: pages.eingliederung.detail.tabBar.navigateToMetaInfoTab().getEingliederungIdTxt()
    }).then((newEinID) => {
      responseData.newEinId = newEinID.einId.val().replace("'", "");
    });
  });

  it(`Expected results: new eing has all sendungs from the old Eing and Termine`, () => {
    helperObject.rest.EIN.getSenAmountBy_StammId_EinId(testData.stammID, responseData.newEinId).then((senAmountNew) => {
      expect(senAmountNew, "Check Sendungen amount of New EIN is the same as for old one").to.be.eq(responseData.senAmount);
    });
    helperObject.rest.EIN.getTerAmountBy_StammId_EinId(testData.stammID, responseData.newEinId).then((terAmountNew) => {
      expect(terAmountNew, "Check Termine amount of New EIN is the same as for old one").to.be.eq(responseData.terAmount);
    });
  });

  it(`Expected: Result is stored in field Auftragstext`, () => {
    pages.eingliederung.detail.tabBar.navigateToDetailsTab().waitForLoaded();
    pages.eingliederung.detail.detailTabBar.checkAuftragstextTextareaContains("TEXT");
  });

  it(`Expected: New Eing is assigned to folge ent of the closed one`, () => {
    pages.eingliederung.detail.ribbonMenu.checkFolgeentscheidOffnenBtnDisabled(false)
         .clickFolgeentscheidOffnenBtn();
    helperObject.rest.EIN.getEntFolgeID(responseData.newEinId).then((newEntFolgeID) => {
      expect(newEntFolgeID, "Check Ent Folge ID").to.be.eq(responseData.entFolgeID);
    });
  });

  it(`Expected: Old Eing is not connected with the folge ent`, () => {
    helperObject.rest.EIN.getEntFolgeID(testData.einID).then((oldEntFolgeID) => {
      expect(oldEntFolgeID, "Check Ent Folge ID").to.be.eq("null");
    });
  });
});
