import s from './PiggyBank.module.css'

const PiggyBank = (props) => {
    return(
    <div className={s.pig_wrapper}>
      <div key={props.id} className={s.pig}></div>
    </div>
    )
}

export default PiggyBank