import React from "react";
import { ALink } from "../../components/atoms/StyledLink";
import { H2 } from "../../components/atoms/Headings";

import { impact as impact2011, others as others2011 } from "./p2011";
import { impact as impact2012, others as others2012 } from "./p2012";
import { impact as impact2013, others as others2013 } from "./p2013";
import { impact as impact2014, others as others2014 } from "./p2014";
import { impact as impact2015, others as others2015 } from "./p2015";
import { impact as impact2016, others as others2016 } from "./p2016";
import { impact as impact2017, others as others2017 } from "./p2017";
import { impact as impact2018, others as others2018 } from "./p2018";
import { impact as impact2019, others as others2019 } from "./p2019";
import { impact as impact2020, others as others2020 } from "./p2020";
import { impact as impact2021, others as others2021 } from "./p2021";
import { impact as impact2022, others as others2022 } from "./p2022";
import { impact as impact2023, others as others2023 } from "./p2023";
import { impact as impact2024, others as others2024 } from "./p2024";
import { impact as impact2025, others as others2025 } from "./p2025";
import { impact as impact2026, others as others2026 } from "./p2026";
import { impact as impact2027, others as others2027 } from "./p2027";
import { impact as impact2028, others as others2028 } from "./p2028";
import { impact as impact2029, others as others2029 } from "./p2029";
import { impact as impact2030, others as others2030 } from "./p2030";

const allYears = [
  { year: 2030, impact: impact2030, others: others2030 },
  { year: 2029, impact: impact2029, others: others2029 },
  { year: 2028, impact: impact2028, others: others2028 },
  { year: 2027, impact: impact2027, others: others2027 },
  { year: 2026, impact: impact2026, others: others2026 },
  { year: 2025, impact: impact2025, others: others2025 },
  { year: 2024, impact: impact2024, others: others2024 },
  { year: 2023, impact: impact2023, others: others2023 },
  { year: 2022, impact: impact2022, others: others2022 },
  { year: 2021, impact: impact2021, others: others2021 },
  { year: 2020, impact: impact2020, others: others2020 },
  { year: 2019, impact: impact2019, others: others2019 },
  { year: 2018, impact: impact2018, others: others2018 },
  { year: 2017, impact: impact2017, others: others2017 },
  { year: 2016, impact: impact2016, others: others2016 },
  { year: 2015, impact: impact2015, others: others2015 },
  { year: 2014, impact: impact2014, others: others2014 },
  { year: 2013, impact: impact2013, others: others2013 },
  { year: 2012, impact: impact2012, others: others2012 },
  { year: 2011, impact: impact2011, others: others2011 },
];

const yearsCz = allYears.map((year) => ({
  year: year.year,
  list:
    year.impact || year.others ? (
      <div>
        {year.impact && <H2>IMPAKTOVÉ PUBLIKACE</H2>}
        {year.impact}
        {year.others && <H2>OSTATNÍ PUBLIKACE, POPULARIZACE A KNIHY</H2>}
        {year.others}
      </div>
    ) : null,
}));

const yearsEn = allYears.map((year) => ({
  year: year.year,
  list:
    year.impact || year.others ? (
      <div>
        {year.impact && <H2>ARTICLES IN JOURNALS WITH IMPACT FACTOR</H2>}
        {year.impact}
        {year.others && <H2>OTHER PUBLICATIONS, POPULARIZATIONS AND BOOKS</H2>}
        {year.others}
      </div>
    ) : null,
}));

export const cz = {
  general: (
    <div>
      Výběr našich nejvýznamnějších článků s krátkým shrnutím naleznete&nbsp;
      <ALink href="https://www.ibot.cas.cz/en/labs/department-of-paleoecology/">
        zde
      </ALink>
      .
    </div>
  ),
  years: yearsCz,
};

export const en = {
  general: (
    <div>
      Our most important articles with a short summary can be found&nbsp;
      <ALink href="https://www.ibot.cas.cz/en/labs/department-of-paleoecology/">
        here
      </ALink>
      .
    </div>
  ),
  years: yearsEn,
};
