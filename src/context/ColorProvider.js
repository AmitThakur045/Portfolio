import { createContext, useContext, useEffect, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#f30841");

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const ColorState = () => {
  return useContext(ColorContext);
};

export default ColorProvider;
