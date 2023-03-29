const CSS_ACTIVE_FORM = "[class='dhxwin_active']";
const CSS_OPACITY1 = "[style*='opacity: 1']";
const SHORT_TIMEOUT = 5000;
const DEFAULT_TIMEOUT = 20000;
const LONG_TIMEOUT = 50000;

const COLOR = {
  orange: "rgb(255, 165, 0)",
  green : "rgb(255, 255, 255)",
  white : "rgb(255, 255, 255)",
  yellow: "rgb(255, 255, 0)"
};

const MSG = {
  OSCIENT_522: "Bitte die Bearbeitung einleiten. (OSCIENT:522)",
  OSCIENT_523: "Es müssen noch folgende Felder ausgefüllt werden: Entscheid, Supertext, Entscheidtyp, Gebrechen, Funktionsausfall. (OSCIENT:523)"
};

module.exports = {CSS_ACTIVE_FORM, CSS_OPACITY1, SHORT_TIMEOUT, LONG_TIMEOUT, DEFAULT_TIMEOUT, COLOR, MSG};
