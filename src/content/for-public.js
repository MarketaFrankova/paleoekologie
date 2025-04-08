import React from "react";
import { ALink } from "../components/atoms/StyledLink";
import YouTubeVideo from "../components/YouTubeVideo";
import zeleneplice from "../images/forpublic/zeleneplice.jpg";

export const czImgTitles = {
  image1:
    "Den otevřených dveří na pracovišti Botanického ústavu, AV ČR v Brně (2018).",
  image2:
    "Úvodní přednáška o Botanickém ústavu, Den otevřených dveří Brno (2018). ",
  image3: "Ukázka vegetačního snímkování.",
  image4: "Ukázka navzorkovaného organického sedimentu.",
  image5: "Ukázka navzorkovaného organického sedimentu.",
};
export const enImgTitles = {
  image1:
    "Open day at the Institute of Botany, Czech Academy of Sciences, Brno (2018).",
  image2:
    "Introductory lecture on the Institute of Botany, open day in Brno (2018).",
  image3: "Demonstration of vegetation survey.",
  image4: "Demonstration of a subsampled organic sediment.",
  image5: "Demonstration of a subsampled organic sediment.",
};

export const cz = [
  {
    title: "AKCE PRO VEŘEJNOST",
    description: (
      <div>
        Každým rokem (vždy první středu v listopadu) pořádá brněnské pracoviště
        Botanického ústavu <strong>Den otevřených dveří</strong>. Akce je určena
        především pro středoškoláky (celá třída se objednává předem), ale i pro
        jednotlivce všech věkových kategorií (bez objednání). Účastníme se
        rovněž dalších akcí jako <strong>Veletrh vědy</strong> (Praha),{" "}
        <strong>Vědecký trek</strong> (Průhonice) a&nbsp;
        <strong>Dny elektronové mikroskopie</strong> (Brno).
      </div>
    ),
  },

  {
    title: "NA LOUKU VIRTUÁLNĚ",
    description: (
      <div>
        Rozšiřte si své znalosti rostlin během virtuální procházky druhově
        nejbohatší loukou na světě! Můžete si ji stáhnout jako soubor ve
        formátu&nbsp;
        <ALink href="https://www.avcr.cz/.content/galerie-souboru/pro-verejnost/Virtualni_prochazka_druhove_nejbohatsi_loukou_na_svete.ppsx">
          PPSX
        </ALink>
        &nbsp; nebo&nbsp;
        <ALink href="https://www.avcr.cz/export/sites/avcr.cz/.content/galerie-souboru/pro-verejnost/Virtualni_prochazka_druhove_nejbohatsi_loukou_na_svete.pdf">
          PDF
        </ALink>
        &nbsp; (ten druhý nezobrazuje popisky s názvy druhů rostlin, jen
        internetové adresy s informacemi o druzích), nebo se podívat&nbsp;
        <ALink href="https://www.ibot.cas.cz/cs/verejnost/vzdelavani/edukacni-materialy/">
          sem
        </ALink>
      </div>
    ),
  },

  {
    title: "DOKUMENTÁRNÍ FILM",
    descriptionArr: [
      <>
        <div>
          <strong>Zelené plíce.</strong>
        </div>

        <div>
          Dokumentární film o tom, jak vypadá obnova lesa po kůrovcové kalamitě
          na Šumavě. Helena Svitavská Svobodová mluví o svých výzkumech a o
          pozdně glaciálním a holocéním vývoji šumavské přírody. Ke
          shlédnutí&nbsp;
          <ALink href="https://www.ceskatelevize.cz/porady/12935442888-zelene-plice/">
            zde
          </ALink>
          <div>
            <a
              href="https://www.ceskatelevize.cz/porady/12935442888-zelene-plice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={zeleneplice}
                alt="Zelené plíce - dokument"
                style={{ maxWidth: 500 }}
              />
            </a>
          </div>
        </div>
      </>,
    ],
  },
  {
    title: "POPULARIZAČNÍ ČLÁNKY",
    descriptionArr: [
      <span>
        <strong>
          Cestování skrze prameny západočeského lázeňského trojúhelníku až do
          doby ledové I.
        </strong>
        Chcete se dozvědět o tom, co žije v minerálních pramenech v oblasti
        nejznámějších českých lázeňských měst a jak se biota těchto pramenů a
        jejich okolí vyvíjela od doby ledové? Přečtěte si náš článek v časopise{" "}
        <ALink href="http://www.casopis-arnika.cz/pdf/arnika_2022_01.pdf">
          Arnika
        </ALink>
        .
      </span>,
      <span>
        <strong>Jsou požáry součástí dlouhodobého vývoje lesa?</strong> Požár v
        Českém Švýrćarsku vyvoval diskusi mezi odborníky, ochranáři i laickou
        veřejností. Přemysl Bobek z našeho týmu, který se požáry v období
        Holocénu zabývá, nás ve svém čláku uvádí do širšího kontextu této
        problematiky.{" "}
        <ALink href="https://www.researchgate.net/search?q=Jsou%20požáry%20součástí%20dlouhodobého%20vývoje%20lesa%3F%20">
          Search Publications | ResearchGate
        </ALink>
      </span>,
      <span>
        <strong>
          Pylové depozice na Šumavě a v Krkonoších za posledních 21 let.
        </strong>
         Kolegyně Helena Svitavská Svobodová se již přes dvě desítky let věnuje
        analýze pylového spadu v našich nějvětších národních parcích. O
        výsledcích jejího výzkumu se dočtete v časopise Botanika 9: 6-8.
      </span>,
      <span>
        <strong>Stromy formují šumavskou krajinu.</strong> Článek přináší
        informace o vlivu klimatu na stromy i o jejich vývratové dynamice.{" "}
        <ALink href="https://ziva.avcr.cz/2021-6/stromy-formuji-sumavskou-krajinu.html">
          Živa – Stromy formují šumavskou krajinu (Pavel Šamonil, Jonathan D.
          Phillips, Přemysl Bobek, Pavel Daněk) (avcr.cz)
        </ALink>
      </span>,
      <span>
        <strong>Pestrá minulost druhové rozmanitosti.</strong> Jak se utvářela
        druhová bohatost středoevropské krajiny po skončení poslední doby
        ledové? Vystačíme si při prognózách budoucnosti naší přírody
        s představami o závislosti jejího vývoje na klimatických změnách
        a lidském působení? Nejen o tom je článek kolegy Jana Rolečka a
        spoluautorů.{" "}
        <ALink href="https://paris.ibot.cas.cz/cs/entries/24812">
          Pestrá minulost druhové rozmanitosti - Časopis Vesmír (vesmir.cz)
        </ALink>
      </span>,

      <span>
        <strong>
          Pylové depozice na Šumavě a v Krkonoších za posledních 21 let
        </strong>
        . Díky Heleně Svitavské Svobodové víme mnohem více o současné pylové
        sedimentaci v našich hraničních pohořích. Anotace článku, vyšlého v
        časopise Botanika 2021/1 k přečtení&nbsp;
        <ALink href="https://www.ibot.cas.cz/botanika/?p=670">zde</ALink>
      </span>,
      <span>
        <strong>Divoká ale ne tak docela… Šumava v mladém pravěku</strong>.
        Přírodní archívy vydávají svědectví o pašeráckých trasách přes šumavská
        pohoří, jak se můžete dočíst v článku, jehož spoluautorem je Přemek
        Bobek,&nbsp;
        <ALink href="https://www.researchgate.net/publication/348419780 ">
          zde
        </ALink>
      </span>,
      <span>
        <strong>Kulturní, a přesto cenné</strong>. Pokud chcete poznat
        překvapivou historii ekosystému karpatských travertinových slatinišť,
        označovanou jako reliktní, přečtěte si článek v časopise Vesmír 2020/12,
        kde se s vámi Michal Horsák a Petra Hájková podělí o výsledky svých
        nejnovějších paleoekologických výzkumů v Západních Karpatech. Začátek
        článku&nbsp;
        <ALink href="https://vesmir.cz/cz/casopis/archiv-casopisu/2020/cislo-12/kulturni-presto-cenne.html">
          zde
        </ALink>
      </span>,
      <span>
        <strong>
          Budoucnost našich lesů: bude v nich mít své místo i smrk?
        </strong>
        . Pokud vás zajímá, jak je to se smrkem, proč lesy s dominancí smrku
        plošně odumírají, jak by se mělo hospodařit v budoucnosti a co se o
        problematice rozšíření smrku ví, přečtěte si článek v časopise Živa
        2021/2, na kterém se podílela Petra Hájková. PDF dostupné&nbsp;
        <ALink href="https://ziva.avcr.cz/2021-2/budoucnost-nasich-lesu-bude-v-nich-mit-sve-misto-i-smrk.html">
          zde
        </ALink>
      </span>,
      <span>
        <strong>
          Víme, kolik bylo smrku v našich lesích před intenzifikací hospodaření?
        </strong>
        &nbsp; Tento článek je zaměřený na paleoekologické poznání minulého
        rozšíření smrku. Kolik ho v našich lesích vlastně bylo, byl všude nebo
        jen někde a jsme vůbec schopní to současnými metodami poznat? Přečtěte
        si článek Petry Hájkové v časopisu Botanika 2020/1. Ke stažení&nbsp;
        <ALink href="https://www.ibot.cas.cz/botanika/wp-content/uploads/sites/19/2021/04/e-Botanika-012020.pdf">
          zde
        </ALink>
      </span>,
      <span>
        <strong>Oheň v naší krajině</strong>. O roli požárů ve vývoji přírodního
        prostředí během holocénu psal Přemek Bobek s Martinem Adámkem v článku
        pro časopis Živa 2020/5. Fotky z článku dostupné&nbsp;
        <ALink href="https://ziva.avcr.cz/2020-5/ohen-v-nasi-krajine.html">
          zde
        </ALink>
      </span>,
      <span>
        <strong>Rok českých pralesů IV. Narušením k dynamice</strong>. Jakou
        roli hrály disturbance ve vývoji vegetace, kterou dnes označujeme jako
        pralesní? Článek z časopisu Živa 2018/4, na kterém se podílel Přemek
        Bobek je jako PDF ke stažení&nbsp;
        <ALink href="https://ziva.avcr.cz/2018-4/rok-ceskych-pralesu-iv-narusenim-k-dynamice.html">
          zde
        </ALink>
      </span>,
    ],
  },
  {
    title: "POPULARIZAČNÍ VIDEA",
    description: (
      <div>
        <p>
          V rámci aktivity&nbsp;
          <ALink href="https://www.avcr.cz/cs/pro-verejnost/veda-na-doma/">
            Věda na doma
          </ALink>
          &nbsp; jsme během jarního lockdownu 2020 ve spolupráci s Odborem
          audiovizuálních technologií AV ČR připravili videa a také prezentace:
        </p>
        <div>
          <strong>Co kvete na jaře</strong> (deset běžných druhů jarní květeny).
        </div>
        <YouTubeVideo
          videoSrcURL="https://www.youtube.com/embed/yF0A3vqijuY"
          videoTitle="Co kvete na jaře"
        />
        <div>
          <strong>Pylová detektivka</strong> (co tvoří dominantu pylového spadu).
        </div>
        <YouTubeVideo
          videoSrcURL="https://www.youtube.com/embed/wQhg93FzLgY"
          videoTitle="Pylová detektivka"
        />
        <div>
          <strong>Rostliny a jejich pyl</strong> (jak vypadají pylová zrna
          běžných jarních rostlin).
        </div>
        <YouTubeVideo
          videoSrcURL="https://www.youtube.com/embed/8thQaFAkguE"
          videoTitle="Rostliny a jejich pyl"
        />
        <div>
          Tato a další videa a edukační materiály najdete na webu Botanického
          ústavu pod záložkou&nbsp;
          <ALink href="https://www.ibot.cas.cz/cs/verejnost/vzdelavani/">
            Veřejnost/Vzdělávání
          </ALink>
          .
        </div>
        <br/>
        <div>
          <strong>Vlasta Jankovská, česká paleoekoložka</strong>
        </div>
        <YouTubeVideo
            videoSrcURL="https://www.youtube.com/embed/rh1W4YgsweQ"
            videoTitle="Vlasta Jankovská, česká paleoekoložka"
            centered
          />
      </div>
    ),
  },

  {
    title: "EXKURZE",
    description: (
      <div>
        Vědci z našeho týmu příležitostně pořádají exkurze pro veřejnost. Na
        zajímavá místa můžeme zavítat ale i sami. Zde je tip naší kolegyně Petry
        Hájkové, která pro web Českého svazu ochránců přírody vypracovala
        přírodovědně&nbsp;
        <ALink href="https://csophluk.cz/prirodovedne-zajimava-mista-u-hluku/">
          zajímavá místa okolí Hluku na Uherskohradišťsku
        </ALink>
        .
      </div>
    ),
  },
];

export const en = [
  {
    title: "EVENTS FOR THE PUBLIC",
    description: (
      <div>
        Every year (always the first Wednesday in November) the Brno Research
        Division of the Institute of Botany organizes an{" "}
        <strong>Open Day.</strong>. The event is intended primarily for high
        school students (the whole class must order in advance), but individuals
        of all ages are welcome as well (without ordering). We also participate
        in other events such as the <strong>Scientific Fair</strong> (Prague),{" "}
        the <strong>Scientific Trek</strong> (Průhonice) and the&nbsp;
        <strong>Days of Electron Microscopy</strong> (Brno).
      </div>
    ),
  },

  {
    title: "VIRTUAL VISIT OF A MEADOW",
    description: (
      <div>
        Expand your knowledge of plants during a virtual walk through the most
        species-rich meadow in the world! You can download it as a &nbsp;
        <ALink href="https://www.avcr.cz/.content/galerie-souboru/pro-verejnost/Virtualni_prochazka_druhove_nejbohatsi_loukou_na_svete.ppsx">
          PPSX
        </ALink>
        &nbsp; nebo&nbsp;
        <ALink href="https://www.avcr.cz/export/sites/avcr.cz/.content/galerie-souboru/pro-verejnost/Virtualni_prochazka_druhove_nejbohatsi_loukou_na_svete.pdf">
          PDF
        </ALink>
        &nbsp; (the latter does not display labels with plant species names,
        only internet addresses with species information) or look here:&nbsp;
        <ALink href="https://www.ibot.cas.cz/cs/verejnost/vzdelavani/edukacni-materialy/">
          sem
        </ALink>
      </div>
    ),
  },

  {
    title: "DOCUMENTARY FILM",
    descriptionArr: [
      <>
        <div>
          <strong>Green lungs.</strong>
        </div>

        <div>
          A documentary about what the restoration of the forest looks like
          after the bark beetle calamity in the Šumava Mts. Helena Svitavská
          Svobodová talks about her research and the late glacial and Holocene
          development of Šumava nature. You can watch the movie here:&nbsp;
          <ALink href="https://www.ceskatelevize.cz/porady/12935442888-zelene-plice/">
            zde
          </ALink>
          <div>
            <a
              href="https://www.ceskatelevize.cz/porady/12935442888-zelene-plice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={zeleneplice}
                alt="Zelené plíce - dokument"
                style={{ maxWidth: 500 }}
              />
            </a>
          </div>
        </div>
      </>,
    ],
  },
  {
    title: "POPULARIZATION PAPERS",
    descriptionArr: [
      <span>
        <strong>
          Pollen deposition in Šumava and Krkonoše for the last 21 years
        </strong>
        . Thanks to Helena Svitavská Svobodová, we know much more about the
        current pollen sedimentation in our border mountains. Here you can read
        annotation of this article published in the journal Botanika
        2021/1:&nbsp;
        <ALink href="https://www.ibot.cas.cz/botanika/?p=670">zde</ALink>
      </span>,
      <span>
        <strong>Wild but not quite… Šumava in young prehistory</strong>. The
        natural archives bear witness to smuggling routes though the Šumava Mts.
        As we can read in this article co-authored by Přemysl Bobek, here:&nbsp;
        <ALink href="https://www.researchgate.net/publication/348419780 ">
          zde
        </ALink>
      </span>,
      <span>
        <strong>Cultural, yet valuable</strong>. If you want to get to know the
        surprising history of Carpathian travertine peat bogs, considered
        relict, read the article in the journal Vesmír 2020/12, where Michal
        Horsák a Petra Hájková share the results of their latest paleoecological
        research in the Western Carpathians. Here is the beginning of the
        article:&nbsp;
        <ALink href="https://vesmir.cz/cz/casopis/archiv-casopisu/2020/cislo-12/kulturni-presto-cenne.html">
          zde
        </ALink>
      </span>,
      <span>
        <strong>
          The future of our forests: will spruce have a place in them?
        </strong>
        . If you are interested in what it is like with spruce, why forests with
        spruce dominance die extensively, how they should be managed in the
        future and what is known about the issue of spruce spread, read the
        article co-authored by Petra Hajková in the journal Živa 2021/2. PDF
        available&nbsp;
        <ALink href="https://ziva.avcr.cz/2021-2/budoucnost-nasich-lesu-bude-v-nich-mit-sve-misto-i-smrk.html">
          zde
        </ALink>
      </span>,
      <span>
        <strong>
          Do we know how much spruce was in our forests before the
          intensification of farming?
        </strong>
        &nbsp; his article focuses on the paleoecological knowledge of the past
        spread of spruce. How much was it in our forests, was it everywhere or
        only somewhere, and are we even able to recognize it by current methods?
        Read the article by Petra Hájková in the journal Botanika 2020/1. You
        can download it here:&nbsp;
        <ALink href="https://www.ibot.cas.cz/botanika/wp-content/uploads/sites/19/2021/04/e-Botanika-012020.pdf">
          zde
        </ALink>
      </span>,
      <span>
        <strong>Fire in our landscape</strong>. Přemysl Bobek and Martin Adámek
        wrote about the role of fires in the development of the natural
        environment during the Holocene in an article for the magazine Živa
        2020/5. The photos from this article are available here:&nbsp;
        <ALink href="https://ziva.avcr.cz/2020-5/ohen-v-nasi-krajine.html">
          zde
        </ALink>
      </span>,
      <span>
        <strong>he year of Czech Forests IV. Disruption to dynamics</strong>.
        What role did disturbances play in the development of Vegetation, which
        we now call forest? You can download the article co-authored by Přemysl
        Bobek and published in Živa 2018/4 as a PDF here:&nbsp;
        <ALink href="https://ziva.avcr.cz/2018-4/rok-ceskych-pralesu-iv-narusenim-k-dynamice.html">
          zde
        </ALink>
      </span>,
    ],
  },
  {
    title: "POPULARIZATION VIDEOS",
    description: (
      <div>
        <p>
          As a part of the Science at Home activity&nbsp;
          <ALink href="https://www.avcr.cz/cs/pro-verejnost/veda-na-doma/">
            Věda na doma
          </ALink>
          &nbsp; we prepared videos and presentations during the spring lockdown
          2020 in cooperation with the Department of Audiovisual Technologies of
          the CAS:
        </p>
        <div>
          <strong>What blooms in spring</strong> (ten common species of spring
          flora),
        </div>
        <YouTubeVideo
          videoSrcURL="https://www.youtube.com/embed/yF0A3vqijuY"
          videoTitle="Co kvete na jaře"
        />
        <div>
          <strong>Pollen detective</strong> (what is the dominant of pollen
          fall) and&nbsp;
        </div>
        <YouTubeVideo
          videoSrcURL="https://www.youtube.com/embed/wQhg93FzLgY"
          videoTitle="Pylová detektivka"
        />
        <div>
          <strong>Plants and their pollen</strong> (What do the pollen grains of
          common spring plants look like). .
        </div>
        <YouTubeVideo
          videoSrcURL="https://www.youtube.com/embed/8thQaFAkguE"
          videoTitle="Rostliny a jejich pyl"
        />
        <div>
          You can find these are other videos and educational materials on the
          website of the Institute of Botany under the Public/Education
          tab&nbsp;
          <ALink href="https://www.ibot.cas.cz/cs/verejnost/vzdelavani/">
            Veřejnost/Vzdělávání
          </ALink>
          .
        </div>
        <br/>
        <div>
          <strong>Vlasta Jankovská, Czech paleoecologist</strong>
        </div>
        <YouTubeVideo
            videoSrcURL="https://www.youtube.com/embed/rh1W4YgsweQ"
            videoTitle="Vlasta Jankovská, česká paleoekoložka"
            centered
          />
      </div>
    ),
  },

  {
    title: "EXCURSIONS",
    description: (
      <div>
        Scientists from our team occasionally organize excursions for the
        public, but we can also visit interesting places ourselves. Her is a tip
        from our colleague Petra Hájková, who described interesting places in
        nature&nbsp;
        <ALink href="https://csophluk.cz/prirodovedne-zajimava-mista-u-hluku/">
          in the vicinity of the town Hluk near Uherské Hradiště
        </ALink>
        .
      </div>
    ),
  },
];
