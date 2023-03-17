//E2E test for HE workflow, this test case doesn't have any testRail test
//FINISHED
import { getBaseUrl }                 from "../support/Utility";
import loginPage                      from "../support/page_objects/LoginPageOld";
import desktop                        from "../support/page_objects/Desktop";
import vpGrid                         from "../support/page_objects/VPGrid";
import dateHelper                     from "../support/helpers/DateHelper";
import entscheidDetails               from "../support/page_objects/EntscheidDetails";
import entHilflosigkeitTab            from "../support/page_objects/EntscheidHilflosigkeitTab";
import dashboard                      from "../support/page_objects/Dashboard";
import vpDetails                      from "../support/page_objects/VPDetails";
import vpEntscheidGrid                from "../support/page_objects/VPEntscheidGrid";
import entscheidNew                   from "../support/page_objects/EntscheidNew";
import entscheidFreitexteTab          from "../support/page_objects/EntscheidFreitexteTab";
import entscheidEntscheidSendungenTab from "../support/page_objects/EntscheidEntscheidSendungenTab";
import sendungenDetails               from "../support/page_objects/SendungenDetails";
import sendungenDruckundVersand       from "../support/page_objects/SendungenDruckundVersand";
import entscheidSendungenTab          from "../support/page_objects/EntscheidSendungenTab";

//Call getBaseUrl() to get environment specific url value
const url               = getBaseUrl();
const today             = dateHelper.getCurrentDate();
const countOfdaysInYear = dateHelper.daysInYear();
const nextyear          = dateHelper.getSameDayNextYear();
const firstday          = dateHelper.getFirstDayOfSameMonthNextYear();
const end               = dateHelper.getOneDayLessNextYear();

console.log( `today ${ today}` );
console.log( `count ${ countOfdaysInYear}` );
console.log( `nextyear ${  nextyear}` );
console.log( `firstday ${  firstday}` );
console.log( `dayless ${  end}` );

describe( `E2E test of createting and sending Entscheide for HE code ${  url}`, () => {
  beforeEach( "Login", () => {
    cy.UILoginWithSession( Cypress.env( "username" ), Cypress.env( "password" ) );
    loginPage.open( url );
  } );

  it( "Verify Environment", () => {
    desktop.Versicherte().click();
    vpGrid.typevpName( "Wait Will" ).type( "{enter}" );
    vpGrid.vpSelectedRow().dblclick();
    cy.wait( 3000 );
    dashboard.HomeBtn().click();
    cy.wait( 4000 );
    //cy.wait I used here cause the element Entscheide tab exists on page but it is not clickable
    vpDetails.Entscheide().click();
    vpEntscheidGrid.NewBtn().click();
    entscheidNew.SelectLeistungsgruppeValue( "Hilflosenentschädigung" ).click();
    entscheidNew.SelectLeistungscodeValue( "Hilflosenentschädigung" ).click();
    entscheidNew.ValidateGesuchValue( "vom 01.02.2022" );
    entscheidNew.ValidateEreignisValue( "Basis vom 22.11.2022" );
    entscheidNew.ValidateBereichValue( "IV Erwachsene" );
    entscheidNew.ValidateBearbeiterValue( "Hulk1 - Hulk Eins" );
    entscheidNew.ValidateArbeitslisteValue( "Neu" );
    entscheidNew.ModatOkBtn().click();
    entscheidNew.ConfirmOKBtn().click();
    dashboard.HomeBtn().click();
    entscheidDetails.ValidateOrangeBasicDataColor( "rgb(255, 165, 0)" );
    entscheidDetails.ValidateOrangeDetailsTabColor( "rgb(255, 165, 0)" );
    entscheidDetails.ValidateNotOrangeDurchführungsstellenTabColor( "rgb(255, 165, 0)" );
    if ( url == "https://osiv-frtest.ivnet.ch/" ) {
      entscheidDetails.ValidateOrangeHilflosigkeitTabColor( "rgb(255, 165, 0)" );
    } else { entscheidDetails.ValidateBitteWarningMsg( "Bitte die Bearbeitung einleiten. (OSCIENT:522)" ) }
    entscheidDetails.ValidateShouldbefilledMsg( "Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)" );
    entscheidDetails.ValidateArbeitslisteValue( "Neu" );
    entscheidDetails.ValidateGesuchValue( "vom 01.02.2022" );
    entscheidDetails.ValidateEreignisValue( "Basis vom 22.11.2022" );
    entscheidDetails.ValidateBereichValue( "IV" );
    entscheidDetails.ValidateBearbeiterValue( "Hulk1 - Hulk Eins" );
    entscheidDetails.ValidateLeistungsgruppeValue( "HE" );
    entscheidDetails.ValidateLeistungscodeValue( "HE - Hilflosenentschädigung" );

    entscheidDetails.SelectEntscheidValue( "Zusprache" );
    entscheidDetails.SelectSupertextValue( "3205" );
    entscheidDetails.SelectEntscheidtypValue( "Mitteilung der IV-Stelle (IV Allgemein)" );
    entscheidDetails.SelectGebrechenValue( "101" );
    entscheidDetails.SelectFunktausfallValue( "01" );
    entscheidDetails.SelectBeginnValue( today );
    entscheidDetails.SpeicherBtn().click();
    entscheidDetails.ConfirmOKBtn().click();
    entscheidDetails.ValidateNotOrangeEntscheidSendungenColor( "rgb(255, 165, 0)" );
    entscheidDetails.ValidateNotOrangeBasicDataColor( "rgb(255, 165, 0)" );
    entscheidDetails.ValidateNotShouldbefilledMsg( "Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)" );
    entscheidDetails.BearbeitungEinleitenBtn().click();
    entscheidDetails.modalOkBtn( "Hulk1 - Hulk Eins" );
    entscheidDetails.ValidateNotOrangeFreitexteColor( "rgb(255, 165, 0)" );
    entscheidDetails.ValidateNotOrangeDiskutierenColor( "rgb(255, 165, 0)" );
    entscheidDetails.ValidateArbeitslisteValue( "Bearbeiten" );
    entscheidDetails.HilflosigkeitTab().click();
    entHilflosigkeitTab.SelectArtderInvaliditätValue( "Langdauernde Erwerbsunfähigkeit" );
    entHilflosigkeitTab.SelectAusgleichskasseValue( "10 - Ausgleichskasse des Kantons Freiburg" );
    entHilflosigkeitTab.SelectAufenthaltbezValue( "Zu Hause" );
    entHilflosigkeitTab.SelectAnAuskleidenDate( today );
    entHilflosigkeitTab.SelectAufstehenAbsitzenDate( today );
    entHilflosigkeitTab.SelectEssenDate( today );
    entHilflosigkeitTab.SpeichernBtn().click();
    entHilflosigkeitTab.ConfirmBtn().click();
    entscheidDetails.ValidateOrangeHilflosigkeitTabColor( "rgb(255, 165, 0)" );

    entHilflosigkeitTab.ValidateAblaufWartefristValue( nextyear );
    entHilflosigkeitTab.ValidateWFGradValue( "20 %" );
    entHilflosigkeitTab.ValidateTageValue( countOfdaysInYear );
    entHilflosigkeitTab.ValidateGrenzgradValue( "20 %" );
    entHilflosigkeitTab.ValidateBeginnDate( today );
    entHilflosigkeitTab.ValidateEndeDate( end );
    entHilflosigkeitTab.ValidateAnzahlTageValue( countOfdaysInYear );
    entHilflosigkeitTab.ValidateHEGradinValue( "20" );
    entHilflosigkeitTab.ValidateHEGradValue( "Leicht" );
    entHilflosigkeitTab.ValidateHEGradBeginnDate( firstday );
    entHilflosigkeitTab.ValidateHeGradabDate( firstday );
    entHilflosigkeitTab.ValidateHEGradVerlaufValue( "Leicht" );

    entscheidDetails.FreitexteTab().click();
    entscheidDetails.ValidateOrangeFreitextColor( "rgb(255, 165, 0)" );
    entscheidFreitexteTab.TextForm( "test" );
    entscheidFreitexteTab.BegründungSpeichernBtn().click();
    cy.wait( 15000 );
    entscheidFreitexteTab.ValidateTextFormValue( "test" );
    entscheidFreitexteTab.VerfügungBeiblattAK().click();
    entscheidFreitexteTab.FreitextgenerierenBtn().click();
    entscheidFreitexteTab.ConfirmOKBtn().click();
    cy.wait( 3000 );
    entscheidFreitexteTab.VerifyGeneratedSalutationText( "Wait" );
    entscheidFreitexteTab.VerifyGeneratedAnspruchsbeginnabHeader( "Anspruchsbeginn ab:" );
    entscheidFreitexteTab.VerifyGeneratedGradderHilflosigkeitValue( "leichten Grades" );
    entscheidFreitexteTab.VerifyGeneratedGradderHilflosigkeitHeader( "Grad der Hilflosigkeit" );
    entscheidFreitexteTab.VerifyGeneratedAnspruchsbeginnabValue( firstday );
    entscheidFreitexteTab.FreitextSpeichernBtn().click();
    cy.wait( 5000 );
    entscheidFreitexteTab.VerifyGeneratedSalutationTextWithoutColor( "Wait" );
    entscheidFreitexteTab.VerifyGeneratedAnspruchsbeginnabHeaderWithoutColor( "Anspruchsbeginn ab:" );
    entscheidFreitexteTab.VerifyGeneratedGradderHilflosigkeitValueWithoutColor( "leichten Grades" );
    entscheidFreitexteTab.VerifyGeneratedGradderHilflosigkeitHeaderWithoutColor( "Grad der Hilflosigkeit" );
    entscheidFreitexteTab.VerifyGeneratedAnspruchsbeginnabValueWithoutColor( firstday );
    entscheidFreitexteTab.GesetzlicheGrundlagen().click();
    cy.wait( 1000 );
    entscheidFreitexteTab.FreitextgenerierenGesetzlicheBtn().click();
    entscheidFreitexteTab.ConfirmOKBtn().click();
    entscheidDetails.ValidateNotOrangeFreitexteColor( "rgb(255, 165, 0)" );
    entscheidDetails.EntscheidSendungenTab().click();
    entscheidEntscheidSendungenTab.EntscheidSendungGenerierenBtn().click();
    entscheidDetails.VerifyOrangeVisierenColor( "rgb(255, 165, 0)" );
    entscheidDetails.ValidateNotOrangeEntscheidSendungenColor( "rgb(255, 165, 0)" );
    entscheidEntscheidSendungenTab.VerifyExistedRow( "Neu" );
    entscheidDetails.VisierenTab().click();
    entscheidEntscheidSendungenTab.VisumSpeichernBtn();
    entscheidEntscheidSendungenTab.ConfirmOKBtn().click();
    entscheidDetails.ValidateOrangeEntscheidSendungenColor( "rgb(255, 165, 0)" );
    cy.wait( 3000 );
    entscheidDetails.VerifyNotOrangeVisierenColor( "rgb(255, 165, 0)" );
    entscheidDetails.EntscheidSendungenTab().click();
    entscheidSendungenTab.SendungenTab().click();
    entscheidSendungenTab.findTableRowbyText( "VRD" ).click( { force: true } );
    dashboard.HomeBtn().click();
    sendungenDetails.FormularVariablen().click();
    sendungenDetails.Betrifft().type( "Formular Variablen" );
    sendungenDetails.VariablenSpeichernBtn().click();
    sendungenDetails.DruckVersandBtn().click();
    sendungenDruckundVersand.DruckVorschauMW().click();
    sendungenDruckundVersand.DruckVersandMW().click();
    sendungenDruckundVersand.SelectDruckerAuswählen( "Testdrucker" );
    sendungenDetails.ModalOkBtn().click();
    sendungenDetails.FrageJaBtn().click();
    sendungenDetails.VerifyArbeitslists( "Abgeschlossen" );
  } );
} );
