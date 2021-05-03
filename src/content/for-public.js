import React from "react";
import { ALink } from "../components/atoms/StyledLink";
import YouTubeVideo from "../components/YouTubeVideo";

export const en = {
  eventTitle: "VÝZNAMNÁ UDÁLOST",
  events: [
    <div>
      Naše kolegyně RNDr. Vlasta Jankovská, CSc. oslavila 11. dubna 2021
      osmdesátiny. Nabízíme vám několik odkazů týkajících se této naší skvělé
      kolegyně – např. rozhovor vedený doc. Petrem Kunešem, týkající se jejích
      vědeckých začátků, vědeckého zaměření a cest do Ruska:
      <p>
        {" "}
        <ALink href="http://ekolbrno.ibot.cas.cz/wp-content/uploads/2014/12/2014-Vlasta-Jankovska-Ziva.pdf">
          Rozhovor s Vlastou Jankovskou v časopise Živa 2014/6
        </ALink>
      </p>
      <p>
        {" "}
        <ALink href="https://cs.wikipedia.org/wiki/Vlasta_Jankovsk%C3%A1">
          Vlasta Jankovská na wikipedii
        </ALink>
      </p>
    </div>,
  ],
  documentaryTitle: "DOKUMENTÁRNÍ FILM",
  documentaries: [
    {
      name: "Zelené plíce.",
      description: (
        <span>
          Dokumentární film o tom, jak vypadá obnova lesa po kůrovcové kalamitě
          na Šumavě. Helena Svitavská Svobodová mluví o svých výzkumech a o
          pozdně glaciálním a holocéním vývoji šumavské přírody. Ke shlédnutí{" "}
          <ALink href="https://www.ceskatelevize.cz/porady/12935442888-zelene-plice/">
            zde
          </ALink>
        </span>
      ),
    },
  ],
  popularPapersTitle: "POPULARIZAČNÍ ČLÁNKY",
  popularPapers: [
    <span>
      <b>Pylové depozice na Šumavě a v Krkonoších za posledních 21 let</b>. Díky
      Heleně Svitavské Svobodové víme mnohem více o současné pylové sedimentaci
      v našich hraničních pohořích. Anotace článku, vyšlého v časopise Botanika
      2021/1 k přečtení{" "}
      <ALink href="https://www.ibot.cas.cz/botanika/?p=670">zde</ALink>
    </span>,
    <span>
      <b>Divoká ale ne tak docela… Šumava v mladém pravěku</b>. Přírodní archívy
      vydávají svědectví o pašeráckých trasách přes šumavská pohoří, jak se
      můžete dočíst v článku, jehož spoluautorem je Přemek Bobek,{" "}
      <ALink href="https://www.researchgate.net/publication/348419780 ">
        zde
      </ALink>
    </span>,
    <span>
      <b>Kulturní, a přesto cenné</b>. Pokud chcete poznat překvapivou historii
      ekosystému karpatských travertinových slatinišť, označovanou jako
      reliktní, přečtěte si článek v časopise Vesmír 2020/12, kde se s vámi
      Michal Horsák a Petra Hájková podělí o výsledky svých nejnovějších
      paleoekologických výzkumů v Západních Karpatech. Začátek článku{" "}
      <ALink href="https://vesmir.cz/cz/casopis/archiv-casopisu/2020/cislo-12/kulturni-presto-cenne.html">
        zde
      </ALink>
    </span>,
    <span>
      <b>Budoucnost našich lesů: bude v nich mít své místo i smrk?</b>. Pokud
      vás zajímá, jak je to se smrkem, proč lesy s dominancí smrku plošně
      odumírají, jak by se mělo hospodařit v budoucnosti a co se o problematice
      rozšíření smrku ví, přečtěte si článek Petry Hájkové v časopise Živa
      2021/2. PDF dostupné{" "}
      <ALink href="https://ziva.avcr.cz/2021-2/budoucnost-nasich-lesu-bude-v-nich-mit-sve-misto-i-smrk.html">
        zde
      </ALink>
    </span>,
    <span>
      <b>
        Víme, kolik bylo smrku v našich lesích před intenzifikací hospodaření?
      </b>{" "}
      Tento článek je zaměřený na paleoekologické poznání minulého rozšíření
      smrku. Kolik ho v našich lesích vlastně bylo, byl všude nebo jen někde a
      jsme vůbec schopní to současnými metodami poznat? Přečtěte si článek Petry
      Hájkové v časopisu Botanika 2020/1. Ke stažení{" "}
      <ALink href="https://www.ibot.cas.cz/botanika/wp-content/uploads/sites/19/2021/04/e-Botanika-012020.pdf">
        zde
      </ALink>
    </span>,
    <span>
      <b>Oheň v naší krajině</b>. O roli požárů ve vývoji přírodního prostředí
      během holocénu psal Přemek Bobek s Martinem Adámkem v článku pro časopis
      Živa 2020/5. Fotky z článku dostupné{" "}
      <ALink href="https://ziva.avcr.cz/2020-5/ohen-v-nasi-krajine.html">
        zde
      </ALink>
    </span>,
    <span>
      <b>Rok českých pralesů IV. Narušením k dynamice</b>. Jakou roli hrály
      disturbance ve vývoji vegetace, kterou dnes označujeme jako pralesní?
      Článek z časopisu Živa 2018/4, na kterém se podílel Přemek Bobek je jako
      PDF ke stažení{" "}
      <ALink href="https://ziva.avcr.cz/2018-4/rok-ceskych-pralesu-iv-narusenim-k-dynamice.html">
        zde
      </ALink>
    </span>,
  ],
  popularVideoTitle: "POPULARIZAČNÍ VIDEA",
  popularVideos: (
    <div>
      <p>
        V rámci aktivity{" "}
        <ALink href="https://www.avcr.cz/cs/pro-verejnost/veda-na-doma/">
          Věda na doma
        </ALink>{" "}
        jsme během jarního lockdownu 2020 ve spolupráci s Odborem
        audiovizuálních technologií AV ČR připravili videa a také prezentace:
      </p>
      <div>
        <b>Co kvete na jaře</b> (deset běžných druhů jarní květeny),
      </div>
      <YouTubeVideo
        videoSrcURL="https://www.youtube.com/embed/yF0A3vqijuY"
        videoTitle="Co kvete na jaře"
      />
      <div>
        <b>Pylová detektivka</b> (co tvoří dominantu pylového spadu) a{" "}
      </div>
      <YouTubeVideo
        videoSrcURL="https://www.youtube.com/embed/wQhg93FzLgY"
        videoTitle="Pylová detektivka"
      />
      <div>
        <b>Rostliny a jejich pyl</b> (jak vypadají pylová zrna běžných jarních
        rostlin).
      </div>
      <YouTubeVideo
        videoSrcURL="https://www.youtube.com/embed/8thQaFAkguE"
        videoTitle="Rostliny a jejich pyl"
      />
      <div>
        Tato a další videa a edukační materiály najdete na webu Botanického
        ústavu pod záložkou{" "}
        <ALink href="https://www.ibot.cas.cz/cs/verejnost/vzdelavani/">
          Veřejnost/Vzdělávání
        </ALink>
        .
      </div>
    </div>
  ),
};

export const cz = {
  eventTitle: "VÝZNAMNÁ UDÁLOST",
  events: [
    <div>
      Naše kolegyně RNDr. Vlasta Jankovská, CSc. oslavila 11. dubna 2021
      osmdesátiny. Nabízíme vám několik odkazů týkajících se této naší skvělé
      kolegyně – např. rozhovor vedený doc. Petrem Kunešem, týkající se jejích
      vědeckých začátků, vědeckého zaměření a cest do Ruska:
      <p>
        {" "}
        <ALink href="http://ekolbrno.ibot.cas.cz/wp-content/uploads/2014/12/2014-Vlasta-Jankovska-Ziva.pdf">
          Rozhovor s Vlastou Jankovskou v časopise Živa 2014/6
        </ALink>
      </p>
      <p>
        {" "}
        <ALink href="https://cs.wikipedia.org/wiki/Vlasta_Jankovsk%C3%A1">
          Vlasta Jankovská na wikipedii
        </ALink>
      </p>
    </div>,
  ],
  documentaryTitle: "DOKUMENTÁRNÍ FILM",
  documentaries: [
    {
      name: "Zelené plíce.",
      description: (
        <span>
          Dokumentární film o tom, jak vypadá obnova lesa po kůrovcové kalamitě
          na Šumavě. Helena Svitavská Svobodová mluví o svých výzkumech a o
          pozdně glaciálním a holocéním vývoji šumavské přírody. Ke shlédnutí{" "}
          <ALink href="https://www.ceskatelevize.cz/porady/12935442888-zelene-plice/">
            zde
          </ALink>
        </span>
      ),
    },
  ],
  popularPapersTitle: "POPULARIZAČNÍ ČLÁNKY",
  popularPapers: [
    <span>
      <b>Pylové depozice na Šumavě a v Krkonoších za posledních 21 let</b>. Díky
      Heleně Svitavské Svobodové víme mnohem více o současné pylové sedimentaci
      v našich hraničních pohořích. Anotace článku, vyšlého v časopise Botanika
      2021/1 k přečtení{" "}
      <ALink href="https://www.ibot.cas.cz/botanika/?p=670">zde</ALink>
    </span>,
    <span>
      <b>Divoká ale ne tak docela… Šumava v mladém pravěku</b>. Přírodní archívy
      vydávají svědectví o pašeráckých trasách přes šumavská pohoří, jak se
      můžete dočíst v článku, jehož spoluautorem je Přemek Bobek,{" "}
      <ALink href="https://www.researchgate.net/publication/348419780 ">
        zde
      </ALink>
    </span>,
    <span>
      <b>Kulturní, a přesto cenné</b>. Pokud chcete poznat překvapivou historii
      ekosystému karpatských travertinových slatinišť, označovanou jako
      reliktní, přečtěte si článek v časopise Vesmír 2020/12, kde se s vámi
      Michal Horsák a Petra Hájková podělí o výsledky svých nejnovějších
      paleoekologických výzkumů v Západních Karpatech. Začátek článku{" "}
      <ALink href="https://vesmir.cz/cz/casopis/archiv-casopisu/2020/cislo-12/kulturni-presto-cenne.html">
        zde
      </ALink>
    </span>,
    <span>
      <b>Budoucnost našich lesů: bude v nich mít své místo i smrk?</b>. Pokud
      vás zajímá, jak je to se smrkem, proč lesy s dominancí smrku plošně
      odumírají, jak by se mělo hospodařit v budoucnosti a co se o problematice
      rozšíření smrku ví, přečtěte si článek Petry Hájkové v časopise Živa
      2021/2. PDF dostupné{" "}
      <ALink href="https://ziva.avcr.cz/2021-2/budoucnost-nasich-lesu-bude-v-nich-mit-sve-misto-i-smrk.html">
        zde
      </ALink>
    </span>,
    <span>
      <b>
        Víme, kolik bylo smrku v našich lesích před intenzifikací hospodaření?
      </b>{" "}
      Tento článek je zaměřený na paleoekologické poznání minulého rozšíření
      smrku. Kolik ho v našich lesích vlastně bylo, byl všude nebo jen někde a
      jsme vůbec schopní to současnými metodami poznat? Přečtěte si článek Petry
      Hájkové v časopisu Botanika 2020/1. Ke stažení{" "}
      <ALink href="https://www.ibot.cas.cz/botanika/wp-content/uploads/sites/19/2021/04/e-Botanika-012020.pdf">
        zde
      </ALink>
    </span>,
    <span>
      <b>Oheň v naší krajině</b>. O roli požárů ve vývoji přírodního prostředí
      během holocénu psal Přemek Bobek s Martinem Adámkem v článku pro časopis
      Živa 2020/5. Fotky z článku dostupné{" "}
      <ALink href="https://ziva.avcr.cz/2020-5/ohen-v-nasi-krajine.html">
        zde
      </ALink>
    </span>,
    <span>
      <b>Rok českých pralesů IV. Narušením k dynamice</b>. Jakou roli hrály
      disturbance ve vývoji vegetace, kterou dnes označujeme jako pralesní?
      Článek z časopisu Živa 2018/4, na kterém se podílel Přemek Bobek je jako
      PDF ke stažení{" "}
      <ALink href="https://ziva.avcr.cz/2018-4/rok-ceskych-pralesu-iv-narusenim-k-dynamice.html">
        zde
      </ALink>
    </span>,
  ],
  popularVideoTitle: "POPULARIZAČNÍ VIDEA",
  popularVideos: (
    <div>
      <p>
        V rámci aktivity{" "}
        <ALink href="https://www.avcr.cz/cs/pro-verejnost/veda-na-doma/">
          Věda na doma
        </ALink>{" "}
        jsme během jarního lockdownu 2020 ve spolupráci s Odborem
        audiovizuálních technologií AV ČR připravili videa a také prezentace:
      </p>
      <div>
        <b>Co kvete na jaře</b> (deset běžných druhů jarní květeny),
      </div>
      <YouTubeVideo
        videoSrcURL="https://www.youtube.com/embed/yF0A3vqijuY"
        videoTitle="Co kvete na jaře"
      />
      <div>
        <b>Pylová detektivka</b> (co tvoří dominantu pylového spadu) a{" "}
      </div>
      <YouTubeVideo
        videoSrcURL="https://www.youtube.com/embed/wQhg93FzLgY"
        videoTitle="Pylová detektivka"
      />
      <div>
        <b>Rostliny a jejich pyl</b> (jak vypadají pylová zrna běžných jarních
        rostlin).
      </div>
      <YouTubeVideo
        videoSrcURL="https://www.youtube.com/embed/8thQaFAkguE"
        videoTitle="Rostliny a jejich pyl"
      />
      <div>
        Tato a další videa a edukační materiály najdete na webu Botanického
        ústavu pod záložkou{" "}
        <ALink href="https://www.ibot.cas.cz/cs/verejnost/vzdelavani/">
          Veřejnost/Vzdělávání
        </ALink>
        .
      </div>
    </div>
  ),
};
