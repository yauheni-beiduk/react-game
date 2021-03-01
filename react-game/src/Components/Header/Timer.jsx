import { useEffect, useState } from "react";
import PureModal from "react-pure-modal";
import styles from "./Header.module.css";


const Timer = ({timer}) => {
    const [seconds, setSeconds ] =  useState(timer);
    const [modal, setModal] = useState(false);
   
    const gameover=()=>{
  <PureModal
    width="400px"
    header="Settings"
    isOpen={modal}
    closeButton="x"
    closeButtonPosition="bottom"
    onClose={() => {setModal(false); return true;}}
  >
      Game Over
  </PureModal>
   }

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds == 0) {
                clearInterval(myInterval)
                gameover()
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        {  seconds === 0
            ? <div  className={styles.size}>Time: 0</div>
            : <div  className={styles.size}>Time: {seconds < 10 ?  `0${seconds}` : seconds}</div> 
        }
        </div>
    )
}

export default Timer;