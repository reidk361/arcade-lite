import { ApolloProvider } from "@apollo/client";
import { client } from "./services/scoresGQL";
import GridContextProvider from "./components/GameGrid/GridContextProvider";
import Controls from "./components/Controls";
import GameScreen from "./components/GameScreen/GameScreen";
import Score from "./components/Score/Score";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import ThemeBtn, {} from "./components/ThemeBtn";

const themes = {
  Retro: "retro.css",
  Modern: "modern.css",
};

function App() {
  return (
    <ThemeSwitcherProvider
      defaultTheme="Retro"
      insertionPoint={document.getElementById('inject-styles-here')}
      themeMap={themes}
    >
      <ThemeBtn />
      <ApolloProvider client={client}>
        <GridContextProvider>
          <GameScreen />
          <Controls />
          <Score />
        </GridContextProvider>
      </ApolloProvider>
    </ThemeSwitcherProvider>
  );
}

export default App;
