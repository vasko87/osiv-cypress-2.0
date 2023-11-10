import restConstants from "./RestConstants";
export default {

  /**
   * Delete VP by VPID
   *
   * @param vpID - VP ID
   */
  deleteVP(vpID) {
    cy.GETrequest(restConstants.VP.GET_VP_BY_STAMMNR.replace("$STAMMNR$", vpID)).as("details");
    cy.get("@details").its("status").should("eq", 200);
    cy.get("@details").then((res) => {
      if (res.body.dsStammQuery.eStamm.size !== 0) {
        res.body.dsStammQuery.eStamm.forEach((eStamm) => {
          cy.log(JSON.stringify(eStamm.Stamm_ID));
          const body = {request: {plcParameter: {stamm_ID: eStamm.Stamm_ID}}};
          cy.PUTrequest(restConstants.VP.DELETE_VP, body);
          cy.log(`VP with VP_ID=[${vpID}] DELETED!`);
        });
      } else {
        cy.log(`No VP with VP_ID=[${vpID}] found!`);
      }
    });
  }
};
