import { Show, createEffect, createSignal, onCleanup } from 'solid-js';
import { Menu } from './Menu';

export const Footer = () => {
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
    <footer class="flex justify-center">
      <Show
        when={menuPosition() === 'mobile'}
        fallback={<div>Made with ♥ from Jane</div>}
      >
        <Menu />
      </Show>
    </footer>
  );
};
