import Score from '../Score/Score';
import { useQuery } from '@apollo/client';
import { GET_SCORES } from '../../services/scoresGQL';

const Scores = (props) => {
    const { loading, error, data } = useQuery(GET_SCORES);
  return (
    <div>
      {props.submitted === true && (
        <h1 style={{ padding: '10px', margin: '10px' }}>
          TOP TEN TETRIS SCORES:
          {loading && <p>loading...</p>}
          {error && <p>{error}</p>}
          {data &&
            data.scores.map(({ username, score, _id }) => (
              <div key={_id}>
                <p>
                  {username}: {score}
                </p>
              </div>
            ))}
          <div>
            YOUR SCORE:
            <Score />
          </div>
          <div>
              
          </div>
        </h1>
      )}
    </div>
  );
};

export default Scores;