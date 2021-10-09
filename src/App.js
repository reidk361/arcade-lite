
import GridContextProvider from './components/GameGrid/GridContextProvider';
import Controls from './components/Controls';
import GameScreen from './components/GameScreen/GameScreen';

function App() {
  return (
    <GridContextProvider>
      <GameScreen />
      <Controls />
    </GridContextProvider>
  );
}

export default App;
