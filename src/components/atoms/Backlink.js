import React from "react";
import styled from "styled-components";
import { Consumer } from "../../layouts/Context";

const Backlink = ({ handleClick, ...props }) => {
  return (
    <Consumer>
      {({ int }) => {
        return (
          <BackLink onClick={(e) => handleClick(e)} {...props}>
            <span>{"<"}</span> {int === "en" ? "Back" : "Zpět"}
          </BackLink>
        );
      }}
    </Consumer>
  );
};

export default Backlink;

const BackLink = styled.div`
  cursor: pointer;
  margin-left: 7px;

  &:hover {
    margin-left: 0;
    span {
      margin-right: 7px;
      font-weight: bold;
    }
  }
  span {
    margin-right: 3px;
    padding-bottom: 3px;
    height: 100%;
    display: inline-block;
  }
`;
