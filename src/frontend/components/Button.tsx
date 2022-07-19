import { JSX } from 'solid-js';

type ButtonProps = {
  action: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined;
  children: string;
};

const Button = ({ action, children }: ButtonProps) => {
  return (
    <button onClick={action} class="bg-cyan-600 px-4 py-2 rounded text-xl">
      {children}
    </button>
  );
};

export default Button;
