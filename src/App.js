import GameGrid from './components/GameGrid/GameGrid';
import GridContextProvider from './components/GameGrid/GridContextProvider';

function App() {
  return (
    <GridContextProvider>
      <GameGrid />
    </GridContextProvider>
  );
}

export default App;
