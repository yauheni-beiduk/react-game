import s from './Coin.module.css'



const Coin = ({isCoinUp,catchUp}) => {
console.log({isCoinUp})
    return(
    <div >
      <div onClick={catchUp} className={isCoinUp? s.coinUp: s.coin} ></div>
    </div>
    )
}

export default Coin