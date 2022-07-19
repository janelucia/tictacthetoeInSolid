import { JSX } from 'solid-js';

type Square = {
  value: string;
  onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined;
};

const Square = ({ value, onClick }: Square) => {
  return (
    <button
      class="outline-1 outline-dashed outline-red-600 w-20 h-20 text-cyan-50 "
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
