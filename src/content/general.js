import { Link } from "gatsby";
import React from "react";

export const en = {
  menu: {
    menuHomepage: "Home",
    menuResearch: "Research",
    menuPeople: "People",
    menuProjects: "Projects",
    menuPublications: "Publications",
    menuLaboratory: "Laboratory",
    menuForStudents: "For Students",
    menuCollections: "Collections",
    menuLinks: "For Public",
  },
  footer: {
    addressBrno: "Address Brno:",
    institute: "Institute of Botany of the CAS, v.v.i.",
    name: "Laboratory of Paleoecology",
    streetBrno: "Lidická 25/27",
    zipBrno: "602 00 Brno",
    addressPruhonice: "Address Průhonice:",
    streetPruhonice: "Zámek 1",
    zipPruhonice: "252 43 Průhonice",

    contactBrno: "Brno:",
    contactNameRolda: (
      <>
        <Link
          to="/people/"
          state={{ person: "rolecek" }}
          style={{ color: "white" }}
        >
          Jan Roleček
        </Link>
      </>
    ),
    contactMailRolda: "jan.rolecek@ibot.cas.cz",
    contactPhoneRolda: "+420 541 126 218",
    contactMailBrno: "marketa.frankova@ibot.cas.cz",
    contactPhoneBrno: "+420 737 527 185 | +420 541 126 216",
    contactNameBrno: (
      <>
        <Link
          to="/people/"
          state={{ person: "frankova" }}
          style={{ color: "white" }}
        >
          Markéta Fránková
        </Link>
      </>
    ),
    contactPruhonice: "Průhonice:",
    contactNamePruhonice: (
      <>
        <Link
          to="/people/"
          state={{ person: "bobek" }}
          style={{ color: "white" }}
        >
          Přemysl Bobek
        </Link>
      </>
    ),
    contactMailPruhonice: "premysl.bobek@ibot.cas.cz",
    contactPhonePruhonice: "+420 777 477 785",
    contactNameSvobodova: (
      <>
        <Link
          to="/people/"
          state={{ person: "svitavska" }}
          style={{ color: "white" }}
        >
          Helena Svitavská Svobodová
        </Link>
      </>
    ),
    contactMailSvobodova: "helena.svitavska@ibot.cas.cz",
    contactPhoneSvobodova: "+420 271 015 427 | +420 271 015 334",
    socialSites: "Social sites:",
  },
  people: {
    people: "People",
    head: "Head of the lab",
    deputyHead: "Deputy heads of the lab",
    emerit: "Emeritus scientific researchers",
    researchers: "Researchers",
    technical: "Technical and administrative staff",
    phd: "PhD students",
  },
};

export const cz = {
  menu: {
    menuHomepage: "O nás",
    menuResearch: "Výzkum",
    menuPeople: "Lidé",
    menuProjects: "Projekty",
    menuPublications: "Publikace",
    menuLaboratory: "Laboratoř",
    menuForStudents: "Pro studenty",
    menuCollections: "Sbírky",
    menuLinks: "Pro veřejnost",
    menuContacts: "Kontakty",
  },
  footer: {
    addressBrno: "Adresa Brno:",
    institute: "Botanický ústav AV ČR, v.v.i.",
    name: "Paleoekologická laboratoř",
    streetBrno: "Lidická 25/27",
    zipBrno: "602 00 Brno",
    addressPruhonice: "Adresa Průhonice:",
    streetPruhonice: "Zámek 1",
    zipPruhonice: "252 43 Průhonice",

    contactBrno: "Vedoucí (Brno):",
    contactNameBrno: (
      <>
        <Link
          to="/people/"
          state={{ person: "frankova" }}
          style={{ color: "white" }}
        >
          Markéta Fránková
        </Link>
      </>
    ),
    contactMailBrno: "marketa.frankova@ibot.cas.cz",
    contactPhoneBrno: "+420 737 527 185 | +420 541 126 216",
    contactNameRolda: (
      <>
        <Link
          to="/people/"
          state={{ person: "rolecek" }}
          style={{ color: "white" }}
        >
          Jan Roleček
        </Link>
      </>
    ),
    contactMailRolda: "jan.rolecek@ibot.cas.cz",
    contactPhoneRolda: "+420 541 126 218",
    contactPruhonice: "Průhonice:",
    contactNamePruhonice: (
      <>
        <Link
          to="/people/"
          state={{ person: "bobek" }}
          style={{ color: "white" }}
        >
          Přemysl Bobek
        </Link>
      </>
    ),
    contactMailPruhonice: "premysl.bobek@ibot.cas.cz",
    contactPhonePruhonice: "+420 777 477 785",
    contactNameSvobodova: (
      <>
        <Link
          to="/people/"
          state={{ person: "svitavska" }}
          style={{ color: "white" }}
        >
          Helena Svitavská Svobodová
        </Link>
      </>
    ),
    contactMailSvobodova: "helena.svitavska@ibot.cas.cz",
    contactPhoneSvobodova: "+420 271 015 427 | +420 271 015 334",
    socialSites: "Sociální sítě:",
  },
  people: {
    people: "Lidé",
    head: "Vedoucí",
    deputyHead: "Zástupci vedoucího",
    researchers: "Vědečtí pracovníci",
    emerit: "Emeritní vědečtí pracovníci",
    technical: "Techničtí a administrativní pracovníci",
    phd: "Doktorandi",
  },
};
