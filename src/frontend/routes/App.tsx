import type { Component } from 'solid-js';
import Input from '../components/Input';

const App: Component = () => {
  return (
    <>
      <main class="flex flex-col gap-y-10 items-center justify-center h-screen">
        <img
          class="w-2/3 h-2/3"
          src="src/assets/icon/logoWithText.svg"
          alt=""
        />
        <h1 class="">Play Tic Tac Toe as you have never played it before.</h1>
      </main>
    </>
  );
};

export default App;
