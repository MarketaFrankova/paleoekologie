import React from "react";
import { Link } from "gatsby";
import { ALink } from "../components/atoms/StyledLink";

export const en = {
  highSchoolTitle: "Pro středoškolské studenty",
  highSchoolDescription: (
    <span>
      Poznáváme minulost naší přírody. Chcete se k nám přidat? Koukněte na naši
      nabídku stáží pro středoškoláky{" "}
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
          </Link>{" "}
          a{" "}
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

export const cz = {
  highSchoolTitle: "Pro středoškolské studenty",
  highSchoolDescription: (
    <span>
      Poznáváme minulost naší přírody. Chcete se k nám přidat? Koukněte na naši
      nabídku stáží pro středoškoláky{" "}
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
          </Link>{" "}
          a{" "}
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
