import { Show } from 'solid-js';
import { Menu } from './Menu';

export const Footer = () => {
  return (
    <footer class="flex justify-center">
      <Show
        when={window.innerWidth < 768}
        fallback={<div>Made with ♥ from Jane</div>}
      >
        <Menu />
      </Show>
    </footer>
  );
};
