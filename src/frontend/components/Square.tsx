import { JSX } from 'solid-js';
import { SquareValue } from '../types/squareValue';

type Square = {
  children: SquareValue;
  onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined;
};

const Square = ({ onClick, children }: Square) => {
  return (
    <button
      class='outline-1 outline-dashed outline-red-600 w-20 h-20 text-cyan-50 text-2xl flex justify-center items-center'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Square;
