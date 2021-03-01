import Coin from '../Coin/Coin'
import s from './PiggyBank.module.css'
import { useEffect, useState } from 'react';



const PiggyBank = ({id, isCoinUp,setScore,chooseCoin}) => {



// console.log('piggy', id , isCoinUp)


  return(
    <div className={s.pig_wrapper, s.pig} key={id}>
      <Coin chooseCoin={chooseCoin}  id={id} setScore={setScore}  isCoinUp={isCoinUp}/>
      </div>
    )
}

export default PiggyBank