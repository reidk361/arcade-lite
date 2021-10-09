import { useContext } from 'react';
import { GridContext } from './GridContextProvider';
const GameGrid = () => {
  const { gridState } = useContext(GridContext);

  return (
      <>
        <ul>
          {gridState.map((index, i) => (
            <li key={i}>{index}</li>
          ))}
        </ul>
      </>
  );
};

export default GameGrid;
