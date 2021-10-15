import { useContext } from 'react';
import { GridContext } from './GridContextProvider';

const GameGrid = () => {
  const { gridState } = useContext(GridContext);

  return (
    <>
      <ul>
        {gridState.map((index, j) => (
          <div
            style={{
              display: 'inline-block',
              
            }}
            key={j}
          >
            {index.map((number, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  paddingBottom: '5px',
                  paddingTop: '5px',
                }}
              >
                {number}
              </div>
            ))}
          </div>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
