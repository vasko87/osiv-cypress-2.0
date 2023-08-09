const EIN = {
  GET_AMOUNT: `/web/Resource/Osiv.Eingliederung.Stamm.EingliederungQueryStammBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22stamm_id%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3ASTAMMID%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&skip=0&top=50&clientRequestId=9496&filter=%7B%22top%22%3A50%7D&_ts=168983731-3902984323-114`,
  GET_EIN: `/web/Resource/Osiv.Eingliederung.Eingliederung.EingliederungAndernBT?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22eingliederung_id%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3AEINID%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&clientRequestId=8811&filter=%7B%7D&_ts=169031312-1210513778-170`,
  GET_SEN_AMOUNT: `/web/Resource/Osiv.Sendung.Sendung.Query.SendungQueryBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22stamm_id%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3ASTAMMID%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22ursprung%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3A%22EIN%22%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22ursprung_id%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3AEINID%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22geloescht%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3A%22False%22%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22includeabgeschlossen%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3Atrue%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22includeaufbewahrung%22%2C%22operator%22%3A%22eq%22%2C%22value%22%3Atrue%7D%5D%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&skip=0&top=50&clientRequestId=9606&filter=%7B%22NamedQuery%22%3A%7B%22name%22%3A%22ContextValue%22%2C%22parameters%22%3A%5B%7B%22name%22%3A%22ContextValue%22%2C%22type%22%3A%22character%22%2C%22value%22%3A%22SendungDefaultFilter%22%7D%5D%7D%2C%22orderBy%22%3A%22sortierung_dat%20desc%2Csendung_id%20desc%22%2C%22top%22%3A50%7D&_ts=168992812-2602204104-81`,
  GET_TER_AMOUNT: `/web/Resource/Osiv.Termin.Termin.Query.TerminQueryBE?akQuery=%7B%22ui_context%22%3A%7B%22controlType%22%3A%22%22%2C%22container%22%3A%22%22%7D%2C%22filters%22%3A%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22ursprung%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3A%22EIN%22%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22stamm_id%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3ASTAMMID%7D%5D%7D%2C%7B%22logic%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22field%22%3A%22ursprung_id%22%2C%22operator%22%3A%22EQ%22%2C%22value%22%3AEINID%7D%5D%7D%5D%7D%2C%22fieldlist%22%3A%22*%22%7D&skip=0&top=50&clientRequestId=2766&filter=%7B%22orderBy%22%3A%22Termin_Dat%2CTermin_Zeit%22%2C%22top%22%3A50%7D&_ts=169031312-1210513778-199`
};

module.exports = {EIN};