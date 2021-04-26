import { Link } from "gatsby";
import React from "react";

export const en = {
  menu: {
    menuHomepage: "Homepage",
    menuResearch: "Research",
    menuPeople: "People",
    menuProjects: "Projects",
    menuPublications: "Publications",
    menuLaboratory: "Laboratory",
    menuForStudents: "For Students",
    menuCollections: "Collections",
    menuLinks: "Links",
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

    contactBrno: "Head of the lab (Brno):",
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
    contactPhoneBrno: "737527185",
    contactPhoneBrno2: "541 126 223",

    contactPruhonice: "Deputy head of the lab (Průhonice):",
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

    socialSites: "Social sites:",
  },
  people: {
    people: "People",
    head: "Head of the lab",
    deputyHead: "Deputy head of the lab",
    researchers: "Researchers",
    technical: "Technical and administrative staff",
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
    contactPhoneBrno: "737527185",
    contactPhoneBrno2: "541 126 223",

    contactPruhonice: "Zástupce vedoucí (Průhonice):",
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

    socialSites: "Sociální sítě:",
  },
  people: {
    people: "Lidé",
    head: "Vedoucí",
    deputyHead: "Zástupce vedoucího",
    researchers: "Vědečtí pracovníci",
    technical: "Techničtí a administrativní pracovníci",
  },
};
