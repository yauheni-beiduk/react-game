import Coin from '../Coin/Coin'
import s from './PiggyBank.module.css'
import { useEffect, useState } from 'react';



const PiggyBank = ({id, isCoinUp}) => {
console.log(id)

const [up,setUp] =  useState({isCoinUp: isCoinUp})
console.log(up)
const [score,setScore] = useState(0)

//   const upCoin =  ( ) => {
//     let fail = 0;
//      setTimeout(() => {
//        if (isCoinUp == true) {
//         fail++;
//         console.log(fail)
//       //  setUp({isCoinUp : !isCoinUp})
//      }
//      else if(fail === 5){
//        console.log('game over')
//      }
//    else if(!isCoinUp) {
//      upCoin(isCoinUp)
//      setScore(score=>score+1);

//     };

// },2000) }
// upCoin(isCoinUp)



const catchUp = (id) => {
  console.log(id)
  if( id===id) {
    return setUp({isCoinUp: !isCoinUp});}
    else { 
   setUp({isCoinUp: isCoinUp})
   console.log(up) ;
   setScore(score=>score+1);
    }
}


  return(
    <div className={s.pig_wrapper, s.pig} key={id}>
      <Coin catchUp={catchUp} id={id}  isCoinUp={up.isCoinUp}/>
      </div>
    )
}

export default PiggyBank