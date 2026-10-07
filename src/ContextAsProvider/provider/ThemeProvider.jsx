import { useState } from "react";
import { ThemeContext } from "../context";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme((prev) => !prev);
    // document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("dark");
    console.log("Theme changed:", theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
