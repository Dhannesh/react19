import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>{theme ? "🌙" : "☀️"}</button>;
};
export default ThemeSwitcher;
