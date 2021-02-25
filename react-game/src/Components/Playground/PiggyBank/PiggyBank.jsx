import Coin from '../Coin/Coin'
import s from './PiggyBank.module.css'
import { useEffect, useState } from 'react';



const PiggyBank = ({id, isCoinUp}) => {
const [up,setUp] =  useState({isCoinUp: true})

console.log(setUp)
//   const upCoin =  ( ) => {
//     let fail = 0;
//      setTimeout(() => {
//        if (isCoinUp == true) {
//         fail++;
//         console.log(fail)
//      }
//   //  if(isCoinUp == false) upCoin(isCoinUp);

// },1000) }


//  upCoin(isCoinUp)

const catchUp = (e) => {
  if(!e.isTrusted) return; 
   setUp({isCoinUp: false}) 
 
}


  return(
    <div className={s.pig_wrapper, s.pig} key={id}>
      <Coin catchUp={catchUp} isCoinUp={up.isCoinUp}/>
      </div>
    )
}

export default PiggyBank