import Score from '../Score/Score';
const EndGame = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1 style={{ padding: '10px', margin: '10px' }}>
        TOP TEN TETRIS SCORES:
        <h2>(TOP TEN)</h2>
        <div >
          YOUR SCORE:
          <Score />
        </div>
      </h1>
    </div>
  );
};

export default EndGame;
