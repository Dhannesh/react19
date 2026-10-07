import { ThemeContext } from "../context";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Context is not available");
  return context;
};
