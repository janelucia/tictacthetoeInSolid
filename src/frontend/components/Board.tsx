import { createSignal, For, Show } from "solid-js";
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
  // const newArray = [...original.slice(0,replaceAt ), el, ...arr.slice(replaceAt + 1)]
  const fillBoard = (posX: number, posY: number) => {
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
  };

  return (
    <div>
      <h2 class="py-2">Next Player: {player()}</h2>
      <section
        style="background-image: url('src/assets/gameIcons/board.svg'); background-size: contain"
        class="flex flex-col justify-center items-center"
      >
        <For each={board().rows}>
          {(row, posY) => (
            <div class="grow-0">
              <For each={row}>
                {(square, posX) => (
                  <Square
                    onClick={() => {
                      fillBoard(posX(), posY());
                      togglePlayer();
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
