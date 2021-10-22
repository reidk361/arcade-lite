
import { useState } from 'react';
import ScoreInput from './ScoreInput';

const EndGame = () => {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {(
        <ScoreInput
          input={input}
          setInput={setInput}
          setSubmitted={setSubmitted}
          submitted={submitted}
        />
      )}
      
    </div>
  );
};

export default EndGame;
