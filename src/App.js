import GameGrid from './components/GameGrid/GameGrid';
import GridContextProvider from './components/GameGrid/GridContextProvider';
import Controls from './components/Controls';

function App() {
  return (
    <GridContextProvider>
      <GameGrid />
      <Controls />
    </GridContextProvider>
  );
}

export default App;
