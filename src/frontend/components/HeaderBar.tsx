const HeaderBar = ({ children }) => {
  return (
    <section class="flex gap-x-12 font-franklin items-center">
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
      {children}
    </section>
  );
};

export default HeaderBar;
