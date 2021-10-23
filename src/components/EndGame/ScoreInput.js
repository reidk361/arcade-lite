import { useMutation } from '@apollo/client';
import { INSERT_SCORE } from '../../services/scoresGQL';
import { useContext } from 'react';
import { GridContext } from '../GameGrid/GridContextProvider';
import Scores from './Scores';
import './ScoreInput.css';




const ScoreInput = (props) => {
  const [mutateFunction, { data, error, loading }] = useMutation(INSERT_SCORE);
  const { SCORE } = useContext(GridContext);

  return (
    <div >
      {!props.submitted && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            props.setSubmitted((prev) => !prev);
            await mutateFunction({
              variables: { username: props.input, score: SCORE },
            });
            props.setInput('');

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
      {loading &&  <div className="ld ld-spin"
    style={{fontSize: '24px', color:'#0F00FF'}}>loading...</div>}
      {error && error.message}
    </div>
  );
};

export default ScoreInput;
