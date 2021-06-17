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
      "Causes of decline and a system of effective restoration of priority habitat types of subalpine grasslands (SUTR).",
    id: "SS03010065",
    finance: "Technology agency of the Czech Republic",
    period: "01/2021–12/2023",
    mainResearcher: "Radim Hédl",
    coResearchers:
      "Marie Mrázková (Agrovýzkum Rapotín), Jakub Houška (Silva Tarouca Research Institute for Landscape and Ornamental Gardening (RILOG)",
    teamMembers:
      "Přemysl Bobek, Lydie Dudová, Markéta Chudomelová, Radim Hédl, Péter Szabó",
    description:
      "Main aim of this project is an effective restoration and management of priority habits of subalpine grasslands. These important European habitats are currently dying out on a large scale in the Hrubý Jeseník Mts., and the nature conservation authority is urgently looking for an effective solution. Based on a comprehensive research of possible causes, combining an observational and experimental approach, a methodology with measures for short-term restoration will be developed. Using newly obtained data, the long-term use of the subalpine treeless area of the Hrubý Jeseník Mts. will be evaluated and management strategy will be formulated.",
  },
  {
    name:
      "Biodiversity, disturbance history and soil memory: testing the Holocene continuity of species rich forest-steppe ecosystems.",
    id: " GA20-09895S",
    finance: "Czech Science Foundation",
    period: "01/2020–12/2022",
    mainResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    coResearchers:
      "Pavel Šamonil (The Silva Tarouca Research Institute for Landscape and Ornamental Gardening), Michal Hájek (Masaryk University, Faculty of Science)",
    teamMembers:
      "Petra Hájková, Kristýna Hošková, Jana Jiroušková, Jan Roleček",
    description:
      "The aim of the project is to reconstruct the development of species-rich forest-steppe ecosystems in the eastern part of Central Europe using multi-proxy paleoecological analysis and synthesis of vegetation data and to test the hypothesis of their Holocene continuity and identify the main drivers of their dynamics.",
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
        </Link>
        &nbsp; (Botanický ústav, AV ČR), Vojtěch Abraham (Univerzita Karlova,
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
      "Srovnání pylových depozic v tundře centrální Evropy a v subarktických oblastech (POLLDEPO).",
    id: "FP 72007-2013, INTERACT grant agreement 262693",
    finance: "Interact Transnational Access, European commission",
    period: "05/2014–12/2020",
    mainResearcherF: (
      <span>
        <Link to="/people/" state={{ person: "svitavska" }}>
          Helena Svitavská Svobodová
        </Link>
        &nbsp; (Botanický ústav AV ČR)
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
        FP7/2007-2013 / <strong>ERC Grant</strong> agreement no 278065
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
        Dudová, Eva Jamrichová, Helena Svitavská Svobodová.&nbsp;
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
      name: "Lowland woodland in the perspective of theNížinné lesy v perspektivě historického vývoje historical development.",
      id: " IAA600050812",
      finance: "Grant Agency of the Czech Academy of Sciences",
      period: "01/2008–12/2012",
      mainResearcher: "Radim Hédl",
      teamMembers:
        "Péter Szabó, Eva Jamrichová, Tereza Klinerová, Martin Kopecký, Jana Müllerová, Barbora Pelánková, Ondřej Vild",
      description:
        "Střední Evropa je přirozeně lesní oblast. Vegetační pokryv byl v průběhu Holocénu, mimo přírodních procesů, hluboce ovlivněn lidskou činností. V České republice jsou vztahy mezi přírodními faktory, strukturou a složením lesa prostudovány poměrně podrobně. Naproti tomu zatím prakticky neexistuje výzkum zaměřený na to, jak člověkem daná historie formovala lesy. Navržený projekt spojí interdisciplinárním způsobem metody přírodních a humanitních věd (paleoekologie, archeologie, historie, ekologie). Studováno bude 5 nížinných lokalit. Budou popsány a za použití GIS porovnány prostorovo-časové souvislosti v lesích s historickou kontinuitou a bez ní. Projekt se zaměří na význam časové kontinuity a minulých forem hospodaření ve vztahu k současným vlastnostem a kvalitám lesa. Budou navržena pravidla hospodaření pro udržení daných kvalit do budoucna.",
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
      "Hidden human prehistoric activities in the mountains. Archaeological and pollen evidence from the Šumava Mountains.",
    id: "GA17-17909S",
    finance: "Czech Science Foundation",
    period: "01/2017–12/2019",
    mainResearcherF:
      "Dagmar Dreslerová (Institute of Archeology, CAS, Prague)",
    coResearchers: (
      <span>
        <Link to="/people/" state={{ person: "svitavska" }}>
          Helena Svitavská Svobodová
        </Link>
        &nbsp; (Institute of Botany, CAS, Průhonice), Vojtěch Abraham (Charles University, Faculty of Science, Prague)
      </span>
    ),
    teamMembers: "Helena Svitavská Svobodová, Přemysl Bobek, Irena Krausová",
    description:
      "The prehistory and early history of the Šumava Mountains as seen through anthropogenic pollen indicators and charcoal data: The first large-scale study evaluates the human impact on mountain areas north from the Alps during the Late Holocene. It contributes to the debate on human subsistence strategies outside permanent settlement areas. We assessed past human impacts on forest vegetation in the largest wilderness area in Central Europe. Palaeoecological insight on modes of anthropogenic activities took place in lower mountains which are frequently considered to be virtually undisturbed by humans up to High Medieval colonization. Pollen records from small peat bog enabled us to establish the link with archaeological data from nearby La Tène site. Were-assessed a signal of anthropogenic pollen indicators which occur in other records available in Šumava. Multiple-site charcoal accumulation records revealed regional-scale trends in fire activity and we linked it with extensive non-agricultural uses such as hunting. Further we used modelling prehistoric settlement activities based on surface and sub-surface surveys.",
  },
    name: "Origin of diversity of Central European landscapes: using recent pollen and vegetation models to reconstruct historical biodiversity changes.",
    id: "GA16-10100S",
    finance: "Czech science foundation",
    period: "01/2016–12/2018",
    mainResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    coResearchers:
      "Vojtěch Abraham (Charles University, Faculty of Science, Prague)",
    teamMembers:
      "Eva Jamrichová, Zuzana Plesková, Jan Roleček, Ondřej Vild, Helena Svitavská Svobodová",
    description:
      "This project aims to reconstruct Holocene changes in vegetation diversity in two contrasting landscapes: the Pannonian part of southern Moravia with high species richness and the Bohemian-Moravian Highlands with low species richness. We will employ modern quantitative methods based on comparison of diversity of recent pollen assemblages and species richness of recent vegetation. The inferred relationships will be then used to construct an algorithm that will be employed in interpretation of past changes of vegetation diversity in the two compared landscapes using pollen profiles covering the whole Holocene. This can help us also to better predict the biodiversity changes following the ongoing climate change. The project will include a methodological study comparing suitability of different sources of recent pollen (moss pollsters, lake sediments) for pollen productivity studies.",
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
        (Institute of Botany, CAS)
      </span>
    ),
    teamMembers: "Helena Svitavská Svobodová, Přemysl Bobek",
    description:
      "The project aims to relate annual pollen depositions as recorded in pollen traps with mapped vegetation in tundra ecosystems on the south- northern gradient from Krkonoše Mts (Czech Republic) via tundra to the northernmost presence of trees in Abisko to woodless arctic tundra beyond the polar circle (Svalbard; granted by another sources). Pollen monitoring of Krkonoše Mts tundra started 20 years ago and brought useful long-term insights of pollen depositions. Tundra-like vegetation there is, however, very limited and pollen deposition is biased by neighbouring temperate forests with Picea abies. Two pollen traps in Abisko have been installed already in 2009, one by the lake Tornetrask and the other in the mountain range above Abisko. We would like to provide vegetation mapping around pollen traps to complete vegetation - pollen relationships in Lappland boreal tundra beyond the polar circle. The results will comprise ad1) pollen depositions in the different tundra regions, ad2) estimates regional pollen signals and background of pollen input, ad3) interpretation of fossil pollen data.",
  },
  {
    name:
      "Long-term woodland dynamics in Central Europe: from estimations to a realistic model.",
    id: (
      <>
        FP7/2007-2013 / <strong>ERC Grant</strong> agreement no 278065
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
        Dudová, Eva Jamrichová, Helena Svitavská Svobodová.&nbsp;
        <i>Vegetation ecology</i>: Radim Hédl, Martin Kopecký, Martin Macek,
        Ondřej Vild. <i>GIS</i>: Jana Müllerová, Martin Kopecký, Martin Macek
        (also Vegetation ecology group)
      </>
    ),
    description: `The interdisciplinary LONGWOOD project connects several disciplines that deal with past environments. Its starting point is the assumption that the vegetation of Central Europe has been directly influenced by humans for at least eight millennia; the original forests have been gradually transformed into today’s agricultural landscape. However, there is more to this landscape change than the simple disappearance of woodland. Forests have been brought under various management regimes, which profoundly altered their structure and species composition. The details of this process are little known for two main reasons. The greatest obstacle is the lack of cooperation among the disciplines dealing with the subject. The second major problem is the differences in spatio-temporal scaling and resolution used by the individual disciplines. Existing studies either concern smaller territories, or cover large areas (continental to global) with the help of modelling-based generalizations rather than primary data from the past. Using an extensive range of primary sources from history, historical geography, palaeoecology, archaeology and ecology, this interdisciplinary project aims to reconstruct the long-term (Neolithic to present) patterns of woodland cover, structure, composition and management in a larger study region (Moravia, the Czech Republic, ca. 27,000 km2) with the highest spatio-temporal resolution possible. Causes for the patterns observed will be analyzed in terms of qualitative and quantitative factors, both natural and human-driven, and the patterns in the tree layer will be related to those in the herb layer, which constitutes the most important part of plant biodiversity in Europe. This project will introduce woodland management as an equal driving force into long-term woodland dynamics, thus fostering a paradigm shift in ecology towards construing humans as an internal, constitutive element of ecosystems. By integrating sources and methods from the natural sciences and the humanities, the project will contribute to a more reliable methodology for woodland management and conservation in Central Europe.`,
  },
  {
    name:
      "Pollen-based land-cover reconstruction - model testing and its implications for Holocene environmental change studies.",
    id: "KJB6111305",
    finance: "Grant Agency of the Czech Academy of Sciences",
    period: "2012–2015",
    mainResearcher: "Petr Kuneš (Charles University, Faculty of Science, Prague)",
    coResearcher: (
      <Link to="/people/" state={{ person: "rolecek" }}>
        Jan Roleček
      </Link>
    ),
    teamMembers:
      "Přemysl Bobek, Lydie Dudová, Barbora Obstová, Radim Hédl, Eva Jamrichová, Martin Kopecký, Dušan Lekeš, Zuzana Plesková, Jan Roleček, Péter Szabó",
    description:
      "This project aims to reconstruct land cover during the past 200 years in model areas of Central Europe in order to test the landscape reconstruction algorithm (LRA) with high-resolution historical data. After successfully tested and parameterized, the LRA can reconstruct the key stages of postglacial landscape and vegetation development with higher significance, and thus circumvent biases created by the direct interpretation of palynological records. We will collect high-resolution palynological data for model areas for the past 200 years, estimate vegetation cover with the LRA and compare this with historical records. To enhance estimations, we will study pollen productivity for important regional plant taxa. We will then apply the LRA on key stages of the Holocene to address questions concerning fluctuations of forest/open land ratio, human induced disturbance and ecosystem diversity changes. Results can improve our understanding of climate/vegetation interactions and human responses in the past as well as our ability to predict the functioning of future ecosystems.",
  },
  {
  name: "Past and present changes in Sudeten mountain bogs.",
  id: "GA206/08/0389",
  finance: "Czech Science Foundation",
  period: "01/2008–12/2012",
  mainResearcher:
    "Michal Hájek (Masaryk University, Faculty of Science)",
  coResearcher: "Radim Hédl",
  teamMembers: "Radim Hédl, Lydie Dudová, Ivan Tůma, Petr Holub",
  description:
    "Correct evaluation of ongoing man-induced changes in bogs merits not only short-time fertilization experiments provided by the majority of studies, but also the research on long- and medium-term changes. Parallel investigation of several taxonomic groups is also a useful approach. This project realised in ombrotrophic bogs in two Sudeten mountain ranges differing in deposition load will involve continuation and analysis of 20-years monitoring of water chemistry and vegetation in a net of 59 permanent plots, analysis of nutrients in Sphagnum, measurements of soil moisture and the decomposition rate, analysis of diversity of different organisms (higher plants, algae, fungi, Testacea) with respect to actual and long-term water chemistry, testing the paleorefugia/neorefugia concept (involving all island habitats in one region) and palaeoecological research in less explored region, involving study bogs as well as other mires in order to reconstruct the vegetation development, relative coverage of forests, rate of human alteration, changes in water regime and distribution of fens and bogs.",
  },
];
