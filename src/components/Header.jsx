import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className={theme}>
      <ul>
        <li>Accueil</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      <button onClick={handleClick}>Changer style</button>
    </nav>
  );
}
