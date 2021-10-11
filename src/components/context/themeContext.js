import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = React.useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
 