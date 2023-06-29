import TxtEditor from "../../standalone/TxtEditor";

class TerminePageBase {
  constructor(baseCSS) {
    this.txtEditor = new TxtEditor(baseCSS);
    this.elements = {
    };
  }
}

export default TerminePageBase;
