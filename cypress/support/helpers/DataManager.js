import C44194_ds1 from "../../fixtures/tests/dataSet1/C44194_CorrectSupertextAndEntscheidtyp.json";
import C44194_ds2 from "../../fixtures/tests/dataSet2/C44194_CorrectSupertextAndEntscheidtyp.json";
import C44194_ds3 from "../../fixtures/tests/dataSet3/C44194_CorrectSupertextAndEntscheidtyp.json";

import C44744_ds1 from "../../fixtures/tests/dataSet1/C44744_AddHilflosigkeitDataHappyCase.json";
import C44744_ds2 from "../../fixtures/tests/dataSet2/C44744_AddHilflosigkeitDataHappyCase.json";
import C44744_ds3 from "../../fixtures/tests/dataSet3/C44744_AddHilflosigkeitDataHappyCase.json";

import C47702_ds1 from "../../fixtures/tests/dataSet1/C47702_ClosingEntAfterVerfugungSendungIsClosed.json";
import C47702_ds2 from "../../fixtures/tests/dataSet2/C47702_ClosingEntAfterVerfugungSendungIsClosed.json";
import C47702_ds3 from "../../fixtures/tests/dataSet3/C47702_ClosingEntAfterVerfugungSendungIsClosed.json";

import C50488_ds1 from "../../fixtures/tests/dataSet1/C50488_EntscheidArbeitlisteWhenLastAbklarungIsCompleted.json";
import C50488_ds2 from "../../fixtures/tests/dataSet2/C50488_EntscheidArbeitlisteWhenLastAbklarungIsCompleted.json";
import C50488_ds3 from "../../fixtures/tests/dataSet3/C50488_EntscheidArbeitlisteWhenLastAbklarungIsCompleted.json";

import C001 from "../../fixtures/tests/C001_newAdressTest.json";
import C44746 from "../../fixtures/tests/C44746_HEGradCalculationRules.json";
import C47707 from "../../fixtures/tests/C47707_ShowNoShowDynamicBaustein.json";
import C50984 from "../../fixtures/tests/C50984_E2E_HEEntscheid.json";
import C39770 from "../../fixtures/tests/C39770_EntscheidCopy.json";
import C42473 from "../../fixtures/tests/C42473_EntscheidInDenPapierkorbVerschiebenHappyFlow.json";
import C47706 from "../../fixtures/tests/C47706_PossibilityToEditDataOnHillflosigkeitTabWhenDiscussionStartedEnded.json";
import C50507 from "../../fixtures/tests/C50507_PresenceAndVisibilityConditionsOfNeueGemischteMethodeButtonInRenteSidebar.json";
import C50508 from "../../fixtures/tests/C50508_ProhibitionOfOpeningNeueGemischteMethodeModalForEntscheidWithEmptyArtDerInvaliditat.json";
import C50511 from "../../fixtures/tests/C50511_TheCalculatedFieldsOfTheNeueGemischteMethodeModalWindow.json";

const dataFiles = {
  c44194 : C44194_ds1,
  c44744 : C44744_ds1,
  c47702 : C47702_ds1,
  c50488 : C50488_ds1,
  c001 : C001,
  c44746 : C44746,
  c47707 : C47707,
  c50984 : C50984,
  c39770 : C39770,
  c42473 : C42473,
  c47706 : C47706,
  c50507 : C50507,
  c50508 : C50508,
  c50511 : C50511
};

const dataSet = Cypress.env("dataSet");

if (dataSet === "dataSet1") {
  dataFiles.c44194 = C44194_ds1;
  dataFiles.c44744 = C44744_ds1;
  dataFiles.c47702 = C47702_ds1;
  dataFiles.c47702 = C47702_ds1;
  dataFiles.c50488 = C50488_ds1;
}
if (dataSet === "dataSet2") {
  dataFiles.c44194 = C44194_ds2;
  dataFiles.c44744 = C44744_ds2;
  dataFiles.c47702 = C47702_ds2;
  dataFiles.c50488 = C50488_ds2;
}
if (dataSet === "dataSet3") {
  dataFiles.c44194 = C44194_ds3;
  dataFiles.c44744 = C44744_ds3;
  dataFiles.c47702 = C47702_ds3;
  dataFiles.c50488 = C50488_ds3;
}

module.exports = dataFiles;
