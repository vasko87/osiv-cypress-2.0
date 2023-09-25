const CSS_ACTIVE_FORM = "[class='dhxwin_active']";
const CSS_OPACITY1 = "[style*='opacity: 1']";
const CSS_OPACITY1_ACTIVE = CSS_OPACITY1 + " " + CSS_ACTIVE_FORM;
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
  OSCIENT_21: "Hierzu gelten auch ersetzte, korrigierte und annullierte Entscheid-Sendungen. (OSCIENT:21)",
  OSCIENT_35: "Die Sendung für die Delegation muss noch versendet werden. (OSCEIN:35)",
  OSCIENT_76_PART1: "Zur Prüfung der Rentenfrage wird ein neuer Renten-Entscheid angelegt.",
  OSCIENT_76_PART2: "Wollen Sie fortfahren? (OSCEIN:76)",
  OSCIENT_77_PART1: "Das angegebene Resultat und die Anstellungen werden gespeichert.",
  OSCIENT_77_PART2: "Wollen Sie fortfahren? (OSCEIN:77)",
  OSCIENT_362: "Diese Aktion kann nicht rückgängig gemacht werden! (OSCSTAMM:362)",
  OSCIENT_363: "Diese Aktion kann nicht rückgängig gemacht werden! (OSCSTAMM:363)",
  OSCIENT_522: "Bitte die Bearbeitung einleiten. (OSCIENT:522)",
  OSCIENT_713: "Wollen sie fortfahren? (OSCIENT:713)",

  OSCEIN_65_PART1: "Es existieren noch Sendungen oder Abklärungen zur Eingliederung.",
  OSCEIN_65_PART2: "Alle Sendungen und Abklärungen werden dem Stamm zugeordnet.",
  OSCEIN_65_PART3: "Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:65)",
  OSCEIN_66_PART1: "Es existieren noch Sendungen oder Abklärungen zur Eingliederung.",
  OSCEIN_66_PART2: "Alle Sendungen und Abklärungen werden dem Gesuch zugeordnet.",
  OSCEIN_66_PART3: "Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:66)",
  OSCEIN_67_PART1: "Es existieren noch Protokolleinträge zur Eingliederung.",
  OSCEIN_67_PART2: "Alle Protokolleinträge werden dem Stamm zugeordnet.",
  OSCEIN_67_PART3: "Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:67)",
  OSCEIN_68_PART1: "Es existieren noch Protokolleinträge zur Eingliederung.",
  OSCEIN_68_PART2: "Alle Protokolleinträge werden dem Gesuch zugeordnet.",
  OSCEIN_68_PART3: "Wollen Sie die Eingliederung wirklich löschen? (OSCEIN:68)",

  TERMIN_44: "Sie beenden einen fremden Termin. (Termin:44)",
  TERMIN_26: "Die zugehörige Eingliederung bleibt aufgrund eines Termins im Warten. (Termin:26)",
  TERMIN_27: "Die zugehörige Eingliederung wird aus dem Warten befreit. (Termin:27)",

  OSCSTAMM_152  : "Falls der Erhalt des Dossiers jedoch fälschlicherweise nicht registriert wurde, so müssen Sie diesen zuerst registrieren. (OSCSTAMM:152)",
  OSCSTAMM_277: "ist in Erledigung. (OSCSTAMM:277)",
  OSCSTAMM_275: "ist in Durchführung. (OSCSTAMM:275)",
  OSCSTAMM_273: "ist in Prüfung. (OSCSTAMM:273)",
  OSCSTAMM_201: "Die aktuelle Abgabe des Dossiers darf hier niemals manuell erfasst werden. Sie müssen dazu unbedingt die obige Funktion 'Abgabe registrieren' verwenden. (OSCSTAMM:201)",
  OSCSTAMM_202: "Der aktuelle Erhalt des Dossiers darf hier niemals manuell erfasst werden. Sie müssen dazu unbedingt die obige Funktion 'Erhalt registrieren' verwenden. (OSCSTAMM:202)",
  OSCSTAMM_203: "Die Abgabe oder der Erhalt eines Dossiers darf hier niemals manuell erzeugt werden. Sie müssen dazu unbedingt die obigen Funktion 'Erhalt / Abgabe registrieren' verwenden. (OSCSTAMM:203)",
  OSCSTAMM_204: "Der Chronik-Eintrag darf nicht in der Zukunft liegen. (OSCSTAMM:204)",
  OSCSTAMM_205: "Zwei Chronik-Einträge am gleichem Tag sind nicht erlaubt. (OSCSTAMM:205)",
  OSCSTAMM_206: "Pro Tag kann maximal ein Dossier-Ereignis registriert werden. Es wurde heute bereits ein Dossier-Ereignis registriert. (OSCSTAMM:206)",
  OSCSTAMM_208: "Es ist bereits ein offenes Gesuch vorhanden. Soll der Dossier-Erhalt trotzdem registriert werden? (OSCSTAMM:208)",
  OSCSTAMM_209: "Es ist bereits ein offener Entscheid vorhanden! Soll der Dossier-Erhalt trotzdem registriert werden? (OSCSTAMM:209)",
  OSCSTAMM_210: "Beim Erhalt eines Dossiers sollten üblicherweise die erhaltenen Gesuche und Entscheide nacherfasst werden, falls solche vorhanden sind. Vergessen Sie nicht diese Daten nachträglich noch zu erfassen. (OSCSTAMM:210)",
  OSCSTAMM_211: "Das Ereignis in der Dossier-Chronik dennoch löschen.  (OSCSTAMM:211)"
};

module.exports = {
  CSS_ACTIVE_FORM,
  CSS_OPACITY1,
  CSS_OPACITY1_ACTIVE,
  MIN_TIMEOUT,
  SHORT_TIMEOUT,
  LONG_TIMEOUT,
  DEFAULT_TIMEOUT,
  COLOR,
  MSG
};

