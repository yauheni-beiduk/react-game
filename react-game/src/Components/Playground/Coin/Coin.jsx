
import s from "./Coin.module.css";
import { useEffect, useState } from 'react';


const Coin = ({ id, isCoinUp, score, setScore,chooseCoin }) => {

  const [up, setUp] = useState(isCoinUp);

 useEffect(()=>setUp(isCoinUp),[]);

  useEffect(() => {
    if (isCoinUp) {
      setTimeout(() => {
        setUp(!isCoinUp);
      }, 2000);
    }
  }, []);

  const handlerOnClick = () => {
    if (isCoinUp) {
      setUp(!isCoinUp);
      setScore(score + 1);
      const hitSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
      hitSound.play();
    }
  };

  console.log("coin", up);
  console.log(chooseCoin);

  return (
    <div  onClick={handlerOnClick}>
      <img
        id={id}
        src={chooseCoin}
        className={up ? s.coinUp : s.coin}
      ></img>
    </div>
  );
};

export default Coin;
