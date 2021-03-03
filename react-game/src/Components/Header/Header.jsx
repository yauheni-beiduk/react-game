import styles from "./Header.module.css";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import ButtonChangeCoin from "./Settings/ButtonChangeCoin";
import ButtonChangeQuantity from "./Settings/ButtonChangeQuantity";
import Timer from "./Timer";
import GetGameTime from "./Settings/GameTime";
import full from "./icons/full.svg";
import settings from "./icons/settings.svg";
import useEvent from "../Utility/UtilityFunction";

const Header = ({
  handle,
  score,
  countPigs,
  setCountPigs,
  setChooseCoin,
  imagesUrl,
  sec,
  setTime,
}) => {
  const [modal, setModal] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key == "`") {
      setModal(true);
    }
    if (event.key == "Escape") {
      setModal(true);
    }
  };
  useEvent("keydown", handleKeyPress);

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
        <div className={styles.title}>Choose coin:</div>
        <ButtonChangeCoin imagesUrl={imagesUrl} setChooseCoin={setChooseCoin} />
        <div className={styles.title}>Select quantity of pigs:</div>
        <ButtonChangeQuantity
          countPigs={countPigs}
          setCountPigs={setCountPigs}
        />
        <div className={styles.title}>Game time:</div>
        <GetGameTime setTime={setTime} />
      </PureModal>
      <div className={styles.fullscreen}>
        <div onClick={handle.enter}>
          <img className={styles.settings} src={full} alt="fullscreen" />
        </div>
        <div onClick={() => setModal(true)}>
          <img className={styles.settings} src={settings} alt="settings" />
        </div>
      </div>
      <Timer sec={sec} />
      <div className={styles.size}>Score: {score}</div>
      <div className={styles.size}>Catch The Coin</div>
    </div>
  );
};

export default Header;
