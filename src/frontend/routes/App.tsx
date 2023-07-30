import {
  createSignal,
  type Component,
  createEffect,
  onCleanup,
} from 'solid-js';
import Button from '../components/Button';
import HeaderBar from '../components/HeaderBar';
import { useNavigate } from '@solidjs/router';
import { Footer } from '../components/Footer';

const App: Component = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBar />
      <main class="flex flex-col justify-center items-center gap-y-10 flex-1">
        <img
          class="w-1/3 md:w-1/3"
          src="src/assets/icon/logoWithText.svg"
          alt=""
        />
        <h1 class="font-franklin text-center text-xl">
          <strong>Tic Tac Toe</strong> as you have
          <span class="font-bold pl-1">never</span> played it!
        </h1>
        <Button action={() => navigate('/hub')}>Let's play!</Button>
      </main>
      <Footer />
    </>
  );
};

export default App;
