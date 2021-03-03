import styles from "../Header.module.css";
import { useState } from "react";

const ButtonChangeCoin = ({ setChooseCoin, imagesUrl }) => {
  const [checkedCoin, setCheckedCoin] = useState("bitcoin");

  const handlerOnClickImageBitcoin = () => {
    setChooseCoin(imagesUrl.bitcoin);
    setCheckedCoin("bitcoin");
  };
  const handlerOnClickImageDollar = () => {
    setChooseCoin(imagesUrl.dollar);
    setCheckedCoin("dollar");
  };
  const handlerOnClickImageEuro = () => {
    setChooseCoin(imagesUrl.euro);
    setCheckedCoin("euro");
  };

  return (
    <div className={styles.buttonsCoins}>
      <label>
        <input
          type="radio"
          value="bitcoin"
          checked={checkedCoin == "bitcoin"}
          onChange={handlerOnClickImageBitcoin}
        />
        Bitcoin
      </label>
      <label>
        <input
          type="radio"
          value="dollar"
          checked={checkedCoin == "dollar"}
          onChange={handlerOnClickImageDollar}
        />
        Dollar
      </label>
      <label>
        <input
          type="radio"
          value="euro"
          checked={checkedCoin == "euro"}
          onChange={handlerOnClickImageEuro}
        />
        Euro
      </label>
    </div>
  );
};

export default ButtonChangeCoin;
