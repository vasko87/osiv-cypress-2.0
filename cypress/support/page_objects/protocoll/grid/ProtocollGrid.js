import GridBase from "../../../base/GridBase";
class ProtocollGrid extends GridBase {
  constructor(css) {
    super(css);
    super.elements = {
      ...this.elements
    };
  }
}

export default ProtocollGrid;
