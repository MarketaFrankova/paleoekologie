import React from "react";
import { Link } from "gatsby";
import { ALink } from "../components/atoms/StyledLink";

export const czImgTitles = {
  image1: "Výjezd do terénu během doktorského studia.",
  image2: "Popisování právě odebraného sedimentu.",
  image3: "Vzorkování sedimentu pro pylovou analýzu.",
  image4: "Vzorkování sedimentu pro pylovou analýzu.",
  image5: "Příprava preparátů v laboratoři.",
  image6: "Určování rozsivek během stáže pro středoškoláky Otevřená věda.",
  image7: "Mapování vegetace.",
  image8: "Pedologický výzkum.",
  image9: "Mapování vegetace.",
};
export const enImgTitles = {
  image1: "In the field during PhD studies.",
  image2: "Description of just sampled sediment.",
  image3: "Subsampling of sediment for pollen analysis.",
  image4: "Subsampling of sediment for pollen analysis.",
  image5: "Preparation of pollen slides in the laboratory.",
  image6:
    "Identifying diatoms as a part of an internship for high school students called Otevřená věda (Open science).",
  image7: "Vegetation survey.",
  image8: "Pedologic investigation.",
  image9: "Vegetation survey.",
};

export const en = {
  highSchoolTitle: "Topics for high school students",
  highSchoolDescription: (
    <span>
      Let us learn about the past of nature in time and space. Do you want to join us? Have a look at the offer of internships for high school students Open Science.&nbsp;
      <ALink href="https://www.ibot.cas.cz/cs/otevrena-veda/">
      Open Science
      </ALink>
      .
    </span>
  ),
  universityTitle: "Topics for the University students",
  universityDescription:
    "Are you interested in paleoecology? Choose from the topics of Bachelor´s and Master´s Theses according to the supervisors:",
  supervisors: [
    {
      supervisor: (
        <Link to="/people/" state={{ person: "hajkova" }}>
          Petra Hájková
        </Link>
      ),
      theses: [
        {
          name:
            "Development of spring fens of the Western Carpathians - influence of autogenic succession, climate and human impact",
          description:
            "The topic suitable for both diploma and bachelor thesis includes sediment processing in the laboratory and identification of plant macro-remains. It would be appropriate to visit localities and to make a list of species that occur here today, or to obtain phytocenological records. The work would consist in macro-remain analysis of profiles taken at springs in the Western Carpathians (eg. in central Slovakia: profiles Zbojská, Pohorelská Maša, Meandre Hrona, etc.), from which the results of pollen analysis and radiocarbon dating are available, or sediment from elsewhere. The aim will be to reconstruct the development of mire vegetation in the past on the basis of plant remains preserved in sediment (seeds, wood, mosses). In general, there can be several processes in wetlands that affect the development of vegetation. As a result of the accumulation of organic sediment, the influence of underground, often calcium-rich water weakens and the conversion of calcareous fens into acidic mire types (autogenous succession) occurs. In contrast, climate change (precipitation, temperature) can affect whether the mire is open or overgrown with woody plants (most often alder or spruce). Through their activities in the landscape, people usually deforest spring fens and disturb the surface during grazing or mowing. The aim of the work would be to identify which factors were applied in the development of mire vegetation, when the forest spring was changed to an open mire and how the human management changed in connection with the intensity of settlement. It is also possible to monitor the migration, survival or extinction of mire species, which are rare in the Western Carpathians today.",
        },
      ],
    },
    {
      supervisor: (
        <span>
          <Link to="/people/" state={{ person: "jamrichova" }}>
            Eva Jamrichová
          </Link>
          &nbsp; a&nbsp;
          <Link to="/people/" state={{ person: "dudova" }}>
            Lydie Dudová
          </Link>
        </span>
      ),
      theses: [
        {
          name: "Interactions among humans and vegetation in mountain areas",
          description:
            "Systematic paleoecological research of mountain areas, for example on the border of coniferous and deciduous biomes, with a focus on the detection of human activities, is still neglected in some regions. The analysis of the paleoecological record can provide a number of answers not only with regard to the use of the human landscape, but also to the human impact on the original forest stands (migration and spread of arboreal species). The work will consist of pollen analysis of the selected profiles extracted in the mountain areas of the Western Carpathians, for example in the Beskydy or Šumava Mountains. Pollen analysis will focus on the reconstruction of vegetation development in the monitored area with an emphasis on detailed indications of human presence in the landscape as manifested in the pollen records. The aim of the diploma Thesis will be to clarify the causes of forest dynamics in mountain areas, either due to various human activities (deforestation due to pasture propagation, selective tree cutting, mineral extraction) or natural phenomena such as climate change or fire events.",
        },
        {
          name:
            "Human influence on the vegetation development in the old-settlement areas of Central Europe",
          description:
            "During the Holocene, the vegetation in the landscape changed significantly. Until the Middle Holocene period, these changes were purely attributed to climate change and/or natural disturbances such as fires or grazing of large herbivores. From the middle Holocene, human activities started to be an increasingly important factor in the landscape structure and vegetation changes. From the Middle Ages (or earlier) to the present, most changes are already attributed to human impact. The thesis will focus on detailed pollen analysis of profiles (or profiles) taken in the region of the northern part of the Pannonian Plain and the identification of human activities in the pollen record. The aim of the thesis will be differentiation between the impact of natural factors like climate and anthropogenic activities on ecosystems and their dynamics. The northern part of the Pannonian Plain (south Moravia, south-west Slovakia) has been intensively populated since the Neolithic period, and therefore the influence of humans on the dynamics of forest vegetation is long-term. A detailed analysis of pollen data could therefore contribute to the quantifying of the impact of natural factors and anthropogenic activity on the structure and dynamics of vegetation.",
        },
      ],
    },
    {
      supervisor: (
        <Link to="/people/" state={{ person: "jamrichova" }}>
          Eva Jamrichová
        </Link>
      ),
      theses: [
        {
          name:
            "Population migration and pollen record: detection of changes in pollen record as a consequence of settlement changes (abandonment, migration)",
          description:
            "The work will focus on the identification of changes in the settlement structure and population density in the palaeoecological record. These changes can be detected on a timeframe of several decades. Increased population migration (e.g. abandonment of villages) should therefore be clearly visible in pollen profiles, for example, as a decrease in the abundance of anthropogenic indicators, the development of secondary forests and the gradual succession of natural trees. By comprehensive analysis of palaeoecological data from a relatively short time period, it is possible to reveal whether there have been more extensive migrations in central Europe in the past and how changes in the settlement dynamics have manifested themselves in the structure of landscapes and vegetation. The work will focus on identifying signs of human induced changes in pollen records using analysis of new and/or existing pollen data.",
        },
      ],
    },
    {
      supervisor: (
        <Link to="/people/" state={{ person: "dudova" }}>
          Lydie Dudová
        </Link>
      ),
      theses: [
        {
          name: "Management and recover of pollen slides in the Reference pollen collection of the Institute of Botany, CAS",
          description:
            "The topic of the Bachelor's Thesis is suitable for students of the Ecological and Evolutionary Biology program, Botany or Biology Teacher Training. The subject of the work is the evaluation of the condition and supplementary material of the collection of permanent pollen slides and the renewal of selected items. During the elaboration of the topic, the student will get acquainted with the morphology of basic pollen types. This knowledge can further serve in a Diploma Thesis in the field of Botany.",
        },
      ],
    },
    {
      supervisor: (
        <Link to="/people/" state={{ person: "svitavska" }}>
          Helena Svitavská Svobodová
        </Link>
      ),
      theses: [
        {
          name:
            "Non-pollen objects in Holocene sediments as a source of information for local development of the natural environment (grazing, fires, settlements)",
          description:
            "Peat bogs and wetlands are a reliable source for research into local and regional vegetation and human disturbances. Pollen samples contain not only pollen, but other taxonomically determined non-pollen microfossils (residues of diaspores, cyanobacteria, rhizopods, microscopic fungi, invertebrates, chormophyta) and plant tissues, which provide information on environmental conditions. These so-called, non-pollen objects, can be used as indicators for local hydrological changes and trophic conditions. Ascospores of microscopic fungi (saprophytic, coprophilic fungi, refractory, wood-destroying) characterize different types of environment where they originated, the degree of settlement and management.",
        },
      ],
    },
    {
      supervisor: (
        <Link to="/people/" state={{ person: "rolecek" }}>
          Jan Roleček
        </Link>
      ),
      theses: [
        {
          name:
            "Vegetation characteristics of conservation and bio geographically important species in the vicinity of your residence",
          description:
            "The work will allow you to penetrate into the botanical secrets of the selected area (usually the surroundings of your residence, but you can also choose differently), master the basic methods of botanical research (regional floristics, phytocoenology, phytogeography). This broadly conceived topic is suitable for undergraduate students, including those who later want to study the historical development of vegetation.",
        },
      ],
    },
  ],
}

export const cz = {
  highSchoolTitle: "Pro středoškolské studenty",
  highSchoolDescription: (
    <span>
      Poznáváme minulost naší přírody. Chcete se k nám přidat? Koukněte na naši
      nabídku stáží pro středoškoláky&nbsp;
      <ALink href="https://www.ibot.cas.cz/cs/otevrena-veda/">
        Otevřená věda
      </ALink>
      .
    </span>
  ),
  universityTitle: "Pro vysokoškolské studenty",
  universityDescription:
    "Zajímá vás paleoekologie? Vyberte si z nabídky témat na bakalářské a magisterské práce podle vedoucích:",
  supervisors: [
    {
      supervisor: (
        <Link to="/people/" state={{ person: "hajkova" }}>
          Petra Hájková
        </Link>
      ),
      theses: [
        {
          name:
            "Vývoj prameništních slatinišť Západních Karpat – vliv autogenní sukcese, klimatu a lidské činnosti",
          description:
            "Téma vhodné jak pro diplomovou, tak pro bakalářskou práci zahrnuje zpracování sedimentu v laboratoři a identifikaci rostlinných makrozbytků. Vhodná by byla návštěva lokalit a soupis druhů, které se zde dnes vyskytují, případně pořízení fytocenologických zápisů. Práce by spočívala v makrozbytkové analýze profilů odebraných na prameništích v Západních Karpatech (např. na středním Slovensku: profily Zbojská, Pohorelská Maša, Meandre Hrona etc.), ze kterých jsou již k dispozici výsledky pylové analýzy a radiokarbonové datování, případně po domluvě i odjinud. Cílem bude rekonstruovat vývoj slatinné vegetace v minulosti na základě rostlinných zbytků zachovaných v sedimentu (semena, dřevo, mechy). Obecně na mokřadech může probíhat několik procesů, které ovlivňují vývoj vegetace. V důsledku hromadění organického sedimentu dochází ke slábnutí vlivu podzemní, často vápníkem bohaté vody a k přeměně vápnitých slatin na kyselé rašeliništní typy (autogenní sukcese). Oproti tomu změny klimatu (srážky, teplota) mohou ovlivnit to, zda bude slatiniště otevřené nebo zaroste dřevinami (nejčastěji olše nebo smrk). Lidé svými aktivitami v krajině většinou prameništní slatiniště odlesňují a narušují povrch při pastvě nebo kosení. Cílem práce by tedy bylo identifikovat, které faktory se uplatňovaly při vývoji slatinné vegetace, kdy došlo ke změně lesního prameniště na otevřené slatiniště a jak se měnilo obhospodařování člověkem v souvislosti s intenzitou osídlení. Je možné sledovat i migraci, přežívání nebo vymizení slatiništních druhů, které jsou dnes v Západních Karpatech vzácné.",
        },
      ],
    },
    {
      supervisor: (
        <span>
          <Link to="/people/" state={{ person: "jamrichova" }}>
            Eva Jamrichová
          </Link>
          &nbsp; a&nbsp;
          <Link to="/people/" state={{ person: "dudova" }}>
            Lydie Dudová
          </Link>
        </span>
      ),
      theses: [
        {
          name: "Interakce mezi člověkem a vegetací v horských oblastech",
          description:
            "Systematický paleoekologický výzkum horských oblastí například na hranici jehličnatého a listnatého biomu se zaměřením na detekci lidské činnosti je doposud v našem regionu opomíjený. Analýza paleoekologického záznamu z těchto oblastí může přinést řadu odpovědí nejen s ohledem na využívání krajiny člověkem, ale i na vliv člověka na původní lesní porosty (migraci a šíření dřevin). Práce bude spočívat v pylové analýze profilu odebraného v horských oblastech Západních Karpat, například v Beskydech. Pylová analýza bude zaměřena na rekonstrukci vývoje vegetace v sledované oblasti s důrazem na detailní indikace přítomnosti člověka v krajině projevující se v pylovém záznamu. Cílem diplomové práce bude objasnění příčin dynamiky lesních porostů v horských oblastech ať už v důsledku různých aktivit člověka (odlesňování v důsledku šíření pastvin, selektivní kácení dřevin, těžba nerostů), nebo přírodních jevů, jakými jsou klimatické změny nebo požárové události.",
        },
        {
          name:
            "Vliv člověka na vývoj vegetace v starosídelních oblastech střední Evropy",
          description:
            "V průběhu holocénu se vegetace v krajině výrazně měnila. Do období středního holocénu jsou tyhle změny připisovány klimatickým změnám a/nebo přirozeným disturbancím, jakými jsou požáry nebo pastva velkých býložravců. Od středního holocénu do vývoje krajiny výrazně zasahuje svou aktivitou člověk. Od středověku (případně dřív) až do současnosti je většina změn ve struktuře krajiny i vegetace připisována lidskému impaktu. Kauzalita dynamiky vegetace zejména v průběhu pravěku však nemůže být připisována jenom lidským aktivitám a je tedy otázka, do jaké míry se na dynamice vegetace podílela klimatická změna. Diplomová práce bude zaměřena na detailní pylovou analýzu profilu (či profilů) odebraného v regionu severní části Panonské nížiny se zaměřením na identifikaci lidských aktivit v pylovém záznamu. Cílem bude přispět k zodpovězení otázky po vlivu přirozených faktorů a antropogenní činnosti na ekosystémy, například na dynamiku lesních porostů. Severní část panonské nížiny (jižní Morava, jihozápadní Slovensko), byla intenzivně osídlena již už od neolitu, a tudíž vliv člověka na dynamiku lesní vegetace je dlouhodobý. Detailní analýza pylových dat by tudíž mohla přispět k otázce vlivu přirozených faktorů a antropogenní činnosti na strukturu a dynamiku vegetace.",
        },
      ],
    },
    {
      supervisor: (
        <Link to="/people/" state={{ person: "jamrichova" }}>
          Eva Jamrichová
        </Link>
      ),
      theses: [
        {
          name:
            "Migrace obyvatelstva a pylový záznam: detekce změn v pylovém záznamu v důsledku změn v sídelní dynamice lidských sídel (opuštění, migrace)",
          description:
            "Práce bude zaměřena na identifikaci změn v sídelní struktuře a v populační hustotě v paleoekologickém záznamu. Tyto změny je možné detekovat na časovém meřítku několika desítek let. Rozsáhlejší migrace obyvatelstva (opuštění vesnic) by tedy měly být jasně viditelné v pylových profilech například jako pokles abundance antropogenních indikátorů, rozvoj sekundárního lesa a postupná sukcese původních dřevin. Komplexní analýzou paleoekologických dat i z poměrně krátkého časového úseku je možné odhalit, jestli v minulosti v prostoru střední Evropy docházelo k rozsáhlejším migracím a jak se změny v sídelní dynamice společnosti projevily ve struktuře krajiny a vegetace. Práce bude zaměřena na identifikaci projevů změn v pylovém záznamu (analýza nových a/nebo stávajících pylových dat) v návaznosti na změny v lidském osídlení.",
        },
      ],
    },
    {
      supervisor: (
        <Link to="/people/" state={{ person: "dudova" }}>
          Lydie Dudová
        </Link>
      ),
      theses: [
        {
          name: "Správa a obnova sbírky trvalých pylových preparátů",
          description:
            "Téma bakalářské práce je vhodné pro studenty programu Ekologická a evoluční biologie, obory Botanika nebo Učitelství biologie. Předmětem práce je zhodnocení stavu a doplňkového materiálu sbírky trvalých pylových preparátů Botanického ústavu a obnova vybraných trvalých preparátů. Během zpracování tématu se student seznámí s morfologií základních pylových typů. Tyto znalosti můžou dále sloužit při zpracovávání diplomové práce v oboru Botanika.",
        },
      ],
    },
    {
      supervisor: (
        <Link to="/people/" state={{ person: "svitavska" }}>
          Helena Svitavská Svobodová
        </Link>
      ),
      theses: [
        {
          name:
            "Nepylové objekty v holocénních sedimentech jako zdroj informací pro lokální vývoj přírodního prostředí (pastva, požáry, osídlení)",
          description:
            "Rašeliniště a mokřady jsou spolehlivým zdrojem pro výzkum lokální a regionální vegetace i lidských disturbancí. V pylových vzorcích se nachází nejen pyl, ale další taxonomicky identifikovatelné nepylové mikrofosílie (zbytky diaspor, cyanobacteria, rhizopoda, mikroskopické houby, bezobratlí, chormophyta) a rostlinné tkáně, které přinášejí informaci o environmentálních podmínkách. Tyto, tzv. nepylové objekty mohou být používány jako indikátory pro lokální hydrologické změny a trofické podmínky. Ascospory mikroskopických hub (saprofytní, koprofilní houby, ohnivzdorné, dřevokazné) charakterizují různé typy prostředí, kde vznikaly, stupeň osídlení a hospodaření.",
        },
      ],
    },
    {
      supervisor: (
        <Link to="/people/" state={{ person: "rolecek" }}>
          Jan Roleček
        </Link>
      ),
      theses: [
        {
          name:
            "Vegetační charakteristika ochranářsky a biogeograficky významných druhů v okolí vašeho bydliště",
          description:
            "Práce vám umožní proniknout do botanických tajů vybraného území (obvykle okolí vašeho bydliště, ale můžete si vybrat i jinak), zvládnout základní metody botanického bádání (regionální floristika, fytocenologie, fytogeografie). Toto široce koncipované téma je vhodné pro frekventanty bakalářského stupně, včetně těch, kteří se chtějí později věnovat studiu historického vývoje vegetace.",
        },
      ],
    },
  ],
};
