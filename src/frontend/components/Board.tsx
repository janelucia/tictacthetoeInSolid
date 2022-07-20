import { createSignal } from 'solid-js';
import Square from './Square';

export type SquareValue = 'X' | 'O' | '';

const Board = () => {
  const [mark, setMark] = createSignal<{ squares: SquareValue[] }>({
    squares: Array(9).fill('X'),
  });
  const [player, setPlayer] = createSignal<SquareValue>('X');
  const togglePlayer = () => {
    player() === 'O' ? setPlayer('X') : setPlayer('O');
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
            value={mark().squares[0]}
            onClick={() => {
              setMark((prev) => {
                return {
                  squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
                };
              });
              togglePlayer();
            }}
          />
          <Square
            value={mark().squares[1]}
            onClick={() => {
              setMark((prev) => {
                return { squares: Array(9).fill('O') };
              });
              togglePlayer();
            }}
          />
          <Square
            value={mark().squares[2]}
            onClick={() => {
              setMark((prev) => {
                return { squares: Array(9).fill('O') };
              });
              togglePlayer();
            }}
          />
        </div>
        <div class="flex gap-x-2">
          <Square
            value={mark().squares[3]}
            onClick={() => {
              setMark((prev) => {
                return { squares: Array(9).fill('O') };
              });
              togglePlayer();
            }}
          />
          <Square
            value={mark().squares[4]}
            onClick={() => {
              setMark((prev) => {
                return { squares: Array(9).fill('O') };
              });
              togglePlayer();
            }}
          />
          <Square
            value={mark().squares[5]}
            onClick={() => {
              setMark((prev) => {
                return { squares: Array(9).fill('O') };
              });
              togglePlayer();
            }}
          />
        </div>
        <div class="flex gap-x-2">
          <Square
            value={mark().squares[6]}
            onClick={() => {
              setMark((prev) => {
                return { squares: Array(9).fill('O') };
              });
              togglePlayer();
            }}
          />
          <Square
            value={mark().squares[7]}
            onClick={() => {
              setMark((prev) => {
                return { squares: Array(9).fill('O') };
              });
              togglePlayer();
            }}
          />
          <Square
            value={mark().squares[8]}
            onClick={() => {
              setMark((prev) => {
                return { squares: Array(9).fill('O') };
              });
              togglePlayer();
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Board;
