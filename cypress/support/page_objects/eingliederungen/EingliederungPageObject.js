import constants from "../../helpers/Constants";
import EingliederungsauftragErteilenPopup from "./details/popups/EingliederungsauftragErteilenPopup";
import EingliederungDetail from "./details/EingliederungDetail";
import EingliederungGrid from "./grid/EingliederungGrid";
import AbschlussEingliederungPopup from "./details/popups/AbschlussEingliederungPopup";
import DelegationanIVStellePopup from "./details/popups/DelegationanIVStellePopup";

class EingliederungPageObject {
  constructor() {
    this.grid = new EingliederungGrid(`${constants.CSS_ACTIVE_FORM} [akid='EingliederungGrid']`);
    this.detail = new EingliederungDetail();
    this.eingliederungsauftragErteilenPopup = new EingliederungsauftragErteilenPopup();
    this.abschlussEingliederungPopup = new AbschlussEingliederungPopup();
    this.delegationanIVStellePopup = new DelegationanIVStellePopup();
  }
}

export default EingliederungPageObject;
