import React from "react";
import styled from "styled-components";
import { Consumer } from "../../layouts/Context";

const Backlink = ({ handleClick, ...props }) => {
  return (
    <Consumer>
      {({ int }) => (
        <BackLink tabIndex="0" onClick={(e) => handleClick(e)} {...props}>
          <span>{"<"}</span> {int === "en" ? "Back" : "Zpět"}
        </BackLink>
      )}
    </Consumer>
  );
};

export default Backlink;

const BackLink = styled.button`
  cursor: pointer;
  margin-left: 7px;
  border: none;
  padding: 0;
  font-size: 1rem;
  background: transparent;

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
