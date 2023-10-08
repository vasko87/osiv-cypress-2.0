class BeschwerdePageBase {
  constructor(baseCSS) {
    this.elements = {
      notizenTextarea: () => cy.get(baseCSS).find("[akid$='-bem'] textarea")
    };
  }

  setNotizenTextarea(value) {
    this.elements.notizenTextarea().should("be.visible").clear().type(value);
    return this;
  }

  checkNotizenTextareaValue(value) {
    this.elements.notizenTextarea().should("have.value", value);
    return this;
  }

  checkNotizenTextareaNoValue(value) {
    this.elements.notizenTextarea().should("not.have.value", value);
    return this;
  }

}

export default BeschwerdePageBase;
