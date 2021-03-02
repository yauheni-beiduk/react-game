
import s from "./Coin.module.css";
import { useEffect, useState } from 'react';


const Coin = ({ id, isCoinUp, setScore,chooseCoin}) => {
  const [up, setUp] = useState(isCoinUp);
  const hitSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');

useEffect(()=>setUp(isCoinUp),[isCoinUp]);
  const handlerOnClick = () => {
    if (isCoinUp) {
      setUp(!isCoinUp);
      setScore(prev => prev+1);  
      hitSound.play();
    }
  };

  


  return (
    <div onClick={handlerOnClick}>
      <img
        id={id}
        src={chooseCoin}
        className={up ? s.coinUp : s.coin}
      ></img>
    </div>
  );
};

export default Coin;
