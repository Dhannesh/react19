import { ThemeContext } from "../context";
import { use } from "react";

export const useTheme = () => {
  const context = use(ThemeContext);
  if (!context) throw new Error("Context is not available");
  return context;
};
