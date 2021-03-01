import { useEffect, useState } from "react";

import styles from "./Header.module.css";


const Timer = ({sec}) => {
    // const [seconds, setSeconds ] =  useState(timer);
      
    // useEffect(()=>{
    // let myInterval = setInterval(() => {
    //         if (seconds > 0) {
    //             setSeconds(seconds - 1);
    //             setTimer(seconds - 1);
    //         }
    //         if (seconds == 0) {
    //             clearInterval(myInterval)   
    //         } 
    //     }, 1000)
    //     return ()=> {
    //         clearInterval(myInterval);
    //       };
    // });
    return (
        <div>
        {  sec === 0
            ? <div  className={styles.size}>Time: 0</div>
            : <div  className={styles.size}>Time: {sec < 10 ?  `0${sec}` : sec}</div> 
        }
        </div>
    )
}

export default Timer;