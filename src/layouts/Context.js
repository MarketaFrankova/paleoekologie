import React, { useState } from "react";
import PropTypes from "prop-types";

const IntContext = React.createContext();

export const IntProvider = ({ children }) => {
  const [int, setInt] = useState("cz");

  return (
    <IntContext.Provider
      value={{
        int: int,
        changeToCz: () => {
          setInt("cz");
        },
        changeToEn: () => {
          setInt("en");
        },
      }}
    >
      {children}
    </IntContext.Provider>
  );
};

IntProvider.propTypes = {
  children: PropTypes.node,
};

export const Consumer = IntContext.Consumer;
