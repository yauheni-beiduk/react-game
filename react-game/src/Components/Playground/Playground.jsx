import PiggyBank from "./PiggyBank/PiggyBank";
import "./Playground.css";
import { useEffect, useState } from "react";

const Playground = ({ countPigs, score, setScore, chooseCoin, timer }) => {

  const [idPiggy, setIdPiggy] = useState(null);

  useEffect(() => {
    const randomPiggyBank = (countPigs) => {
      const number = Math.floor(Math.random() * countPigs.length);
      const bank = countPigs[number];
      if (bank.id == idPiggy) {
        return randomPiggyBank(countPigs)
      }
      return bank.id;
    };
    if ({ timer } != 0) {
      const timer =  setTimeout(() => {
        setIdPiggy(randomPiggyBank(countPigs));
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [idPiggy]);


  const renderPigs = (countPigs) =>
    countPigs.map((pig) => (
      <PiggyBank
        score={score}
        key={pig.id}
        id={pig.id}
        setScore={setScore}
        idPiggy={idPiggy}
        isCoinUp={pig.id === idPiggy}
        chooseCoin={chooseCoin}
      />
    ));

  return <div className="playground">{renderPigs(countPigs)}</div>;
};

export default Playground;


