import React from "react";
import { Link, withPrefix } from "gatsby";

export const czImgTitles = {
  image1: "Práce s odstředivkou.",
  image2: "Laboratorní příprava vzorků pro pylovou analýzu.",
  image3: "Vzorkování odebraného sedimentu pro pylovou analýzu.",
  image4: "Chemikálie pro laboratorní přípravu paleoekologických vzorků. ",
};

export const enImgTitles = {
  image1: "Work with a centrifuge.",
  image2: "Chemical processing of samples for standard pollen analysis.",
  image3: "Subsampling of sediment for standard pollen analysis.",
  image4: "Chemicals for laboratory treatment of paleoecological samples.",
};

export const labEn = {
  title: "Palaeoecological laboratories",
  description: (
    <div align="justify">
      We offer the services of our laboratory to those interested in fast and
      high-quallity analyses. We process samples of peat bogs, fens, lake
      sediments, moss polsters, archaeological cultural layers and surface soil
      samples.
      <p>
        <strong>We prepare samples for analyses of:</strong>
        <ul>
          <li>
            Fossil pollen and non-pollen sporomorphs for quantitative pollen
            analysis
          </li>
          <li>Recent pollen for pollen morphology</li>
          <li>Recent pollen from pollen traps</li>
          <li>Bee pollen from honey</li>
          <li>Macroscopic charcoal</li>
          <li>Plant macroremains</li>
          <li>
            Organisms of groups <i>Cladocera</i>, <i>Chironomidae</i>,&nbsp;
            <i>Diatomae</i> and <i>Testate amoebae</i>)
          </li>
        </ul>
      </p>
      <p>
        We perform analyses also for colleagues from other institutions
        (external contracts): the price list of the works and protocol
        specifying the requirements for the preparation of the samples can be
        found&nbsp;
        <a
          href={withPrefix("/pricelist.docx")}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          here
        </a>
        .
      </p>
      <p>
        The laboratory has two workplaces: in Brno and Průhonice. If you are
        interested, <strong>contact</strong>&nbsp;
        <Link to="/people/" state={{ person: "jamrichova" }}>
          Eva Jamrichová
        </Link>
        ; (in Brno) or&nbsp;
        <Link to="/people/" state={{ person: "bobek" }}>
          Přemysl Bobek
        </Link>
        &nbsp; (in Průhonice)
      </p>
    </div>
  ),
};

export const labCz = {
  title: "Laboratoř pro zpracování paleoekologických vzorků",
  description: (
    <div align="justify">
      Všem zájemcům o rychlé a kvalitní analýzy nabízíme služby naší laboratoře.
      Zpracováváme vzorky rašelin, slatin, jezerních sedimentů, pěnovců,
      mechových polštářů, vzorků z archeologických kulturních vrstev a také
      povrchové půdní vzorky.
      <p>
        <strong>Naše laboratoř připravuje vzorky na analýzu:</strong>
        <ul>
          <li>
            fosilního pylu a dalších nepylových objektů pro standardní
            (kvantitativní) pylovou analýzu
          </li>
          <li>
            recentního pylu pro pylovou morfologii a výrobu trvalých preparátů
          </li>
          <li>recentního pylu ze včelího medu</li>
          <li>současného pylového spadu z pylových pastí</li>
          <li>makroskopických uhlíků</li>
          <li>rostlinných makrozbytků</li>
          <li>
            organismů skupin <i>Cladocera</i>, <i>Chironomidae</i>
            ,&nbsp;
            <i>Diatomae</i> a <i>Testate amoebae</i>
          </li>
        </ul>
      </p>
      <p>
        Laboratorní přípravu vzorků a paleoekologické analýzy provádíme i pro
        zájemce z jiných institucí (externí zakázky). <br />
        <strong>Ceník prací</strong> a protokol pro upřesnění požadavků na
        přípravu vzorků pro pylovou analýzu naleznete&nbsp;
        <a
          href={withPrefix("/pricelist.docx")}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          zde
        </a>
        .
      </p>
      <p>
        Laboratoř má dvě pracoviště: v Brně a Průhonicích. V případě zájmu&nbsp;
        <strong>kontaktujte</strong>&nbsp;
        <Link to="/people/" state={{ person: "jamrichova" }}>
          Evu Jamrichovou
        </Link>
        ; (v Brně) nebo&nbsp;
        <Link to="/people/" state={{ person: "bobek" }}>
          Přemysla Bobka
        </Link>
        &nbsp; (v Průhonicích).
      </p>
    </div>
  ),
};
