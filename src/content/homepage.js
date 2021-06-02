import React, { Fragment } from "react";
import { H2 } from "../components/atoms/Headings";
import { ALink, Simplelink } from "../components/atoms/StyledLink";

export const imgsTitleEn = [
  "The sediment description of the former glacial lake, Stará jímka site (2013).",
  "Pollen grains of Oxalis acetosella L. from the Reference pollen collection of the Czech flora (mounted in glycerine medium) in the Institute of Botany. ",
  "Obtaining a profile at the Koutské and Zábřežské meadows (2013).",
  "Trichophorum pumilum at the Gánovce site, Slovakia (2005).",
  "Transition of organic and mineral sediment at the Pukiv site in Ukraine (2019).",
  "Birch mire forest at the Slavkov site near Lipník nad Bečvou (2013).",
  "Vlasta Jankovská digging the sediment Sivárňa at the Lubovnianská basin in Slovakia (1983).",
];

export const imgsTitleCz = [
  "Popis sedimentu z bývalého ledovcového jezera, Stará jímka nad Prášily (2013)",
  "Pylová zrna šťavelu kyselého (Oxalis acetosella L.) v trvalém preparátu z Referenční pylové sbírky české květeny, BÚ.",
  "Odběr sedimentu na lokalitě Koutské a Zábřežské louky (2013).",
  "Suchopýrek maličký (Trichophorum pumilum) na lokalitě Gánovce na Spiši, Slovensko (2005).",
  "Přechod organického a minerálního sedimentu na lokalitě Pukiv na Ukrajině (2019).",
  "Rašelinná březina na lokalitě Slavkov u Lipníka nad Bečvou (2013).",
  "Vlasta Jankovská při kopání sedimentu Sivárňa v Lubovnianské kotlině na Slovensku (1983).",
];

export const en = (
  <Fragment>
    <H2>About us</H2>
    <div align="justify">
      <p>
        The Department of Paleoecology deals with&nbsp;
        <Simplelink to="/research">research</Simplelink> of long-term dynamics
        of vegetation and its natural environment. We focus mainly on the period
        of the Last Glacial and the Holocene, i.e. past 15 000 years. We use
        complex paleoecological approach (multi-proxy) involving several types
        of analyses. Our <Simplelink to="/people">team</Simplelink> consists of
        paleoecologists specialized in the analyses of pollen and non-pollen
        palynomorphs, macroremains, charcoals, diatoms and phytolites. These
        objects are most often found in organic sediments – unique natural
        archives. Moreover, we have an extensive dataset from our pollen
        monitoring network allowing us to precisely interpret fossil pollen
        records. Samples for analyses are prepared in our&nbsp;
        <Simplelink to="/laboratory">laboratories</Simplelink>. When
        identifying, we use our&nbsp;
        <Simplelink to="/collections">collections</Simplelink> of pollen and
        seeds as a comparative material.
      </p>
      <p>
        Even though we have been operating as an independent department since
        2021 at our workplaces in Brno and Průhonice, paleoecology has a
        continuous&nbsp;
        <ALink href="http://ekolbrno.ibot.cas.cz/historie/">tradition</ALink>of
        60 years at the Institute of Botany. Our interdisciplinary research is
        also focused on the connection of paleoecological records with data on
        recent ecosystems, therefore we cooperate especially with the&nbsp;
        <ALink href="http://ekolbrno.ibot.cas.cz/">
          Department of Vegetation Ecology
        </ALink>
        (Institute of Botany of the CAS), the Department of Botany and Zoology
        (Faculty of Science, Masaryk University) and the Department of Botany
        (Faculty of Science, Charles University). We are also developing
        collaboration with archaeologists and historians from universities and
        academies of sciences.
      </p>
    </div>
  </Fragment>
);

export const cz = (
  <Fragment>
    <H2>O nás</H2>
    <div align="justify">
      <p>
        Oddělení paleoekologie se zabývá&nbsp;
        <Simplelink to="/research">výzkumem</Simplelink> dlouhodobé dynamiky
        vegetace a přírodního prostředí. Zaměřujeme se zejména na období pozdní
        doby ledové a holocénu, tedy posledních 15 tisíc let. Využíváme
        komplexní paleoekologický přístup zahrnující více typů analýz
        (multi-proxy). Náš <Simplelink to="/people">tým</Simplelink> tvoří
        paleoekologové specializovaní na analýzu pylu a nepylových objektů,
        makroskopických zbytků rostlin, uhlíků, rozsivek a fytolitů. Tyto
        objekty nacházíme nejčastěji v organických sedimentech – unikátních
        přírodních archivech. Zároveň disponujeme rozsáhlým souborem dat z
        monitoringu současného pylového spadu, který využíváme pro přesnější
        interpretaci fosilního pylového záznamu. Vzorky určené k analýzám jsou
        připravovány v našich&nbsp;
        <Simplelink to="/laboratory">laboratořích</Simplelink>. Při determinaci
        využíváme naše <Simplelink to="/collections">sbírky</Simplelink> pylů a
        semen jako srovnávací materiál.
      </p>
      <p>
        Paleoekologický výzkum má na Botanickém ústavu nepřetržitou
        šedesátiletou&nbsp;
        <ALink href="http://ekolbrno.ibot.cas.cz/historie/">tradici</ALink>.
        Jako samostatné oddělení fungujeme až od roku 2021 na pracovištích v
        Brně a Průhonicích. Náš interdisciplinární výzkum je zaměřen i na
        propojení paleoekologických záznamů s údaji o recentních ekosystémech,
        přičemž spolupracujeme zejména s&nbsp;
        <ALink href="http://ekolbrno.ibot.cas.cz/">
          Oddělením vegetační ekologie (BÚ AV ČR)
        </ALink>
        , Ústavem botaniky a zoologie PřF MU a Katedrou botaniky PřF UK.
        Mezioborovou spolupráce rozvíjíme rovněž s archeology a historiky z
        univerzit i Akademie věd.
      </p>
    </div>
  </Fragment>
);
