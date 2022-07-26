import { createSignal, For } from "solid-js";
import Square from "./Square";

export type SquareValue = "X" | "O" | "";

const Board = () => {
  const [player, setPlayer] = createSignal<SquareValue>("X");
  const togglePlayer = () => {
    player() === "O" ? setPlayer("X") : setPlayer("O");
  };

  const [board, setBoard] = createSignal<{ rows: SquareValue[][] }>({
    rows: Array(3).fill(Array(3).fill("")),
  });
  const playerMove = (posX: number, posY: number) => {
    if (board().rows[posY][posX] !== "") {
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
    togglePlayer();
  };

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
    </div>
  );
};

export default Board;
