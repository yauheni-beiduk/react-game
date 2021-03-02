import { useState } from 'react'
import styles from '../Header.module.css'

const GameTime = ({setTime}) => {
    const [time,setTimer] = useState(30);
   
    const handlerOnClick = (e) => {
      setTime((+e.target.value));
      setTimer(+e.target.value)  
    }

    return (
        <div className={styles.buttonsCoins}>
        <label>
          <input
            type="radio"
            value="30"
            checked={time == 30}
            onChange={handlerOnClick}
          />
          30 seconds
        </label>
        <label>
          <input
            type="radio"
            value="60"
            checked={time == 60}
            onChange={handlerOnClick}
          />
          60 seconds
        </label>
      </div>
    )
} 

export default GameTime;