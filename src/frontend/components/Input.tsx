type InputProps = {
  imagePath: string;
  InputTitle: string;
};

const Input = ({ imagePath, InputTitle }: InputProps) => {
  return (
    <div class="flex self-start gap-x-2 items-end border-b-2 border-solid border-cyan-50 w-full pb-1">
      <img src={imagePath} alt="" />
      <p class="font-light">{InputTitle}</p>
    </div>
  );
};

export default Input;
