import { useEffect } from "react";
import styles from "./DetermineWinner.module.css";

const getScoreChange = (userChoice, houseChoice) => {
  if (userChoice === houseChoice) {
    return 0;
  }

  if (userChoice === "rock") {
    return houseChoice === "scissors" ? 1 : -1;
  }

  if (userChoice === "paper") {
    return houseChoice === "rock" ? 1 : -1;
  }

  if (userChoice === "scissors") {
    return houseChoice === "paper" ? 1 : -1;
  }
};

function DetermineWinner({ userChoice, houseChoice, setScore, setUserChoice }) {
  const scoreChange = getScoreChange(userChoice, houseChoice);

  useEffect(() => {
    updateScore(scoreChange);
  }, []);

  const updateScore = (scoreChange) => {
    switch (scoreChange) {
      case 0:
        break;
      case 1:
        setScore((prev) => prev + 1);
        break;
      case -1:
        setScore((prev) => prev - 1);
        break;
      default:
        break;
    }
  };

  const getResult = () => {
    switch (scoreChange) {
      case 0:
        return "Tie";
      case 1:
        return "You Win";
      case -1:
        return "You Loss";
      default:
        break;
    }
  };

  let result = getResult();

  const handleClick = () => setUserChoice(null);

  return (
    <div className={styles.result}>
      <p>{result}</p>
      <button className={styles.playAgain} onClick={handleClick}>
        Play Again
      </button>
    </div>
  );
}

export default DetermineWinner;
