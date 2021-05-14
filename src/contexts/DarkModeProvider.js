import React, { createContext, useMemo, useState } from "react";

const Context = createContext();
const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const value = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      toggle: () => setDarkMode((prev) => !prev),
    }),

    [darkMode, setDarkMode]
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { DarkModeProvider };
export default Context;
