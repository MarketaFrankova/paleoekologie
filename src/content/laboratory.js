import React from "react";
import { Link } from "gatsby";

export const labEn = {
  title: "Palaeoecological laboratories",
  description: (
    <div align="justify">
      We offer the services of our laboratory to those interested in fast and
      high-quallity analyses. We process samples of peat bogs, fens, lake
      sediments, moss polsters, archaeological cultural layers and surface soil
      samples.
      <p>
        <b>We prepare samples for analyses of:</b>
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
            OOrganisms of groups <i>Cladocera</i>, <i>Chironomidae</i>,{" "}
            <i>Diatomae</i> and <i>Testate amoebae</i>)
          </li>
        </ul>
      </p>
      <p>
        We perform analyses also for colleagues from other institutions
        (external contracts): the price list of the works and protocol
        specifying the requirements for the preparation of the samples can be
        found{" "}
        <a
          href="http://ekolbrno.ibot.cas.cz/wp-content/uploads/2019/06/cenik-sluzeb-palynologicke-laboratore.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        The laboratory has two workplaces: in Brno and Průhonice. If you are
        interested, <b>contact</b>{" "}
        <Link to="/people/" state={{ person: "frankova" }}>
          Markéta Fránková
        </Link>{" "}
        (in Brno) or{" "}
        <Link to="/people/" state={{ person: "bobek" }}>
          Přemysl Bobek
        </Link>{" "}
        (in Průhonice)
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
        <b>Naše laboratoř připravuje vzorky na analýzu:</b>
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
            rozsivek (organismů skupin <i>Cladocera</i>, <i>Chironomidae</i>,{" "}
            <i>Diatomae</i> a <i>Testate amoebae</i>)
          </li>
        </ul>
      </p>
      <p>
        Laboratorní přípravu vzorků a paleoekologické analýzy provádíme i pro
        zájemce z jiných institucí (externí zakázky). <br />
        <b>Ceník prací</b> a protokol pro upřesnění požadavků na přípravu vzorků
        pro pylovou analýzu naleznete{" "}
        <a
          href="http://ekolbrno.ibot.cas.cz/wp-content/uploads/2019/06/cenik-sluzeb-palynologicke-laboratore.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          zde
        </a>
        .
      </p>
      <p>
        Laboratoř má dvě pracoviště: v Brně a Průhonicích. V případě zájmu{" "}
        <b>kontaktujte</b>{" "}
        <Link to="/people/" state={{ person: "frankova" }}>
          Markétu Fránkovou
        </Link>{" "}
        (v Brně) nebo{" "}
        <Link to="/people/" state={{ person: "bobek" }}>
          Přemysla Bobka
        </Link>{" "}
        (v Průhonicích)
      </p>
    </div>
  ),
};
