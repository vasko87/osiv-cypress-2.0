import GridBase from "../../../base/GridBase";
import PosteingangGridFilter from "./PosteingangGridFilter";
import PosteingangGridHeaderActivePanel from "./PosteingangGridHeaderActivePanel";
import pages from "../../../base/OsivPageObject";

class PosteingangGrid extends GridBase {
  constructor(css) {
    super(css);
    this.filter = new PosteingangGridFilter();
    this.headerActivePanel = new PosteingangGridHeaderActivePanel();
    super.elements = {
      ...this.elements
    };
  }

  waitGridViewLoaded() {
    super.waitGridViewLoaded();
    return this;
  }

  /**
   * Search @value in 'Versicherten-Nr.' field of Grid filter
   * open 'Versicherten-Nr' with dblclick()
   * @param value
   * @returns {EntscheidGrid}
   */
  searchAndOpenVersichertenNr(value) {
    super.waitGridViewLoaded();
    this.filter.searchVersichertenNrTxt(value);
    super.dblClickRowValue(value);
    return this;
  }

  clickRowWithWartenCheckboxCheckedToSelectIt(index) {
    let isFound = false;
    const tdList = [];

    pages.posteingang.grid.elements.gridWrapper().then((gridWrapper) => {
      gridWrapper.find("[class='objbox'] table tr[class*='material']")
                 .each((i, tr) => {
                   cy.$$(tr).find("td:first-of-type").each((j, td) => {
                     if (td.chstate === "1") {
                       tdList.push(td);
                       isFound = true;
                     }
                   });
                 });
      cy.log(isFound);
      if (!isFound) {
        throw new Error("No records with Warten checkbox [UNCHECKED]");
      }
      cy.wrap(tdList[index]).click();
    });
  }

  /**
   * @returns {HTMLElement}
   */
  clickRowWithWartenCheckboxUncheckedToSelectIt(index) {
    let isFound = false;
    const tdList = [];

    pages.posteingang.grid.elements.gridWrapper().then((gridWrapper) => {
      gridWrapper.find("[class='objbox'] table tr[class*='material']")
                 .each((i, tr) => {
                   cy.$$(tr).find("td:first-of-type").each((j, td) => {
                     if (td.chstate === "0") {
                       tdList.push(td);
                       isFound = true;
                     }
                   });
                 });
      cy.log(isFound);
      if (!isFound) {
        throw new Error("No records with Warten checkbox [UNCHECKED]");
      }
      cy.wrap(tdList[index]).click();
    });
  }
}

export default PosteingangGrid;
