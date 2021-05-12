import React from "react";
import { ALink } from "../components/atoms/StyledLink";
import { Link } from "gatsby";

export const generalEn = {
  id: "Identifikační kód projektu: ",
  finance: "Financování: ",
  period: "Období řešení: ",
  mainResearcher: "Hlavní řešitel: ",
  mainResearcherF: "Hlavní řešitelka: ",
  coResearchers: "Spoluřešitelé: ",
  coResearcher: "Spoluřešitel: ",
  teamMembers: "Členové týmu za BÚ: ",
  description: "Popis projektu: ",
  web: "Web projektu: ",
};
export const generalCz = {
  id: "Identifikační kód projektu: ",
  finance: "Financování: ",
  period: "Období řešení: ",
  mainResearcher: "Hlavní řešitel: ",
  mainResearcherF: "Hlavní řešitelka: ",
  coResearchers: "Spoluřešitelé: ",
  coResearcher: "Spoluřešitel: ",
  teamMembers: "Členové týmu za BÚ: ",
  description: "Popis projektu: ",
  web: "Web projektu: ",
};
export const actualCz = [
  {
    name:
      "Příčiny úpadku a systém účinné obnovy prioritních typů stanovišť subalpínských trávníků (SUTR).",
    id: "SS03010065",
    finance: "Technologická agentura ČR",
    period: "01/2021–12/2023",
    mainResearcher: "Radim Hédl",
    coResearchers:
      "Marie Mrázková (Agrovýzkum Rapotín), Jakub Houška (Výzkumný ústav krajinného a okrasného zahradnictví Silva Taroucy)",
    teamMembers:
      "Přemysl Bobek, Lydie Dudová, Markéta Chudomelová, Radim Hédl, Péter Szabó",
    description:
      "Hlavním cílem projektu je obnova a management prioritních typů stanovišť subalpínských trávníků. Tyto evropsky významné biotopy v Hrubém Jeseníku aktuálně velkoplošně odumírají a správa ochrany přírody urgentně hledá efektivní řešení. Na základě komplexního výzkumu možných příčin, kombinujícím observační a experimentální přístup, bude vytvořena metodika stanovující účinná opatření k obnově v krátkodobém horizontu. Nově získaná data umožní posoudit dlouhodobý kontext využívání subalpínského bezlesí Hrubého Jeseníku a formulovat strategii péče o daná stanoviště.",
  },
  {
    name:
      "Biodiverzita, historie disturbancí a půdní paměť: testování holocenní kontinuity druhově bohatých lesostepních ekosystémů.",
    id: " GA20-09895S",
    finance: "Grantová agentura ČR",
    period: "01/2020–12/2022",
    mainResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    coResearchers:
      "Pavel Šamonil (Výzkumný ústav Silva Taroucy pro krajinu a okrasné zahradnictví, v.v.i.), Michal Hájek (Masarykova univerzita, Přírodovědecká fakulta)",
    teamMembers:
      "Petra Hájková, Kristýna Hošková, Jana Jiroušková, Jan Roleček",
    description:
      "Cílem projektu je rekonstruovat vývoj druhově bohatých lesostepních ekosystémů ve východní části střední Evropy s využitím multi-proxy paleoekologické analýzy a syntézy vegetačních dat. Testovat hypotézu jejich holocenní kontinuity a identifikovat hlavní hybatele jejich dynamiky.",
  },
];

export const actualEn = [
  {
    name:
      "Příčiny úpadku a systém účinné obnovy prioritních typů stanovišť subalpínských trávníků (SUTR).",
    id: "SS03010065",
    finance: "Technologická agentura ČR",
    period: "01/2021–12/2023",
    mainResearcher: "Radim Hédl",
    coResearchers:
      "Marie Mrázková (Agrovýzkum Rapotín), Jakub Houška (Výzkumný ústav krajinného a okrasného zahradnictví Silva Taroucy)",
    teamMembers:
      "Přemysl Bobek, Lydie Dudová, Markéta Chudomelová, Radim Hédl, Péter Szabó",
    description:
      "Hlavním cílem projektu je obnova a management prioritních typů stanovišť subalpínských trávníků. Tyto evropsky významné biotopy v Hrubém Jeseníku aktuálně velkoplošně odumírají a správa ochrany přírody urgentně hledá efektivní řešení. Na základě komplexního výzkumu možných příčin, kombinujícím observační a experimentální přístup, bude vytvořena metodika stanovující účinná opatření k obnově v krátkodobém horizontu. Nově získaná data umožní posoudit dlouhodobý kontext využívání subalpínského bezlesí Hrubého Jeseníku a formulovat strategii péče o daná stanoviště.",
  },
  {
    name:
      "Biodiverzita, historie disturbancí a půdní paměť: testování holocenní kontinuity druhově bohatých lesostepních ekosystémů.",
    id: " GA20-09895S",
    finance: "Grantová agentura ČR",
    period: "01/2020–12/2022",
    mainResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    coResearchers:
      "Pavel Šamonil (Výzkumný ústav Silva Taroucy pro krajinu a okrasné zahradnictví, v.v.i.), Michal Hájek (Masarykova univerzita, Přírodovědecká fakulta)",
    teamMembers:
      "Petra Hájková, Kristýna Hošková, Jana Jiroušková, Jan Roleček",
    description:
      "Cílem projektu je rekonstruovat vývoj druhově bohatých lesostepních ekosystémů ve východní části střední Evropy s využitím multi-proxy paleoekologické analýzy a syntézy vegetačních dat. Testovat hypotézu jejich holocenní kontinuity a identifikovat hlavní hybatele jejich dynamiky.",
  },
];

export const completedCz = [
  {
    name:
      "Skryté aktivity v horských oblastech. Archeologický a paleoekologický výzkum na Šumavě.",
    id: "GA17-17909S",
    finance: "Grantová agentura ČR",
    period: "01/2017–12/2019",
    mainResearcherF:
      "Dagmar Dreslerová (Archeologický ústav AV ČR, Praha, v.v.i.)",
    coResearchers: (
      <span>
        <Link to="/people/" state={{ person: "svitavska" }}>
          Helena Svitavská Svobodová
        </Link>{" "}
        (Botanický ústav, AV ČR), Vojtěch Abraham (Univerzita Karlova,
        Přírodovědecká fakulta)
      </span>
    ),
    teamMembers: "Helena Svitavská Svobodová, Přemysl Bobek, Irena Krausová",
    description:
      "Pro projekt se stal klíčovým unikátní objev laténské lokality v montánní oblasti Šumavy. Rašeliniště v její blízkosti bude detailně vyhodnoceno paleoekologickými metodami pylové, makrozbytkové a mikrouhlíkové analýzy a poskytne informace o přírodním prostředí keltského osídlení. Modelovacími metodami kvantifikace krajiny REVEALS a LOVE bude z pylových záznamů odvozena zdrojová oblast šíření pylu s důrazem na původ antropogenních indikátorů. K historii vývoje vegetace se využije dalších již dříve analyzovaných 17 palynologických profilů, které budou radiokarbonově datovány a podrobeny detailní pylové analýze s vysokým stupněm rozlišení pro evidenci časového horizontu od 500 BC po přelom letopočtu. Cílem projektu je objasnění lidské činnosti a jejího vlivu na vývoj a diverzitu lesů na Šumavě.",
  },
  {
    name: "Původ diverzity středoevropské krajiny.",
    id: "GA16-10100S",
    finance: "Grantová agentura ČR",
    period: "01/2016–12/2018",
    mainResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    coResearchers:
      "Vojtěch Abraham (Univerzita Karlova, Přírodovědecká fakulta)",
    teamMembers:
      "Eva Jamrichová, Zuzana Plesková, Jan Roleček, Ondřej Vild, Helena Svitavská Svobodová",
    description:
      "Projekt je zaměřený na rekonstrukci holocenního vývoje druhové bohatosti vegetace ve dvou kontrastních krajinách: v panonské části jižní Moravy s velkou druhovou bohatostí a na Českomoravské vrchovině s malou druhovou bohatostí. Využity budou moderní kvantitativní metody založené na srovnání diverzity současných pylových spekter a druhové bohatosti současné vegetace. Výsledky srovnání poslouží ke konstrukci algoritmu, který bude použit pro interpretaci vývoje diverzity vegetace ve dvou porovnávaných oblastech na základě pylových profilů pokrývajících celý holocén. To nám může pomoci i pro zlepšení predikcí změn biodiverzity v důsledku současné změny klimatu. Součástí projektu bude metodická studie srovnávající využitelnost různých zdrojů recentního pylu (mechové polštáře, rybniční sedimenty) pro studium pylové produktivity.",
  },
  {
    name:
      "Comparison of related pollen depositions of tundra in central-European mountains and in subarctic region (POLLDEPO).",
    id: "FP 72007-2013, INTERACT grant agreement 262693",
    finance: "Interact Transnational Access, European commission",
    period: "05/2014–12/2020",
    mainResearcherF: (
      <span>
        <Link to="/people/" state={{ person: "svitavska" }}>
          Helena Svitavská Svobodová
        </Link>
        (Botanický ústav AV ČR)
      </span>
    ),
    teamMembers: "Helena Svitavská Svobodová, Přemysl Bobek",
    description:
      "Cílem projektu bylo srovnání ročních pylových depozic tak, jak jsou zaznamenávány v pylových pastech, s mapovanou vegetací tundry na severo-jižním gradientu of Krkonoš k tundře s nejsevernějším výskytem stromů v Abisku až po bezlesou arktickou tundru na Svalbardu (Svalbard; garantovano z jiného zdroje). Pylový monitoring ročních pylových pastí v Krkonoších, který začal před 20 lety, je významný pro pochopení pylových depozic v tundře. Tundrové depozice jsou vsak v podmínkách Krkonoš ovlivněny sousedícími temperátními lesy. Dvě pylové pasti byly v Abisku instalovány již před pěti lety. Známé pylové depozice ze všech lokalit budou srovnány s mapovanou vegetací pro 1) zjištění pylových depozic v tundře v rozdílných regionech Evropy, 2) rozlišení regionálních depozic a pylu přinášeného z větších vzdáleností a 3) pro interpretaci fosilních pozdně glaciálních pylových spekter.",
  },
  {
    name:
      "Dlouhodobá dynamika lesů ve střední Evropě: od odhadů k realistickému modelu (LONGWOOD).",
    id: (
      <>
        FP7/2007-2013 / <b>ERC Grant</b> agreement no 278065
      </>
    ),
    finance: "European Research Council",
    period: "2012–2016",
    web: <ALink href="http://longwood.cz/">http://longwood.cz/</ALink>,
    mainResearcher: (
      <ALink href="http://ekolbrno.ibot.cas.cz/zamestnanci/mgr-peter-szabo-phd/">
        Péter Szabó
      </ALink>
    ),
    teamMembers: (
      <>
        <i>Historical ecology</i>: Péter Szabó, Jan Kolář, Martin Kotačka, Lucie
        Křížová, Silvie Suchánková. <i>Palaeoecology</i>: Petr Kuneš, Lydie
        Dudová, Eva Jamrichová, Helena Svitavská Svobodová.{" "}
        <i>Vegetation ecology</i>: Radim Hédl, Martin Kopecký, Martin Macek,
        Ondřej Vild. <i>GIS</i>: Jana Müllerová, Martin Kopecký, Martin Macek
        (also Vegetation ecology group)
      </>
    ),
    description: `The interdisciplinary LONGWOOD project connects
        several disciplines that deal with past environments. Its starting point
        is the assumption that the vegetation of Central Europe has been
        directly influenced by humans for at least eight millennia; the original
        forests have been gradually transformed into today’s agricultural
        landscape. However, there is more to this landscape change than the
        simple disappearance of woodland. Forests have been brought under
        various management regimes, which profoundly altered their structure and
        species composition. The details of this process are little known for
        two main reasons. The greatest obstacle is the lack of cooperation among
        the disciplines dealing with the subject. The second major problem is
        the differences in spatio-temporal scaling and resolution used by the
        individual disciplines. Existing studies either concern smaller
        territories, or cover large areas (continental to global) with the help
        of modelling-based generalizations rather than primary data from the
        past. Using an extensive range of primary sources from history,
        historical geography, palaeoecology, archaeology and ecology, this
        interdisciplinary project aims to reconstruct the long-term (Neolithic
        to present) patterns of woodland cover, structure, composition and
        management in a larger study region (Moravia, the Czech Republic, ca.
        27,000 km2) with the highest spatio-temporal resolution possible. Causes
        for the patterns observed will be analyzed in terms of qualitative and
        quantitative factors, both natural and human-driven, and the patterns in
        the tree layer will be related to those in the herb layer, which
        constitutes the most important part of plant biodiversity in Europe.
        This project will introduce woodland management as an equal driving
        force into long-term woodland dynamics, thus fostering a paradigm shift
        in ecology towards construing humans as an internal, constitutive
        element of ecosystems. By integrating sources and methods from the
        natural sciences and the humanities, the project will contribute to a
        more reliable methodology for woodland management and conservation in
        Central Europe.`,
  },
  {
    name:
      "Rekonstrukce vegetace na základě pylových dat – testování modelu a jeho význam pro studium holocénních změn prostředí.",
    id: "KJB6111305",
    finance: "Grantová agentura akademie věd České republiky",
    period: "2012–2015",
    mainResearcher: "Petr Kuneš (Přírodovědecká fakulta Univerzita Karlova)",
    coResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    teamMembers:
      "Přemysl Bobek, Lydie Dudová, Barbora Obstová, Radim Hédl, Eva Jamrichová, Martin Kopecký, Dušan Lekeš, Zuzana Plesková, Jan Roleček, Péter Szabó",
    description:
      "This project aims to reconstruct land cover during the past 200 years in model areas of Central Europe in order to test the landscape reconstruction algorithm (LRA) with high-resolution historical data. After successfully tested and parameterized, the LRA can reconstruct the key stages of postglacial landscape and vegetation development with higher significance, and thus cirt/open land ratio, human induced disturbance and ecosystem diversity changes. Results can improve our understanding of climate/vegetation interactions and human responsecumvent biases created by the direct interpretation of palynological records. We will collect high-resolution palynological data for model areas for the past 200 years, estimate vegetation cover with the LRA and compare this with historical records. To enhance estimations, we will study pollen productivity for important regional plant taxa. We will then apply the LRA on key stages of the Holocene to address questions concerning fluctuations of foress in the past as well as our ability to predict the functioning of future ecosystems.",
  },
  {
    name: "Lowland woodland in the perspective of the historical development.",
    id: " ",
    finance: "Grantová agentura ČR",
    period: "01/2008–12/2012",
    mainResearcher: "Radim Hédl",
    teamMembers:
      "Péter Szabó, Eva Jamrichová, Tereza Klinerová, Martin Kopecký, Jana Müllerová, Barbora Pelánková, Ondřej Vild",
    description:
      "Central Europe is a naturally forest-dominated area. In addition to natural processes, the vegetation cover has been profoundly influenced by humans during the Holocene. In the CzechRepublic, the relationships between environmental factors, woodland structure and vegetation composition have been analyzed in detail. However, until very recently, there has been virtually no research on how human-driven history shaped the woodlands. This project integrates the methods of natural sciences and humanities (palaeoecology, archeology, history, ecology) in an interdisciplinary manner to study several key sites in the lowlands. They are Pálava and Dúbrava in S Moravia and Český kras in C Bohemia. The research extends to other, less intensively studied sites as well. Vegetation development in the Holocene and historical woodland management have been studied and results compared. Spatio-temporal patterns in vegetation have been analyzed, focusing on long-term changes, impact of forest continuity, and influence of experimental management on biodiversity of the forests. Management guidelines for the future maintenance of valuable woods have been proposed.",
  },
  {
    name: "Současné a historické změny na horských rašeliništích Sudet.",
    id: "GA206/08/0389",
    finance: "Grantová agentura ČR",
    period: "01/2008–12/2012",
    mainResearcher:
      "Michal Hájek (Přírodovědecká fakulta Masarykova univerzita)",
    coResearcher: "Radim Hédl",
    teamMembers: "Radim Hédl, Lydie Dudová, Ivan Tůma, Petr Holub",
    description:
      "Správné vyhodnocení změn na vrchovištích, vyvolaných lidskou činností, vyžaduje nejen většinou prováděné krátkodobé fertilizační experimenty, ale rovněž výzkum dlouhodobých a střednědobých změn. Souběžný výzkum několika taxonomických skupin je rovněž užitečným přístupem. Tento projekt, realizovaný ve dvou sudetských pohořích lišících se stupněm depoziční zátěže (Jizerské hory, Jeseníky), zahrnuje pokračování a vyhodnocení 20-letého monitoringu chemismu vody a vegetace v síti 59 trvalých ploch, analýzu živin v rašelinících, měření půdní vlhkosti a rychlosti dekompozice, analýzu diverzity různých organismů (vyšší rostliny, řasy, houby, krytenky) vzhledem k aktuálnímu a dlouhodobému chemismu vody, testování konceptu paleo- a neorefugií se zahrnutím všech ostrovních biotopů v jednom území a paleoekologický výzkum v méně prozkoumaných Jeseníkách, který bude zahrnovat jak studovaná vrchoviště, tak i ostatní rašeliniště, aby bylo možné rekonstruovat vývoj vegetace, rozšíření vrchovišť a",
  },
];

export const completedEn = [
  {
    name:
      "Skryté aktivity v horských oblastech. Archeologický a paleoekologický výzkum na Šumavě.",
    id: "GA17-17909S",
    finance: "Grantová agentura ČR",
    period: "01/2017–12/2019",
    mainResearcherF:
      "Dagmar Dreslerová (Archeologický ústav AV ČR, Praha, v.v.i.)",
    coResearchers: (
      <span>
        <Link to="/people/" state={{ person: "svitavska" }}>
          Helena Svitavská Svobodová
        </Link>{" "}
        (Botanický ústav, AV ČR), Vojtěch Abraham (Univerzita Karlova,
        Přírodovědecká fakulta)
      </span>
    ),
    teamMembers: "Helena Svitavská Svobodová, Přemysl Bobek, Irena Krausová",
    description:
      "Pro projekt se stal klíčovým unikátní objev laténské lokality v montánní oblasti Šumavy. Rašeliniště v její blízkosti bude detailně vyhodnoceno paleoekologickými metodami pylové, makrozbytkové a mikrouhlíkové analýzy a poskytne informace o přírodním prostředí keltského osídlení. Modelovacími metodami kvantifikace krajiny REVEALS a LOVE bude z pylových záznamů odvozena zdrojová oblast šíření pylu s důrazem na původ antropogenních indikátorů. K historii vývoje vegetace se využije dalších již dříve analyzovaných 17 palynologických profilů, které budou radiokarbonově datovány a podrobeny detailní pylové analýze s vysokým stupněm rozlišení pro evidenci časového horizontu od 500 BC po přelom letopočtu. Cílem projektu je objasnění lidské činnosti a jejího vlivu na vývoj a diverzitu lesů na Šumavě.",
  },
  {
    name: "Původ diverzity středoevropské krajiny.",
    id: "GA16-10100S",
    finance: "Grantová agentura ČR",
    period: "01/2016–12/2018",
    mainResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    coResearchers:
      "Vojtěch Abraham (Univerzita Karlova, Přírodovědecká fakulta)",
    teamMembers:
      "Eva Jamrichová, Zuzana Plesková, Jan Roleček, Ondřej Vild, Helena Svitavská Svobodová",
    description:
      "Projekt je zaměřený na rekonstrukci holocenního vývoje druhové bohatosti vegetace ve dvou kontrastních krajinách: v panonské části jižní Moravy s velkou druhovou bohatostí a na Českomoravské vrchovině s malou druhovou bohatostí. Využity budou moderní kvantitativní metody založené na srovnání diverzity současných pylových spekter a druhové bohatosti současné vegetace. Výsledky srovnání poslouží ke konstrukci algoritmu, který bude použit pro interpretaci vývoje diverzity vegetace ve dvou porovnávaných oblastech na základě pylových profilů pokrývajících celý holocén. To nám může pomoci i pro zlepšení predikcí změn biodiverzity v důsledku současné změny klimatu. Součástí projektu bude metodická studie srovnávající využitelnost různých zdrojů recentního pylu (mechové polštáře, rybniční sedimenty) pro studium pylové produktivity.",
  },
  {
    name:
      "Comparison of related pollen depositions of tundra in central-European mountains and in subarctic region (POLLDEPO).",
    id: "FP 72007-2013, INTERACT grant agreement 262693",
    finance: "Interact Transnational Access, European commission",
    period: "05/2014–12/2020",
    mainResearcherF: (
      <span>
        <Link to="/people/" state={{ person: "svitavska" }}>
          Helena Svitavská Svobodová
        </Link>{" "}
        (Botanický ústav AV ČR)
      </span>
    ),
    teamMembers: "Helena Svitavská Svobodová, Přemysl Bobek",
    description:
      "Cílem projektu bylo srovnání ročních pylových depozic tak, jak jsou zaznamenávány v pylových pastech, s mapovanou vegetací tundry na severo-jižním gradientu of Krkonoš k tundře s nejsevernějším výskytem stromů v Abisku až po bezlesou arktickou tundru na Svalbardu (Svalbard; garantovano z jiného zdroje). Pylový monitoring ročních pylových pastí v Krkonoších, který začal před 20 lety, je významný pro pochopení pylových depozic v tundře. Tundrové depozice jsou vsak v podmínkách Krkonoš ovlivněny sousedícími temperátními lesy. Dvě pylové pasti byly v Abisku instalovány již před pěti lety. Známé pylové depozice ze všech lokalit budou srovnány s mapovanou vegetací pro 1) zjištění pylových depozic v tundře v rozdílných regionech Evropy, 2) rozlišení regionálních depozic a pylu přinášeného z větších vzdáleností a 3) pro interpretaci fosilních pozdně glaciálních pylových spekter.",
  },
  {
    name:
      "Dlouhodobá dynamika lesů ve střední Evropě: od odhadů k realistickému modelu (LONGWOOD).",
    id: (
      <>
        FP7/2007-2013 / <b>ERC Grant</b> agreement no 278065
      </>
    ),
    finance: "European Research Council",
    period: "2012–2016",
    web: <ALink href="http://longwood.cz/">http://longwood.cz/</ALink>,
    mainResearcher: (
      <ALink href="http://ekolbrno.ibot.cas.cz/zamestnanci/mgr-peter-szabo-phd/">
        Péter Szabó
      </ALink>
    ),
    teamMembers: (
      <>
        <i>Historical ecology</i>: Péter Szabó, Jan Kolář, Martin Kotačka, Lucie
        Křížová, Silvie Suchánková. <i>Palaeoecology</i>: Petr Kuneš, Lydie
        Dudová, Eva Jamrichová, Helena Svitavská Svobodová.{" "}
        <i>Vegetation ecology</i>: Radim Hédl, Martin Kopecký, Martin Macek,
        Ondřej Vild. <i>GIS</i>: Jana Müllerová, Martin Kopecký, Martin Macek
        (also Vegetation ecology group)
      </>
    ),
    description: `The interdisciplinary LONGWOOD project connects
        several disciplines that deal with past environments. Its starting point
        is the assumption that the vegetation of Central Europe has been
        directly influenced by humans for at least eight millennia; the original
        forests have been gradually transformed into today’s agricultural
        landscape. However, there is more to this landscape change than the
        simple disappearance of woodland. Forests have been brought under
        various management regimes, which profoundly altered their structure and
        species composition. The details of this process are little known for
        two main reasons. The greatest obstacle is the lack of cooperation among
        the disciplines dealing with the subject. The second major problem is
        the differences in spatio-temporal scaling and resolution used by the
        individual disciplines. Existing studies either concern smaller
        territories, or cover large areas (continental to global) with the help
        of modelling-based generalizations rather than primary data from the
        past. Using an extensive range of primary sources from history,
        historical geography, palaeoecology, archaeology and ecology, this
        interdisciplinary project aims to reconstruct the long-term (Neolithic
        to present) patterns of woodland cover, structure, composition and
        management in a larger study region (Moravia, the Czech Republic, ca.
        27,000 km2) with the highest spatio-temporal resolution possible. Causes
        for the patterns observed will be analyzed in terms of qualitative and
        quantitative factors, both natural and human-driven, and the patterns in
        the tree layer will be related to those in the herb layer, which
        constitutes the most important part of plant biodiversity in Europe.
        This project will introduce woodland management as an equal driving
        force into long-term woodland dynamics, thus fostering a paradigm shift
        in ecology towards construing humans as an internal, constitutive
        element of ecosystems. By integrating sources and methods from the
        natural sciences and the humanities, the project will contribute to a
        more reliable methodology for woodland management and conservation in
        Central Europe.`,
  },
  {
    name:
      "Rekonstrukce vegetace na základě pylových dat – testování modelu a jeho význam pro studium holocénních změn prostředí.",
    id: "KJB6111305",
    finance: "Grantová agentura akademie věd České republiky",
    period: "2012–2015",
    mainResearcher: "Petr Kuneš (Přírodovědecká fakulta Univerzita Karlova)",
    coResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    teamMembers:
      "Přemysl Bobek, Lydie Dudová, Barbora Obstová, Radim Hédl, Eva Jamrichová, Martin Kopecký, Dušan Lekeš, Zuzana Plesková, Jan Roleček, Péter Szabó",
    description:
      "This project aims to reconstruct land cover during the past 200 years in model areas of Central Europe in order to test the landscape reconstruction algorithm (LRA) with high-resolution historical data. After successfully tested and parameterized, the LRA can reconstruct the key stages of postglacial landscape and vegetation development with higher significance, and thus cirt/open land ratio, human induced disturbance and ecosystem diversity changes. Results can improve our understanding of climate/vegetation interactions and human responsecumvent biases created by the direct interpretation of palynological records. We will collect high-resolution palynological data for model areas for the past 200 years, estimate vegetation cover with the LRA and compare this with historical records. To enhance estimations, we will study pollen productivity for important regional plant taxa. We will then apply the LRA on key stages of the Holocene to address questions concerning fluctuations of foress in the past as well as our ability to predict the functioning of future ecosystems.",
  },
  {
    name: "Lowland woodland in the perspective of the historical development.",
    id: " ",
    finance: "Grantová agentura ČR",
    period: "01/2008–12/2012",
    mainResearcher: "Radim Hédl",
    teamMembers:
      "Péter Szabó, Eva Jamrichová, Tereza Klinerová, Martin Kopecký, Jana Müllerová, Barbora Pelánková, Ondřej Vild",
    description:
      "Central Europe is a naturally forest-dominated area. In addition to natural processes, the vegetation cover has been profoundly influenced by humans during the Holocene. In the CzechRepublic, the relationships between environmental factors, woodland structure and vegetation composition have been analyzed in detail. However, until very recently, there has been virtually no research on how human-driven history shaped the woodlands. This project integrates the methods of natural sciences and humanities (palaeoecology, archeology, history, ecology) in an interdisciplinary manner to study several key sites in the lowlands. They are Pálava and Dúbrava in S Moravia and Český kras in C Bohemia. The research extends to other, less intensively studied sites as well. Vegetation development in the Holocene and historical woodland management have been studied and results compared. Spatio-temporal patterns in vegetation have been analyzed, focusing on long-term changes, impact of forest continuity, and influence of experimental management on biodiversity of the forests. Management guidelines for the future maintenance of valuable woods have been proposed.",
  },
  {
    name: "Současné a historické změny na horských rašeliništích Sudet.",
    id: "GA206/08/0389",
    finance: "Grantová agentura ČR",
    period: "01/2008–12/2012",
    mainResearcher:
      "Michal Hájek (Přírodovědecká fakulta Masarykova univerzita)",
    coResearcher: "Radim Hédl",
    teamMembers: "Radim Hédl, Lydie Dudová, Ivan Tůma, Petr Holub",
    description:
      "Správné vyhodnocení změn na vrchovištích, vyvolaných lidskou činností, vyžaduje nejen většinou prováděné krátkodobé fertilizační experimenty, ale rovněž výzkum dlouhodobých a střednědobých změn. Souběžný výzkum několika taxonomických skupin je rovněž užitečným přístupem. Tento projekt, realizovaný ve dvou sudetských pohořích lišících se stupněm depoziční zátěže (Jizerské hory, Jeseníky), zahrnuje pokračování a vyhodnocení 20-letého monitoringu chemismu vody a vegetace v síti 59 trvalých ploch, analýzu živin v rašelinících, měření půdní vlhkosti a rychlosti dekompozice, analýzu diverzity různých organismů (vyšší rostliny, řasy, houby, krytenky) vzhledem k aktuálnímu a dlouhodobému chemismu vody, testování konceptu paleo- a neorefugií se zahrnutím všech ostrovních biotopů v jednom území a paleoekologický výzkum v méně prozkoumaných Jeseníkách, který bude zahrnovat jak studovaná vrchoviště, tak i ostatní rašeliniště, aby bylo možné rekonstruovat vývoj vegetace, rozšíření vrchovišť a",
  },
];
