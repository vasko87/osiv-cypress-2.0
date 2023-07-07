import GridBase from "../../../base/GridBase";
import pageBase from "../../../base/PageBase";
import SendungenGridHeaderActivePanel from "./SendungenGridHeaderActivePanel";
import SendingenGridFilter from "./SendingenGridFilter";

class SendungenGrid extends GridBase {
  constructor(css) {
    super(css);
    this.filter = new SendingenGridFilter();
    this.headerActivePanel = new SendungenGridHeaderActivePanel();
    super.elements = {
      ...this.elements

    };
  }

  searchAndOpenSendundenNr(value) {
    this.filter.searchBySendundenNr(value);
    super.waitGridViewLoaded().scrollRight()
         .dblClickRowNumber(1);
    pageBase.waitForLoadingDisappears();
    return this;
  }
}

export default SendungenGrid;
