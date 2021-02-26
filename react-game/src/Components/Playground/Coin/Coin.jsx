
import s from "./Coin.module.css";
import { useEffect, useState } from 'react';


const Coin = ({ id, isCoinUp, score, setScore }) => {

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
    }
  };

  console.log("coin", up);

  return (
    <div>
      <div
        onClick={handlerOnClick}
        id={id}
        className={up ? s.coinUp : s.coin}
      ></div>
    </div>
  );
};

export default Coin;
