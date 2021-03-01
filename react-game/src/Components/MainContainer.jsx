import styles from "../App.module.css";
import Main from "./Main";
import HomePage from './Header/HomePage'
import { useEffect, useState } from 'react';

const MainContainer = () => {
const [gameState, setGameState] = useState("start");
const [score, setScore] = useState(0);
const [sec, setTime] = useState(30);
function gameStart() {
  setTime(3000);
  setScore(0);
  setGameState("game");
}

function getMainContent() {
  switch (gameState) {
    case "start":
      return (
        <HomePage
          title={"Welcome"}
          content={"Lets play this awesome game."}
          button={"Start Now"}
          buttonClick={gameStart}
        />
      );
      case "game":
        return <Main setGameState={setGameState} gameState={gameState} sec={sec} setTime={setTime} score={score} setScore={setScore}/>
        case "end":
          return (
            <HomePage
              title={"Game Over !"}
              content={`Your Score : ${score}`}
              button={"Play Again"}
              buttonClick={gameStart}
            />
          );
        default:
      return;
  }
}
return (
  <div className={styles.game}>  
     {getMainContent()} 
{/* <Main setGameState={setGameState}/> */}
  </div>
);
}

export default MainContainer