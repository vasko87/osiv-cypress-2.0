import constants from "../../../../helpers/Constants";
import pageBase from "../../../../base/PageBase";
import SendungenPageBase from "../../SendungenPageBase";

class DetailTab_Sen extends SendungenPageBase {
  constructor() {
    const detailFormCSS = `${constants.CSS_ACTIVE_FORM} [akid='SendungHauptdatenForm']`;
    super(detailFormCSS);
    super.elements = {
      ...this.elements,
      detailForm: () => cy.get(detailFormCSS)
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default DetailTab_Sen;
