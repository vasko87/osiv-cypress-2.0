import RentePopupsBase from "./RentePopupsBase";

class EinkommensvergleichPopup extends RentePopupsBase {
  constructor() {
    super();

    super.elements = {
      ...this.elements
    };

    super.valideneinkommenBlock = {
      ...this.valideneinkommenBlock
    };

    super.invalideneinkommenBlock = {
      ...this.invalideneinkommenBlock
    };

    super.invalidenGradRenteBlock = {
      ...this.invalidenGradRenteBlock
    };
  }
}

export default EinkommensvergleichPopup;
