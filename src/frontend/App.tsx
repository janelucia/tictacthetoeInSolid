import type { Component } from 'solid-js';
import Game from './components/Game';

const App: Component = () => {
  return (
    <>
      <header class="h-14 flex justify-center items-center bg-c rounded-b">
        <h1 class="font-bold text-2xl text-center text-white">
          Tic Tac The Toe
        </h1>
      </header>
      <main class="flex justify-center items-center text-white">
        <Game />
      </main>
    </>
  );
};

export default App;
