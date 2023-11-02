import pages from "../../support/base/OsivPageObject";
import pageBase from "../../support/base/PageBase";
import constants from "../../support/helpers/Constants";

const testData = {
  message: "Der Posteingang ist als Warten markiert und darum nicht zugeordnet werden."
};

describe(`C58186: Displaying the panel message and availability of the Zuordnen buttons depending of Warten option;
  TestRail: https://osiv.testrail.net/index.php?/cases/view/58186;`, {failFast: {enabled: true}}, () => {

  before("Login", () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it(`Step 1: Open POE Desktop`, () => {
    pages.loginPage.openUrl();
    pages.nav.leftMenu.navigateToPosteingangTab();
    pages.virtualViewer.waitVirtualViewerLoaded();
  });

  it(`Step 2: Set header filter to "Alle"`, () => {
    pages.posteingang.grid.headerActivePanel.selectPosteingangQueryGridDropdownAll();
    pages.posteingang.grid.waitGridViewLoaded();
  });

  it(`Step 3: Select record which has unchecked Warten ->
  Buttons "Zuordnen" and "Zuordnen und Abschlissen" are enabled. No any panel messages.`, () => {
    let isFound = false;
    const tdList = [];

    pages.posteingang.grid.elements.gridWrapper().then((gridWrapper) => {
      gridWrapper.find("[class='objbox'] table tr[class*='material']")
                 .each((i, tr) => {
                   cy.$$(tr).find("td:first-of-type").each((j, td) => {
                     if (td.chstate === "0") {
                       tdList.push(td);
                       isFound = true;
                     }
                   });
                 });
      cy.log(isFound);
      if (!isFound) {
        throw new Error("No records with Warten checkbox [UNCHECKED]");
      }
      cy.wrap(tdList[0]).click();
      cy.wrap(tdList[0]).xpath("./..").then(el => {
        const elementID = el.attr("akid");

        cy.log(`STEP 4: Click on check-box "Warten" to mark it ->
                       Buttons "Zuordnen" and "Zuordnen und Abschlissen" are still enabled. No any panel messages."`);
        pages.posteingang.zuordnung.checkZuordnenUndAbschliessenBtnDisabled(false)
             .checkZuordnenBtnDisabled(false);
        pages.posteingang.zuordnung.expandBearbeiterUndWartenBlock()
             .setWartenCheckboxSelected(true);
        pages.posteingang.zuordnung.checkZuordnenUndAbschliessenBtnDisabled(false)
             .checkZuordnenBtnDisabled(false);

        cy.log(`STEP 5: Click on button "Speichern", accept the appeared warning message and when selection will switch to the 
              next record, return back to initial record -> Buttons "Zuordnen" and "Zuordnen und Abschlissen" becomes disabled. 
              The info panel message is appeared: "Der Posteingang ist als Warten markiert und darum nicht zugeordnet werden.". 
              Selection (focus) jumps automatically to the next record, if there is one in the list."`);
        pages.posteingang.zuordnung.clickSpeichernBtn();
        pages.warningPopup.clickOkBtn();
        pageBase.waitForLoadingDisappears();
        cy.get(`tr[akid='${elementID}'] td:first-of-type`).click();
        pageBase.waitForLoadingDisappears();
        pages.posteingang.zuordnung.checkZuordnenUndAbschliessenBtnDisabled(true)
             .checkZuordnenBtnDisabled(true);
        pages.checkMsgOnThePage(testData.message, true);

        cy.log(`STEP 7: Click on check-box "Warten" to unmark it -> 
        Buttons "Zuordnen" and "Zuordnen und Abschlissen" are disabled. The info panel message is shown."`);
        pages.posteingang.zuordnung.setWartenCheckboxSelected(false);
        cy.wait(2000);
        pages.posteingang.zuordnung.checkZuordnenUndAbschliessenBtnDisabled(true)
             .checkZuordnenBtnDisabled(true);
        pages.checkMsgOnThePage(testData.message, true);

        cy.log(`Step 8: Click on button "Speichern", accept the appeared warning message and when selection will switch 
        to the next record, return back to initial record -> 
        Buttons "Zuordnen" and "Zuordnen und Abschlissen" are enabled. No any panel messages.`);
        pages.posteingang.zuordnung.clickSpeichernBtn();
        pages.warningPopup.clickOkBtn();
        cy.wait(constants.MIN_TIMEOUT);
        pageBase.waitForLoadingDisappears();
        cy.wait(constants.MIN_TIMEOUT);
        cy.get(`tr[akid='${elementID}'] td:first-of-type`).click();
        cy.wait(constants.MIN_TIMEOUT/2);
        pageBase.waitForLoadingDisappears();
        pages.posteingang.zuordnung.checkZuordnenUndAbschliessenBtnDisabled(false)
             .checkZuordnenBtnDisabled(false);
        pages.checkMsgOnThePage(testData.message, false);
      });
    });
  });
});
