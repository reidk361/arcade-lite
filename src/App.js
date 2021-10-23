import { ApolloProvider } from '@apollo/client';
import { client } from './services/scoresGQL';
import GridContextProvider from './components/GameGrid/GridContextProvider';
import Controls from './components/Controls';
import GameScreen from './components/GameScreen/GameScreen';
import Score from './components/Score/Score';

function App() {
  return (
    <>
    <div>
      <button type="button" id="style">Modern</button>
    <ApolloProvider client={client}>
    <GridContextProvider>
      <GameScreen />
      <Controls />
      <Score />
    </GridContextProvider>
    </ApolloProvider>
    </div>
    </>
  );
}

export default App;
