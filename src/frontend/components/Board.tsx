import { createSignal } from 'solid-js';
import Square from './Square';

const Board = () => {
  const [mark, setMark] = createSignal({ squares: Array(9).fill('') });
  const [player, setPlayer] = createSignal('X');
  const togglePlayer = () => {
    setPlayer('O');
  };

  return (
    <div>
      <h2 class="py-2">Next Player: {player}</h2>
      <div>
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
      </div>
      <div>
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
      </div>
      <div>
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
        <Square
          value={mark}
          onClick={() => {
            setMark('X');
            togglePlayer;
          }}
        />
      </div>
    </div>
  );
};

export default Board;
