import Header from "./components/Header";
import ButtonThemeContext from "./components/button/ButtonThemeContext";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import usePokemon from "./hooks/getPokemons";

function App() {
  usePokemon()
  return (
    <>
      <ButtonThemeContext />
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
