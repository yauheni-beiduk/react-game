import PiggyBank from "./PiggyBank/PiggyBank";
import "./Playground.css";
import { useEffect, useState } from "react";

const Playground = ({countPigs, score, setScore, chooseCoin ,timer}) => {


  const randomPiggyBank = (countPigs) => {
    let lastBank;
    const number = Math.floor(Math.random() * countPigs.length);
    const bank = countPigs[number];
    if (bank.id === lastBank) {
      return randomPiggyBank(countPigs);
    }
    lastBank = bank.id;
    return bank.id;
  };

  const [idPiggy, setIdPiggy] = useState(randomPiggyBank(countPigs));


  useEffect(() => {
    if({timer} !=0 ) {
      setTimeout(() => {
       setIdPiggy(randomPiggyBank(countPigs));
      }, 1000);}
  }, [idPiggy]);

  const renderPigs = (countPigs) =>
    countPigs.map((pig) => (
      <PiggyBank
        score={score}
        key={pig.id}
        id={pig.id}
        setScore={setScore}
        isCoinUp={pig.id === idPiggy}
        chooseCoin={chooseCoin} 
      />
    ));

  return <div className="playground">{renderPigs(countPigs)}</div>;
};

export default Playground;
