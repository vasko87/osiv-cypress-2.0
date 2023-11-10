import restConstants from "./RestConstants";
export default {

  /**
   * Checking amount on EINs assigned to the particular VP
   *
   * @param stammId - VP ID
   * @param amount - expected amount
   */
  checkAmount(stammId, amount) {
    cy.GETrequest(restConstants.EIN.GET_AMOUNT.replace("$STAMMID$", stammId)).as("details");
    cy.get("@details").its("status").should("eq", 200);
    cy.get("@details").then((res) => {
      expect(JSON.stringify(res.body.dsEingliederungQueryStamm.eEingliederungQueryStamm.length), `EIN amount expect to be ${amount}`).to.be.eq(amount.toString());
    });
  },

  /**
   * Checking the ENT Folge for EIN is the same as expected
   *
   * @param einID - EIN ID
   * @param expectedEntFolgeID - expected ENT ID
   */
  checkEntFolge(einID, expectedEntFolgeID) {
    cy.GETrequest(restConstants.EIN.GET_EIN_BY_EINID.replace("$EINID$", einID)).as("details");
    cy.get("@details").its("status").should("eq", 200);
    cy.get("@details").then((res) => {
      cy.log(JSON.stringify(res.body.dsEingliederung.eEingliederung[0].Entscheid_ID));
      expect(JSON.stringify(res.body.dsEingliederung.eEingliederung[0].Entscheid_ID), `ENT FOLGE should be ${expectedEntFolgeID}`).to.be.eq(expectedEntFolgeID.toString());
    });
  },

  /**
   * Getting ENT Folge ID for particular EIN
   *
   * @param einID - ein ID
   * @returns {Cypress.Chainable<string>} - the ENT Folge ID
   */
  getEntFolgeID(einID) {
    cy.GETrequest(restConstants.EIN.GET_EIN_BY_EINID.replace("$EIN_ID$", einID)).as("details");
    cy.get("@details").its("status").should("eq", 200);
    return cy.get("@details").then((res) => {
      return JSON.stringify(res.body.dsEingliederung.eEingliederung[0].Entscheid_ID);
    });
  },

  /**
   * Getting amount of Sendungens assigned to the EIN
   *
   * @param stammId - VP ID
   * @param einID - EIN ID
   * @returns {Cypress.Chainable<unknown>} - amount of assigned Sendungens
   */
  getSenAmountBy_StammId_EinId(stammId, einID) {
    cy.GETrequest(restConstants.EIN.GET_SEN_AMOUNT.replace("$STAMMID$", stammId).replace("EINID", einID)).as("details");
    cy.get("@details").its("status").should("eq", 200);
    return cy.get("@details").then((res) => {
      return res.body.dsSendungQuery.eSendung.length;
    });
  },

  /**
   * Getting amount of Termins assigned to the EIN
   *
   * @param stammId - VP ID
   * @param einID - EIN ID
   * @returns {Cypress.Chainable<unknown>} - amount of assigned Termins
   */
  getTerAmountBy_StammId_EinId(stammId, einID) {
    cy.GETrequest(restConstants.EIN.GET_TER_AMOUNT.replace("$STAMMID$", stammId).replace("EINID", einID)).as("details");
    cy.get("@details").its("status").should("eq", 200);
    return cy.get("@details").then((res) => {
      return res.body.dsTerminQuery.eTermin.length;
    });
  },

  deleteEINByVPName(vpName) {
    cy.GETrequest(restConstants.VP.GET_VP.replace("$VALUE$", vpName)).as("details");
    cy.get("@details").its("status").should("eq", 200);
    cy.get("@details").then((res) => {
      cy.log(JSON.stringify(res.body.dsStammQuery.eStamm[0].Stamm_ID));
      cy.GETrequest(restConstants.EIN.GET_EIN_BY_STAMMID.replace("$STAMMID$", vpName)).as("details");

      const body = {request:{plcParameter:{stamm_ID:res.body.dsStammQuery.eStamm[0].Stamm_ID}}};
      cy.PUTrequest(restConstants.VP.DELETE_VP, body);
    });
  }
};
