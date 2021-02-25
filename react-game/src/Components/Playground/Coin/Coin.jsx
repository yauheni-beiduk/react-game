import s from './Coin.module.css'



const Coin = ({id,isCoinUp,catchUp}) => {

    return(
    <div >
      <div onClick={()=> catchUp(id)} id={id} className={isCoinUp? s.coinUp: s.coin} ></div>
    </div>
    )
}

export default Coin