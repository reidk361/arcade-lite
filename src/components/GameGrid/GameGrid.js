import { useContext } from 'react';
import { GridContext } from './GridContextProvider';

const GameGrid = () => {
  const { gridState, setPiece } = useContext(GridContext);

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
      <h2
        onClick={() =>
          setTimeout(() => {
            setPiece('square');
          }, 1000)
        }
        style={{ margin: '40px' }}
      >
        {' '}
        START{' '}
      </h2>
    </>
  );
};

export default GameGrid;
