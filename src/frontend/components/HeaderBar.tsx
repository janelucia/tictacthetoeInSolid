import { Show, createEffect, createSignal, onCleanup } from 'solid-js';
import { Menu } from './Menu';

const HeaderBar = () => {
  function getMenuPosition(): 'desktop' | 'mobile' {
    return window.innerWidth >= 768 ? 'desktop' : 'mobile';
  }

  const [menuPosition, setMenuPosition] = createSignal(getMenuPosition());

  createEffect(() => {
    const handleResize = () => {
      setMenuPosition(getMenuPosition());
    };

    window.addEventListener('resize', handleResize);
    onCleanup(() => {
      window.removeEventListener('resize', handleResize);
    });
  });

  return (
    <header class="flex gap-x-12 font-franklin items-center justify-between">
      <div class="flex gap-x-1">
        <img
          src="src/assets/icon/logo.svg"
          alt="Tic Tac The Toe Logo without text"
        />
        <h1 class="leading-4 text-xs uppercase">
          <span class="text-logoDarker">Tic &nbsp;</span>
          <span class="text-logoDark">Tac</span> <br />
          <span class="text-logoLight">The </span>
          <span class="text-logoLighter">Toe</span>
        </h1>
      </div>
      <Show when={menuPosition() === 'desktop'}>
        <Menu />
      </Show>
    </header>
  );
};

export default HeaderBar;
