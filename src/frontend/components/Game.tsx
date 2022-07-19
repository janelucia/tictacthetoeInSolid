import Board from './Board';

const Game = () => {
  return (
    <div class="flex flex-col items-center text-center gap-y-10">
      <div>
        <Board />
      </div>
      <div>
        <div>status</div>
        <ol>TODO</ol>
      </div>
    </div>
  );
};

export default Game;
