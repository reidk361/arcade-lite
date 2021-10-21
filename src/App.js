import { ApolloProvider } from '@apollo/client';
import { client } from './services/notesGQL';
import GridContextProvider from './components/GameGrid/GridContextProvider';
import Controls from './components/Controls';
import GameScreen from './components/GameScreen/GameScreen';
import Score from './components/Score/Score';

function App() {
  return (
    <ApolloProvider client={client}>
    <GridContextProvider>
      <GameScreen />
      <Controls />
      <Score />
    </GridContextProvider>
    </ApolloProvider>
  );
}

export default App;
