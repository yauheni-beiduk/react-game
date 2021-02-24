import Coin from '../Coin/Coin'
import s from './PiggyBank.module.css'

const PiggyBank = (props) => {
    return(
    <div className={s.pig_wrapper, s.pig} key={props.id}>
        <Coin/>
      </div>
    )
}

export default PiggyBank