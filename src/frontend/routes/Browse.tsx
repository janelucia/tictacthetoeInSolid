import Game from '../components/Game';
import HeaderBar from '../components/HeaderBar';

const Browse = () => {
  return (
    <>
      <header>
        <HeaderBar>NORMAL</HeaderBar>
      </header>
      <main>
        <Game />
      </main>
    </>
  );
};

export default Browse;
