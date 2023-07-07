import pageBase from "../../../../../base/PageBase";
import constants from "../../../../../helpers/Constants";
import DossierBeilagenGrid from "./DossierBeilagenGrid";
import OrdnerDocumentViewerGrid from "./OrdnerDocumentViewerGrid";

class DossierBeilagenTab {
  constructor() {
    this.dossierBeilagenGrid = new DossierBeilagenGrid(`${constants.CSS_ACTIVE_FORM} [akid='DossierQueryGrid']`);
    this.ordnerDocumentViewerGrid = new OrdnerDocumentViewerGrid(`${constants.CSS_ACTIVE_FORM} [akid='OrdnerDocumentViewerGrid']`);
    this.elements = {
    };
  }

  waitForLoaded() {
    pageBase.waitForLoadingDisappears();
    this.dossierBeilagenGrid.waitGridViewLoaded();
  }
}

export default DossierBeilagenTab;
