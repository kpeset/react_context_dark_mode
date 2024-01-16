import { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";

import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <main className={theme}>
        <Content />
      </main>
    </>
  );
}

export default App;
