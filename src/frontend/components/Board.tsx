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
      <section
        style="background-image: url('src/assets/gameIcons/board.svg'); background-size: contain"
        class="flex flex-col items-center justify-center gap-y-2"
      >
        <div class="flex gap-x-2">
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
        <div class="flex gap-x-2">
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
        <div class="flex gap-x-2">
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
      </section>
    </div>
  );
};

export default Board;
