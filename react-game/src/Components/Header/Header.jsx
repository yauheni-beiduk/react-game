import styles from "./Header.module.css";
import { Sound } from "./Settings/Music";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";

const Header = ({ score, countPigs, setCountPigs }) => {
  const [modal, setModal] = useState(false);

  const handlerOnClickThreePigsSetings = () => {
    if (countPigs.length ==6) {
      setCountPigs((countPigs) => countPigs.splice(3));
    }
  };

  const handlerOnClickSixPigsSetings = () => {
    console.log(countPigs)
    if (countPigs.length == 3) {
      setCountPigs(countPigs.unshift( { id: 1 },
        { id: 2 },
        { id: 3 }))
    }
    console.log(countPigs)

  }

  const handlerOnCliclCoinSetings = () => {};
  return (
    <div className={styles.name}>
      <PureModal
        width="400px"
        header="Settings"
        isOpen={modal}
        closeButton="x"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <div>Music:</div>
        <div>
          <Sound />
        </div>
        <div>Choose coin:</div>
        <div className={styles.buttonsCoins}>
          <button
            onClick={handlerOnCliclCoinSetings}
            className={styles.buttonCoin}
          >
            Bitcoin
          </button>
          <button className={styles.buttonCoin}>Dollar</button>
          <button className={styles.buttonCoin}>Euro</button>
        </div>
        <div>Select quantity of pigs:</div>
        <div className={styles.buttonsCoins}>
          <button
            onClick={handlerOnClickThreePigsSetings}
            className={styles.buttonCoin}
          >
            3
          </button>
          <button onClick={handlerOnClickSixPigsSetings} className={styles.buttonCoin}>6</button>
        </div>
      </PureModal>
      <button className={styles.button} onClick={() => setModal(true)}>
        Settings
      </button>
      <div>Score: {score}</div>
      <div>Catch The Coin</div>
    </div>
  );
};

export default Header;
