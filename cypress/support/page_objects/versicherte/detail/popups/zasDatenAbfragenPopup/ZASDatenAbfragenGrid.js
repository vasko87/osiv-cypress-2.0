import GridBase from "../../../../../base/GridBase";
import ZASDatenAbfragenGridFilter from "./ZASDatenAbfragenGridFilter";

class ZASDatenAbfragenGrid extends GridBase {
  constructor() {
    super("[akid='ZasQueryGrid']");
    this.filter = new ZASDatenAbfragenGridFilter();
    super.elements = {
      ...this.elements
    };
  }

  checkIfRowActive(number, isActive) {
    this.getAllColumnValues("Aktiv").then((valList) => {
      console.log(valList);
      assert.equal(valList[number - 1], isActive);
    });
    return this;
  }
}

export default ZASDatenAbfragenGrid;
