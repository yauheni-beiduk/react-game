import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Playground from "./Playground/Playground";

function Main() {
  const [countPigs, setCountPigs] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  const [chooseCoin, setChooseCoin] = useState();
  const [score, setScore] = useState(0);
  // const [fail, setFail] = useState(0);

  return (
    <div>
      <Header  countPigs={countPigs} setCountPigs={setCountPigs} score={score} />
      <Playground
        countPigs={countPigs}
        score={score}
        setScore={setScore}
      />
      <Footer />
    </div>
  );
}

export default Main;
