import GridBase from "../../../base/GridBase";
import PosteingangGridFilter from "./PosteingangGridFilter";

class PosteingangGrid extends GridBase{
  constructor(css) {
    super(css);
    this.filter = new PosteingangGridFilter();
    super.elements = {
      ...this.elements
    };
  }

  /**
   * Search @value in 'Versicherten-Nr.' field of Grid filter
   * open 'Versicherten-Nr' with dblclick()
   * @param value
   * @returns {EntscheidGrid}
   */
  searchAndOpenVersichertenNr(value) {
    this.filter.searchVersichertenNrTxt(value);
    super.dblClickRowValue(value);
    return this;
  }
}

export default PosteingangGrid;
