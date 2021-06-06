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
        problematice rozšíření smrku ví, přečtěte si článek Petry Hájkové v
        časopise Živa 2021/2. PDF dostupné&nbsp;
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
          <strong>Co kvete na jaře</strong> (deset běžných druhů jarní květeny),
        </div>
        <YouTubeVideo
          videoSrcURL="https://www.youtube.com/embed/yF0A3vqijuY"
          videoTitle="Co kvete na jaře"
        />
        <div>
          <strong>Pylová detektivka</strong> (co tvoří dominantu pylového spadu)
          a&nbsp;
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
        problematice rozšíření smrku ví, přečtěte si článek Petry Hájkové v
        časopise Živa 2021/2. PDF dostupné&nbsp;
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
          <strong>Co kvete na jaře</strong> (deset běžných druhů jarní květeny),
        </div>
        <YouTubeVideo
          videoSrcURL="https://www.youtube.com/embed/yF0A3vqijuY"
          videoTitle="Co kvete na jaře"
        />
        <div>
          <strong>Pylová detektivka</strong> (co tvoří dominantu pylového spadu)
          a&nbsp;
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
