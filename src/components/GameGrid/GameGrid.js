import { useContext } from 'react';
import { GridContext } from './GridContextProvider';
import './GameGrid.css';

const GameGrid = () => {
  const { gridState, isEnd } = useContext(GridContext);

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
                className={'tetrimino' + number}
                style={
                  isEnd
                    ? {
                        height: '25px',
                        width: '25px',
                        border: '1px solid black',
                        backgroundColor: `#${Math.floor(
                          Math.random() * 16777215
                        ).toString(16)}`,
                      }
                    : {
                        height: '25px',
                        width: '25px',
                        border: '1px solid gray',
                        backgroundColor: 'darkgray',
                      }
                }
              ></div>
            ))}
          </div>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
