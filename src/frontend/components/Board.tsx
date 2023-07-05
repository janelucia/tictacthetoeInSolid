import { createSignal, For, Show } from 'solid-js';
import { SquareValue } from '../types/squareValue';
import Square from './Square';

const Board = () => {
  const [player, setPlayer] = createSignal<SquareValue>('X');
  const togglePlayer = () => {
    player() === 'O' ? setPlayer('X') : setPlayer('O');
  };
  const [gameFinished, setGameFinished] = createSignal<boolean>(false);

  const initialBoard = {
    rows: Array(3).fill(Array(3).fill('')),
  };

  const [board, setBoard] = createSignal<{ rows: SquareValue[][] }>(initialBoard);
  const playerMove = (posX: number, posY: number) => {
    if (board().rows[posY][posX] !== '') {
      return;
    }
    setBoard((prev) => {
      const original = prev.rows;
      return {
        ...prev,
        rows: [
          ...original.slice(0, posY),
          [
            ...original[posY].slice(0, posX),
            player(),
            ...original[posY].slice(posX + 1),
          ],
          ...original.slice(posY + 1),
        ],
      };
    });
    if (winningCondition()) {
      setGameFinished(true);
      return;
    }
    togglePlayer();
  };

  const winningCondition = () => {
    const p = player();
    const b = board().rows;
    const across = (b[0][0] === p && b[0][1] === p && b[0][2] === p) ||
    (b[1][0] === p && b[1][1] === p && b[1][2] === p) ||
    (b[2][0] === p && b[2][1] === p && b[2][2] === p);
    const down = (b[0][0] === p && b[1][0] === p && b[2][0] === p) ||
    (b[0][1] === p && b[1][1] === p && b[2][1] === p) ||
    (b[0][2] === p && b[1][2] === p && b[2][2] === p);
    const diagonally = (b[0][0] === p && b[1][1] === p && b[2][2] === p) ||
    (b[2][0] === p && b[1][1] === p && b[0][2] === p);

    return (
      across || down || diagonally
    );
  };

  const resetGame = () => {
    setBoard(() => initialBoard);
    setGameFinished(false);
  }

  return (
    <div>
      <h2 class="py-2">Next Player: {player()}</h2>
      <section
        style="background-image: url('src/assets/gameIcons/board.svg'); background-size: contain; background-repeat: no-repeat"
        class="flex flex-col items-center"
      >
        <For each={board().rows}>
          {(row, posY) => (
            <div class="flex">
              <For each={row}>
                {(square, posX) => (
                  <Square
                    onClick={() => {
                      playerMove(posX(), posY());
                    }}
                  >
                    {square}
                  </Square>
                )}
              </For>
            </div>
          )}
        </For>
      </section>
      <Show when={gameFinished()}>
        <h1>{player()} won!</h1>
        <div onClick={resetGame}>
          <h2>Next Game</h2>
        </div>
      </Show>
    </div>
  );
};

export default Board;
