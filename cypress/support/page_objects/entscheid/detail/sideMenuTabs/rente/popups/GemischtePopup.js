import RentePopupsBase from "./RentePopupsBase";

class GemischtePopup extends RentePopupsBase {
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

    super.mischrechnungBlock = {
      ...this.mischrechnungBlock
    };

    super.invalidenGradRenteBlock = {
      ...this.invalidenGradRenteBlock
    };
  }
}

export default GemischtePopup;
