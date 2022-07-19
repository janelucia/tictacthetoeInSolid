import { useNavigate } from 'solid-app-router';
import type { Component } from 'solid-js';
import Button from '../components/Button';

const App: Component = () => {
  const navigate = useNavigate();

  return (
    <>
      <main class="flex flex-col justify-center items-center gap-y-10 h-screen">
        <img
          class="w-2/3 md:w-1/3"
          src="src/assets/icon/logoWithText.svg"
          alt=""
        />
        <h1 class="font-franklin text-center text-xl">
          <strong>Tic Tac Toe</strong> as you have
          <span class="font-bold">never</span> played it!
        </h1>
        <Button action={() => navigate('/browse')}>Let's play!</Button>
      </main>
    </>
  );
};

export default App;
