import Coin from '../Coin/Coin'
import s from './PiggyBank.module.css'
import { useEffect, useState } from 'react';



const PiggyBank = ({id, isCoinUp,setScore,score}) => {



console.log('piggy1',isCoinUp)


  return(
    <div className={s.pig_wrapper, s.pig} key={id}>
      <Coin  id={id} setScore={setScore} score={score} isCoinUp={isCoinUp}/>
      </div>
    )
}

export default PiggyBank