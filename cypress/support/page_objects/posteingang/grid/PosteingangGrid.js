import GridBase from "../../../base/GridBase";
import PosteingangGridFilter from "./PosteingangGridFilter";
import PosteingangGridHeaderActivePanel from "./PosteingangGridHeaderActivePanel";

class PosteingangGrid extends GridBase{
  constructor(css) {
    super(css);
    this.filter = new PosteingangGridFilter();
    this.headerActivePanel = new PosteingangGridHeaderActivePanel();
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
