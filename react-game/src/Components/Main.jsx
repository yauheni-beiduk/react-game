import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Playground from "./Playground/Playground";
import bitcoin from "./Playground/Coin/iconsCoin/bitcoin.png";
import dollar from "./Playground/Coin/iconsCoin/dollars.png";
import euro from "./Playground/Coin/iconsCoin/euro.png";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Main({ setGameState, gameState, score, setScore, sec, setTime }) {
  const handle = useFullScreenHandle();
  const [countPigs, setCountPigs] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);
  const imagesUrl = {
    bitcoin,
    dollar,
    euro,
  };
  const [chooseCoin, setChooseCoin] = useState(imagesUrl.bitcoin);

  useEffect(() => {
    if (gameState === "game") {
      const timer = setTimeout(() => setTime(sec - 1), 1000);
      if (sec === 0) {
        setGameState("end");
      }
      return () => clearTimeout(timer);
    }
  }, [sec]);

  return (
    <div>
      <FullScreen handle={handle}>
        <Header
          chooseCoin={chooseCoin}
          setChooseCoin={setChooseCoin}
          countPigs={countPigs}
          setCountPigs={setCountPigs}
          score={score}
          imagesUrl={imagesUrl}
          sec={sec}
          setTime={setTime}
          handle={handle}
        />
        <Playground
          sec={sec}
          countPigs={countPigs}
          score={score}
          setScore={setScore}
          chooseCoin={chooseCoin}
        />
        <Footer />
      </FullScreen>
    </div>
  );
}

export default Main;
