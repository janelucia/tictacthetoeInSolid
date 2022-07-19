type Square = {
  value: string;
  onClick: Function;
};

const Square = ({ value, onClick }: Square) => {
  return (
    <button
      class="border-2 border-solid border-white w-16 h-16 text-white"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
