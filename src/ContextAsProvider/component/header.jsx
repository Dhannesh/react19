import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex justify-between p-2 bg-black dark:bg-slate-800 text-white dark:text-gray-200">
      <h1 className="text-2xl">React 19 Context as Provider</h1>
      <nav>
        <ul>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
