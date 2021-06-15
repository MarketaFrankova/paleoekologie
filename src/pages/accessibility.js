import React from "react";
import Paragraph from "../components/atoms/Paragraph";
import { H2, H3 } from "../components/atoms/Headings";

const IndexPage = () => {
  return (
    <Paragraph>
      <H2>Prohlášení o přístupnosti</H2>
      <p>
        Oddělení paleoekologie Botanického ústavu AV ČR, v.v.i. se zavazuje k
        zpřístupnění své internetové stránky v souladu se zákonem č. 99/2019
        Sb., o přístupnosti internetových stránek a mobilních aplikací a o změně
        zákona č. 365/2000 Sb., o informačních systémech veřejné správy a o
        změně některých dalších zákonů, ve znění pozdějších předpisů, které
        provádějí směrnici Evropského parlamentu a Rady (EU) 2016/2102.
      </p>
      <p>
        Toto prohlášení o přístupnosti se vztahuje na internetovou stránku
        www.ibot.cas.cz/paleolab.
      </p>

      <H3 green>STAV SOULADU</H3>
      <p>
        Tato stránka je v souladu se zákonem č. 99/2019 Sb., o přístupnosti
        internetových stránek a mobilních aplikací a o změně zákona č. 365/2000
        Sb., o informačních systémech veřejné správy a o změně některých dalších
        zákonů, ve znění pozdějších předpisů, s výjimkami uvedenými níže.
      </p>

      <ul>
        <li>
          Některé informace na tomto webu jsou nabízeny v podobě dokumentů
          formátu PDF. Pro zobrazení takových dokumentů je třeba mít
          nainstalovaný prohlížeč Adobe Reader, který je zdarma ke stažení z
          internetového serveru společnosti Adobe. Případně některý z
          alternativních prohlížečů (Foxit Reader, PDF-XChange Viewer a mnoho
          dalších). Většina dokumentů ve formátu PDF jde také přímo zobrazit v
          běžných prohlížečích. Dále zde mohou být dokumenty ve formátu MS
          Office, případně podobných kancelářských aplikací (ve formátech .doc,
          .docx a podobných). Takovéto soubory dokáže zobrazit a editovat
          většina běžně používaných textových editorů (MS Office, Libre Office,
          Open Office).
        </li>
        <li>
          Komponenty třetích stran použité na webu nemusí splňovat podmínky o
          přístupnosti (např. Twitter, Youtube apod.)
        </li>
      </ul>
      <H3 green>Vypracování tohoto prohlášení o přístupnosti</H3>
      <p>Toto prohlášení o přístupnosti bylo vypracováno dne 16.6.2021</p>
      <p>
        Toto prohlášení bylo vypracováno posouzením provedeným třetí stranou –
        Lenka Hubáčková (IČO 07951825). Pro vypracování prohlášení byl použit
        zákon č. 99/2019 Sb., a metodický pokyn MVČR k tomuto zákonu, normy EN
        301 549 V2 1.2 a mezinárodně uznávanému standardu Web Content
        Accessibility Guidelines – WCAG 2.1. Při posuzování se sledovala shoda s
        kritérii uvedenými v Metodickém pokynu k zákonu č. 99/2019 Sb., ve znění
        pozdějších předpisů a standardu Web Content Accessibility Guidelines –
        WCAG 2.1.
      </p>

      <H3 green>Alternativní postupy pro získání informací</H3>
      <p>
        Pokud se na internetových stránkách nachází informace, jež není či
        nemůže být přístupná, poskytuje Oddělení paleoekologie v souladu s § 4,
        odst. 7, zákona, náhradní způsob získání informací. Je možné kontaktovat
        správce obsahu (viz kontakty níže). Správce obsahu se bude snažit
        příslušnou informaci uživateli předat v pro něj vhodné formě, bude-li to
        možné.
      </p>
      <H3 green>Postupy pro prosazování práva</H3>
      <p>
        V případě neuspokojivé odpovědi na oznámení nebo žádost, kontaktujte
        příslušný orgán pro prosazování práva: (MV ČR, odbor eGovernmentu,
        náměstí Hrdinů 1634/3, 140 21 Praha 4; e-mail:&nbsp;
        <a href="mailto:pristupnost@mvcr.cz">pristupnost@mvcr.cz</a>).
      </p>

      <H3 green>Kontakty na správce obsahu</H3>
      <p>
        <b>Lydie Dudová</b>:{" "}
        <a href="mailto:lydie.dudova@ibot.cas.cz">lydie.dudova@ibot.cas.cz</a> |
        +420 541 126 223
      </p>
      <p>
        <b>Petra Hájková</b>:{" "}
        <a href="mailto:buriana@sci.muni.cz">buriana@sci.muni.cz</a> | +420 541
        126 223
      </p>
    </Paragraph>
  );
};

export default IndexPage;
