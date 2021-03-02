import styles from '../Header.module.css'
import { useState } from "react";


const ButtonChangeQuantity = ({setCountPigs}) => {
     
  const [quantity,setQuantity] = useState(6);
  const getPigs = (length) => {
      let array = []
      for (let i = 1; i<=length; i++) {
          array.push({id: i})
      }
      return array;
  }
  const handlerOnClick = (e) => {
    setCountPigs(getPigs(+e.target.value));
    setQuantity(+e.target.value)  
  }
    // const handlerOnClickThreePigsSetings = () => {
    //     if (countPigs.length == 6) {
    //       setCountPigs((countPigs) => countPigs.splice(3));
    //       setQuantity(3);
    //     }
    //   };
    //   const handlerOnClickSixPigsSetings = () => {
    //     if (countPigs.length == 3) {
    //       setQuantity(6);
    //       setCountPigs((countPigs) => [
    //         { id: 1 },
    //         { id: 2 },
    //         { id: 3 },
    //         { id: 4 },
    //         { id: 5 },
    //         { id: 6 },
    //       ]);
    //     }
 //     };
   return ( 
  <div className={styles.buttonsCoins}>
    <label>
      <input
        type="radio"
        value="3"
        checked={quantity == 3}
        onChange={(e)=>handlerOnClick(e)}
      />
      3
    </label>
    <label>
      <input
        type="radio"
        value="6"
        checked={quantity == 6}
        onChange={(e)=>handlerOnClick(e)}
      />
      6
    </label>
  </div>
   )
};

export default ButtonChangeQuantity;