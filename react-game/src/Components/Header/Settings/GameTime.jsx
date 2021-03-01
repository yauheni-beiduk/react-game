import { useState } from 'react'
import styles from '../Header.module.css'

const GameTime = ({setTime}) => {
    const [time,setTimer] = useState(30);
    const handlerOnClickTimeOne = () => {
        setTimer(30);
        setTime(30);
      };
      const handlerOnClickTimeTwo = () => {
        setTimer(60);
        setTime(60);
      };
    return (
        <div className={styles.buttonsCoins}>
        <label>
          <input
            type="radio"
            value="30"
            checked={time == 30}
            onChange={handlerOnClickTimeOne}
          />
          30 seconds
        </label>
        <label>
          <input
            type="radio"
            value="60"
            checked={time == 60}
            onChange={handlerOnClickTimeTwo}
          />
          60 seconds
        </label>
      </div>
    )
} 

export default GameTime;