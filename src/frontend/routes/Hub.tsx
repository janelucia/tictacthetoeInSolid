import { Footer } from '../components/Footer';
import Game from '../components/Game';
import HeaderBar from '../components/HeaderBar';

const Hub = () => {
  return (
    <>
      <HeaderBar />
      <main>
        <Game />
      </main>
      <Footer />
    </>
  );
};

export default Hub;
