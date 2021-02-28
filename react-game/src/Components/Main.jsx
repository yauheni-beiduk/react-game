import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Playground from "./Playground/Playground";
import bitcoin from "./Playground/Coin/iconsCoin/bitcoin.png";
import dollar from "./Playground/Coin/iconsCoin/dollars.png";
import euro from "./Playground/Coin/iconsCoin/euro.png";


function Main() {
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
  const [score, setScore] = useState(0);
  // const [fail, setFail] = useState(0);

  return (
    <div>
      <Header
        chooseCoin={chooseCoin}
        setChooseCoin={setChooseCoin}
        countPigs={countPigs}
        setCountPigs={setCountPigs}
        score={score}
        imagesUrl={imagesUrl}
      />
      <Playground countPigs={countPigs} score={score} setScore={setScore} chooseCoin={chooseCoin}/>
      <Footer />
    </div>
  );
}

export default Main;
