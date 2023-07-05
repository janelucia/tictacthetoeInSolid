import { Show, createEffect, createSignal, on } from 'solid-js';
import { A } from '@solidjs/router';
import { TbGoGame } from 'solid-icons/tb';
import { FaSolidRankingStar, FaSolidXmark, FaSolidPlus } from 'solid-icons/fa';
import { CgProfile } from 'solid-icons/cg';

export const Menu = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const handleToggle = () => {
    setIsOpen(!isOpen());
  };
  const menu = {
    hub: { name: 'Game Hub', href: '/hub' },
    leaderboard: { name: 'Leaderboard', href: '/leaderboard' },
    profile: { name: 'Profile', href: '/profile' },
  };

  return (
    <Show
      when={window.innerWidth < 768}
      fallback={() => (
        <div class="flex p-1 gap-4 bg-gray-700 rounded-md">
          <A
            href={menu.hub.href}
            class="px-4 py-2 hover:bg-paletteLilac rounded-md"
            activeClass="bg-paletteLilac"
          >
            {menu.hub.name}
          </A>
          <A
            href={menu.leaderboard.href}
            class="px-4 py-2 hover:bg-paletteLilac rounded-md"
            activeClass="bg-paletteLilac"
          >
            {menu.leaderboard.name}
          </A>
          <A
            href={menu.profile.href}
            class="px-4 py-2 hover:bg-paletteLilac rounded-md"
            activeClass="bg-paletteLilac"
          >
            {menu.profile.name}
          </A>
        </div>
      )}
    >
      {!isOpen() && (
        <button
          class="bg-paletteLilac p-4 rounded-full text-2xl fill-white"
          onClick={handleToggle}
        >
          <FaSolidPlus />
        </button>
      )}
      {isOpen() && (
        <div class="flex gap-2 bg-gray-700 opacity-95 py-4 rounded-full w-full text-2xl justify-evenly">
          <A href={menu.hub.href}>
            <TbGoGame />
          </A>
          <A class="fill-white" href={menu.leaderboard.href}>
            <FaSolidRankingStar />
          </A>
          <button class="fill-white" onClick={handleToggle}>
            <FaSolidXmark />
          </button>
          <A href={menu.profile.href}>
            <CgProfile />
          </A>
        </div>
      )}
    </Show>
  );
};
