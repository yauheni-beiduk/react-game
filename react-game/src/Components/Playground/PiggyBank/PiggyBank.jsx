import Coin from "../Coin/Coin";
import s from "./PiggyBank.module.css";


const PiggyBank = ({ id, isCoinUp, setScore, chooseCoin, idPiggy, score }) => {
  return (
    <div className={(s.pig_wrapper, s.pig)} key={id}>
      <Coin
        chooseCoin={chooseCoin}
        idPiggy={idPiggy}
        score={score}
        id={id}
        setScore={setScore}
        isCoinUp={isCoinUp}
      />
    </div>
  );
};

export default PiggyBank;
