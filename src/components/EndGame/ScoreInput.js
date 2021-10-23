import { useMutation } from '@apollo/client';
import { INSERT_SCORE } from '../../services/scoresGQL';
import { useContext } from 'react';
import { GridContext } from '../GameGrid/GridContextProvider';
import Scores from './Scores';

const ScoreInput = (props) => {
  const [mutateFunction, { data, error, loading }] = useMutation(INSERT_SCORE);
  const { SCORE } = useContext(GridContext);

  return (
    <div>
      {!props.submitted && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await mutateFunction({
              variables: { username: props.input, score: SCORE },
            });
            props.setInput('');
            props.setSubmitted((prev) => !prev);
          }}
        >
          <input
            value={props.input.slice(0, 3)}
            onChange={(e) => props.setInput(e.target.value)}
          />
          <button type="submit">Input Initials</button>
        </form>
      )}
      {data && <Scores submitted={props.submitted} />}
      {loading && 'loading...'}
      {error && error.message}
    </div>
  );
};

export default ScoreInput;
