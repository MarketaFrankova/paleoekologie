import React, { useState, useEffect } from "react";
import Paragraph from "../components/atoms/Paragraph";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/publications";
import styled from "styled-components";

const windowGlobal = typeof window !== "undefined" && window;

const IndexPage = () => {
  const [activeYear, setActiveYear] = useState(2020);

  useEffect(() => {
    windowGlobal.scrollTo(0, 0);
  }, [activeYear]);

  return (
    <Consumer>
      {({ int }) => {
        const data = int === "en" ? en : cz;

        return (
          <>
            <Paragraph>
              <SelectYear>
                {data.years.map((year) => (
                  <Year
                    active={activeYear === year.year}
                    onClick={() => {
                      setActiveYear(year.year);
                    }}
                  >
                    {year.year}
                  </Year>
                ))}
              </SelectYear>
              {data.general}

              {data.years.find((year) => activeYear === year.year)?.list}
            </Paragraph>
          </>
        );
      }}
    </Consumer>
  );
};

const SelectYear = styled.div`
  width: 100%;
  background: white;
  position: -webkit-sticky;
  position: sticky;
  top: 55px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Year = styled.div`
  color: ${(props) => (props.active ? "black" : props.theme.grey)};
  font-weight: ${(props) => props.active && "bold"};
  padding: 0 10px;
  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.grey};
  }
  &:first-child {
    padding-left: 0;
  }
  font-family: ${(props) => props.theme.fontHeading};

  &:hover {
    color: ${(props) => props.theme.main};
  }
`;

export default IndexPage;
