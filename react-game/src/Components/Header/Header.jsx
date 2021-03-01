import styles from "./Header.module.css";
import { Sound } from "./Settings/Music";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import ButtonChangeCoin from "./Settings/ButtonChangeCoin";
import ButtonChangeQuantity from "./Settings/ButtonChangeQuantity";
import Timer from "./Timer";
import GameTime from "./Settings/GameTime";


const Header = ({score,countPigs,setCountPigs,setChooseCoin,imagesUrl,timer,setTimer}) => {
  const [modal, setModal] = useState(false);
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
        <div className={styles.title}>Choose coin:</div>
          <ButtonChangeCoin imagesUrl={imagesUrl} setChooseCoin={setChooseCoin}/>
        <div className={styles.title}>Select quantity of pigs:</div>
          <ButtonChangeQuantity countPigs={countPigs} setCountPigs={setCountPigs}/>
        <div className={styles.title}>Game time:</div>
        <GameTime  setTimer={setTimer}/>
      </PureModal>
      <button className={styles.button}  onClick={() => setModal(true)}>
        Settings
      </button>
      <Timer timer={timer}/>
      <div className={styles.size}>Score: {score}</div>
      <div  className={styles.size}>Catch The Coin</div>
    </div>
  );
};

export default Header;
