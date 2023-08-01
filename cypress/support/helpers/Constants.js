const CSS_ACTIVE_FORM = "[class='dhxwin_active']";
const CSS_OPACITY1 = "[style*='opacity: 1']";
const MIN_TIMEOUT = 1000;
const SHORT_TIMEOUT = 5000;
const DEFAULT_TIMEOUT = 20000;
const LONG_TIMEOUT = 50000;

const COLOR = {
  orange: "rgb(255, 165, 0)",
  green : "rgb(255, 255, 255)",
  red   : "rgb(255, 0, 0)",
  white : "rgb(255, 255, 255)",
  yellow: "rgb(255, 255, 0)"
};

const MSG = {
  OSCIENT_35 : "Die Sendung für die Delegation muss noch versendet werden. (OSCEIN:35)",
  OSCIENT_76_PART1 : "Zur Prüfung der Rentenfrage wird ein neuer Renten-Entscheid angelegt.",
  OSCIENT_76_PART2 : "Wollen Sie fortfahren? (OSCEIN:76)",
  OSCIENT_77_PART1 : "Das angegebene Resultat und die Anstellungen werden gespeichert.",
  OSCIENT_77_PART2 : "Wollen Sie fortfahren? (OSCEIN:77)",
  OSCIENT_362 : "Diese Aktion kann nicht rückgängig gemacht werden! (OSCSTAMM:362)",
  OSCIENT_363 : "Diese Aktion kann nicht rückgängig gemacht werden! (OSCSTAMM:363)",
  OSCIENT_522: "Bitte die Bearbeitung einleiten. (OSCIENT:522)",
  OSCIENT_713: "Wollen sie fortfahren? (OSCIENT:713)",

  OSCEIN_65_PART1: "Es existieren noch Sendungen oder Abklärungen zur Eingliederung.",
  OSCEIN_65_PART2: "Alle Sendungen und Abklärungen werden dem Stamm zugeordnet.",
  OSCEIN_65_PART3: "Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:65)",
  OSCEIN_67_PART1: "Es existieren noch Protokolleinträge zur Eingliederung.",
  OSCEIN_67_PART2: "Alle Protokolleinträge werden dem Stamm zugeordnet.",
  OSCEIN_67_PART3: "Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:67)",

  TERMIN_44  : "Sie beenden einen fremden Termin. (Termin:44)",
  TERMIN_26  : "Die zugehörige Eingliederung bleibt aufgrund eines Termins im Warten. (Termin:26)",
  TERMIN_27  : "Die zugehörige Eingliederung wird aus dem Warten befreit. (Termin:27)",

  OSCSTAMM_277  : "Der Regress auf dem Ereignis vom 07.08.2022 ist in Erledigung. (OSCSTAMM:277)",
  OSCSTAMM_275  : "Der Regress auf dem Ereignis vom 05.05.2022 ist in Durchführung. (OSCSTAMM:275)",
  OSCSTAMM_273: "Der Regress auf dem Ereignis vom 01.02.2021 ist in Prüfung. (OSCSTAMM:273)"
};

module.exports = {CSS_ACTIVE_FORM, CSS_OPACITY1, MIN_TIMEOUT, SHORT_TIMEOUT, LONG_TIMEOUT, DEFAULT_TIMEOUT, COLOR, MSG};

