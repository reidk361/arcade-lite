import { useContext } from 'react';
import { GridContext } from './GridContextProvider';

const GameGrid = () => {
  const { gridState } = useContext(GridContext);

  return (
    <>
      <ul>
        {gridState.map((index, i) => (
          <div
            style={{
              display: 'inline-block',
            }}
            key={i}
          >
            {index.map((number, j) => (
              <div
                key={j}
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
