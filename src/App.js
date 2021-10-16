
import GridContextProvider from './components/GameGrid/GridContextProvider';
import Controls from './components/Controls';
import GameScreen from './components/GameScreen/GameScreen';
import Score from './components/Score/Score';

function App() {
  return (
    <GridContextProvider>
      <GameScreen />
      <Controls />
      <Score />
    </GridContextProvider>
  );
}

export default App;
