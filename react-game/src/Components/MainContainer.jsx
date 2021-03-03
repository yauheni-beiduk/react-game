import styles from "../App.module.css";
import Main from "./Main";
import HomePage from "./HomePage/HomePage";
import { useState } from "react";
import AudioControl from "./Audio/AudioControl";
// let fs = require('fs')

// fs.appendFile("results.json", json , function (err) {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

const MainContainer = () => {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [sec, setTime] = useState(30);
  function gameStart() {
    setTime(10);
    setScore(0);
    setGameState("game");
  }



  function localStore() {
    let bestScores = JSON.parse(localStorage.getItem("Best Scores")) || [];
    const highScore = {
      score,
    };
    bestScores.push(highScore);
    bestScores.sort((a, b) => b.score - a.score);
    bestScores.splice(10);
    localStorage.setItem("Best Scores", JSON.stringify(bestScores));
  }

  function getMainContent() {
    switch (gameState) {
      case "start":
        return (
          <HomePage
            title={"Welcome"}
            content={"Lets play this awesome game. You need to catch the coin"}
            description={
              <>
                If you are using a keyboard, then for:
                <pre />
                -open settings click ' ` '
                <pre />
                -close settings click 'Escape'
                <pre />
                -to select a coin number one click '1'
                <pre />
                -to select a coin number two click '2'
                <pre />
                -to select a coin number three click '3'
                <pre />
                -to select a coin number four click '4'
                <pre />
                -to select a coin bimber five click '5'
                <pre />
                -to select a coin number six click '6'
                <pre />
                -to play/pause music click 'Space'
              </>
            }
            button={"Start Now"}
            buttonClick={gameStart}
          />
        );
      case "game":
        return (
          <Main
            setGameState={setGameState}
            gameState={gameState}
            sec={sec}
            setTime={setTime}
            score={score}
            setScore={setScore}
          />
        );
      case "end":
        localStore()
        return (
          <HomePage
            title={"Game Over !"}
            content={`Your Score : ${score}`}
            button={"New Game"}
            buttonClick={gameStart}
          />
        );
      default:
        return;
    }
  }
  return (
    <div className={styles.game}>
      <AudioControl />
      {getMainContent()}
    </div>
  );
};

export default MainContainer;
