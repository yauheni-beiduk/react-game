import PiggyBank from "./PiggyBank/PiggyBank"
import styles from './Playground.module.css'
let countPigs=[
    {id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6},
]

const renderPigs = (countPigs) => {
    return countPigs.map(pig => {
        return (
            <PiggyBank key={pig.id}/>
        ) 
    })
}

const Playground = () => {

 return (<div className={styles.playground}> 
    {renderPigs(countPigs)}
    </div>
    )
}

export default Playground