import { Footer } from '../components/Footer';
import Game from '../components/Game';
import HeaderBar from '../components/HeaderBar';

const Hub = () => {
  return (
    <>
      <HeaderBar />
      <main class="flex-1">
        <Game />
      </main>
      <Footer />
    </>
  );
};

export default Hub;
