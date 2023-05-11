import RentePopupsBase from "./RentePopupsBase";

class FruhinvaliditatPopup extends RentePopupsBase {
  constructor() {
    super();

    super.elements = {
      ...this.elements
    };

    super.invalideneinkommenBlock = {
      ...this.invalideneinkommenBlock
    };

    super.invalidenGradRenteBlock = {
      ...this.invalidenGradRenteBlock
    };
  }
}

export default FruhinvaliditatPopup;
