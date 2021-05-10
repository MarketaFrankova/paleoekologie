import React, { Fragment } from "react";
import { H2 } from "../components/atoms/Headings";
import { ALink, Simplelink } from "../components/atoms/StyledLink";

export const en = (
  <Fragment>
    <H2>About us</H2>
    <div align="justify">
      <p>
        The Department of Paleoecology deals with{" "}
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
        records. Samples for analyses are prepared in our{" "}
        <Simplelink to="/laboratory">laboratories</Simplelink>. When
        identifying, we use our{" "}
        <Simplelink to="/collections">collections</Simplelink> of pollen and
        seeds as a comparative material.
      </p>
      <p>
        Even though we have been operating as an independent department since
        2021 at our workplaces in Brno and Průhonice, paleoecology has a
        continuous{" "}
        <ALink href="http://ekolbrno.ibot.cas.cz/historie/">tradition</ALink>of
        60 years at the Institute of Botany. Our interdisciplinary research is
        also focused on the connection of paleoecological records with data on
        recent ecosystems, therefore we cooperate especially with the{" "}
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
        Oddělení paleoekologie se zabývá{" "}
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
        připravovány v našich{" "}
        <Simplelink to="/laboratory">laboratořích</Simplelink>. Při determinaci
        využíváme naše <Simplelink to="/collections">sbírky</Simplelink> pylů a
        semen jako srovnávací materiál.
      </p>
      <p>
        Paleoekologický výzkum má na Botanickém ústavu nepřetržitou
        šedesátiletou{" "}
        <ALink href="http://ekolbrno.ibot.cas.cz/historie/">tradici</ALink>.
        Jako samostatné oddělení fungujeme až od roku 2021 na pracovištích v
        Brně a Průhonicích. Náš interdisciplinární výzkum je zaměřen i na
        propojení paleoekologických záznamů s údaji o recentních ekosystémech,
        přičemž spolupracujeme zejména s{" "}
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
