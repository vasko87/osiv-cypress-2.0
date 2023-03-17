import C44194_ds1 from "../../fixtures/tests/dataSet1/C44194_CorrectSupertextAndEntscheidtyp.json";
import C44194_ds2 from "../../fixtures/tests/dataSet2/C44194_CorrectSupertextAndEntscheidtyp.json";
import C44194_ds3 from "../../fixtures/tests/dataSet3/C44194_CorrectSupertextAndEntscheidtyp.json";
import C44744_ds1 from "../../fixtures/tests/dataSet1/C44744_AddHilflosigkeitDataHappyCase.json";
import C44744_ds2 from "../../fixtures/tests/dataSet2/C44744_AddHilflosigkeitDataHappyCase.json";
import C44744_ds3 from "../../fixtures/tests/dataSet3/C44744_AddHilflosigkeitDataHappyCase.json";
import C47702_ds1 from "../../fixtures/tests/dataSet1/C47702_ClosingEntAfterVerfugungSendungIsClosed.json";
import C47702_ds2 from "../../fixtures/tests/dataSet2/C47702_ClosingEntAfterVerfugungSendungIsClosed.json";
import C47702_ds3 from "../../fixtures/tests/dataSet3/C47702_ClosingEntAfterVerfugungSendungIsClosed.json";
import C44746 from "../../fixtures/tests/C44746_HEGradCalculationRules.json";
import C47707 from "../../fixtures/tests/C47707_ShowNoShowDynamicBaustein.json";
import C50984 from "../../fixtures/tests/C50984_E2E_HEEntscheid.json";
import C39770 from "../../fixtures/tests/C39770_EntscheidCopy.json";

const dataFiles = {
  c44194 : C44194_ds1,
  c44744 : C44744_ds1,
  c47702 : C47702_ds1,
  c44746 : C44746,
  c47707 : C47707,
  c50984 : C50984,
  c39770 : C39770
};

const dataSet = Cypress.env("dataSet");

if (dataSet === "dataSet1") {
  dataFiles.c44194 = C44194_ds1;
  dataFiles.c44744 = C44744_ds1;
  dataFiles.c47702 = C47702_ds1;
}
if (dataSet === "dataSet2") {
  dataFiles.c44194 = C44194_ds2;
  dataFiles.c44744 = C44744_ds2;
  dataFiles.c47702 = C47702_ds2;
}
if (dataSet === "dataSet3") {
  dataFiles.c44194 = C44194_ds3;
  dataFiles.c44744 = C44744_ds3;
  dataFiles.c47702 = C47702_ds3;
}

module.exports = dataFiles;
