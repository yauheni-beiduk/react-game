import styles from "./Header.module.css";
import { Sound } from "./Settings/Music";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import ButtonChangeCoin from "./Settings/ButtonChangeCoin";
import ButtonChangeQuantity from "./Settings/ButtonChangeQuantity";


const Header = ({score,countPigs,setCountPigs,setChooseCoin,imagesUrl}) => {
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
        <div>Choose coin:</div>
          <ButtonChangeCoin imagesUrl={imagesUrl} setChooseCoin={setChooseCoin}/>
        <div>Select quantity of pigs:</div>
          <ButtonChangeQuantity countPigs={countPigs} setCountPigs={setCountPigs}/>
        <div>Game time:</div>
      </PureModal>
      <button className={styles.button}  onClick={() => setModal(true)}>
        Settings
      </button>
      <div>Score: {score}</div>
      <div>Catch The Coin</div>
    </div>
  );
};

export default Header;
