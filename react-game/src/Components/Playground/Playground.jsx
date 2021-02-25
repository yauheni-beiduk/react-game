import PiggyBank from "./PiggyBank/PiggyBank";
import "./Playground.css";

import { useEffect, useState } from "react";



const Playground = () => {

    let countPigs = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ];
      
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

const idPiggy = randomPiggyBank(countPigs);






const renderPigs = (countPigs) => (countPigs.map((pig) => <PiggyBank key={pig.id} id={pig.id} isCoinUp={pig.id === idPiggy}/>));
  

  return <div className='playground'>{renderPigs(countPigs)}</div>;
};

export default Playground;
