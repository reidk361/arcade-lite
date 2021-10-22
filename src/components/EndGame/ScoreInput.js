import { useMutation } from '@apollo/client';
import { INSERT_SCORE } from '../../services/scoresGQL';
import { useContext } from 'react';
import { GridContext } from '../GameGrid/GridContextProvider';

const ScoreInput = (props) => {
  const [mutateFunction, { data }] = useMutation(INSERT_SCORE);
  const { SCORE } = useContext(GridContext);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await mutateFunction({
            variables: { username: props.input, score: SCORE },
          });
          console.log('submitted score: ', data.score);
          console.log('submitted username: ', data.username);
          props.setInput('');
          props.setSubmitted((prev) => !prev);
        }}
      >
        <input
          value={props.input}
          onChange={(e) => props.setInput(e.target.value)}
        />
        <div type="submit">Add Todo</div>
      </form>
    </div>
  );
};

export default ScoreInput;
