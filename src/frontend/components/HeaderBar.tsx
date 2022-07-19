const HeaderBar = ({ children }) => {
  return (
    <section class="flex gap-x-10 font-franklin items-center">
      <div class="flex gap-x-1">
        <img
          src="src/assets/icon/logo.svg"
          alt="Tic Tac The Toe Logo without text"
        />
        <h1 class="leading-4">
          Tic Tac <br /> The Toe
        </h1>
      </div>
      {children}
    </section>
  );
};

export default HeaderBar;
