import helperObject from "../support/helpers/HelperObject";

let responseData = {
  entFolge      : ""
};

describe(`API test`, {failFast: {enabled: true}}, () => {
  before(`Login as ${Cypress.env("username")};`, () => {
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  });

  it("check URL", () => {
    cy.GETrequest("").as("details");
    cy.get("@details").its("status").should("eq", 200);
  });

  it("2", () => {
    helperObject.rest.EIN.checkAmount("7925", 1);
  });

  it("Get ENT Folge", () => {
    helperObject.rest.EIN.getEntFolgeID("3297").then((r) => {
      responseData.entFolge = r;
      cy.log(responseData.entFolge);
    });
    helperObject.rest.EIN.getEntFolgeID("3287").then((r) => {
      cy.log(r);
      cy.log(responseData.entFolge);
    });
  });

  it("GET Sendung amount", () => {
    helperObject.rest.EIN.getSenAmountBy_StammId_EinId("7987", "3297").then((r) => {
      cy.log(r);
    });
  });

  it("3 Sendung", () => {
    cy.GETrequest("/web/Resource/Osiv.Sendung.Sendung.Query.SendungQueryBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22stamm_id%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3A7925%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22ursprung%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3A%22EIN%22%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22ursprung_id%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3A3283%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22geloescht%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3A%22False%22%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22includeabgeschlossen%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3Atrue%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22includeaufbewahrung%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3Atrue%7D%5D%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&skip=0&top=50&clientRequestId=9606&filter=%7B%22NamedQuery%22%3A%7B%22name%22%3A%22ContextValue%22%2C%22parameters%22%3A%5B%7B%22name%22%3A%22ContextValue%22%2C%22type%22%3A%22character%22%2C%22value%22%3A%22SendungDefaultFilter%22%7D%5D%7D%2C%22orderBy%22%3A%22sortierung_dat%20desc%2Csendung_id%20desc%22%2C%22top%22%3A50%7D&_ts=168992812-2602204104-81").as("details");
    cy.get("@details").its("status").should("eq", 200);
    cy.get("@details").then((res) => {
      cy.log(JSON.stringify(res.body));
      cy.log(JSON.stringify(res.body.dsSendungQuery.eSendung.length));
      expect(JSON.stringify(res.body.dsSendungQuery.eSendung.length)).to.be.eq("2");
    });
  });


});
