import { useContext } from 'react';
import { GridContext } from './GridContextProvider';

const GameGrid = () => {
  const { gridState } = useContext(GridContext);

  return (
    <>
      <ul>
        {gridState.map((index, i) => (
          <li key={i}>
            {index.map((number, j) => (
              <div
                style={{
                  display: 'inline-block',
                  border: '1px solid black',
                  padding: '10px',
                  paddingBottom: '5px',
                  paddingTop: '5px',
                }}
                key={j}
              >
                {number}
              </div>
            ))}
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default GameGrid;
