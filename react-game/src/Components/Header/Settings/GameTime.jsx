import { useState } from 'react'
import styles from '../Header.module.css'

const GameTime = ({setTimer}) => {
    const [time,setTime] = useState(60);
    const handlerOnClickTimeOne = () => {
        setTime(30);
        setTimer(30);
      };
      const handlerOnClickTimeTwo = () => {
        setTime(60);
        setTimer(60);
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