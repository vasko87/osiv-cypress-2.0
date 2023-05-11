import constants from "../../../../helpers/Constants";
import EingliederungPageBase from "../../EingliederungPageBase";

class DetailTab_Ein extends EingliederungPageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='EingliederungDetailForm']`;
    super(detailFormCSS);
    super.elements = {
      ...this.elements,
      detailForm: () => cy.get(detailFormCSS)
    };
  }
}

export default DetailTab_Ein;
