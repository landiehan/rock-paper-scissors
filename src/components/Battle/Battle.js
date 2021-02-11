import { useEffect, useState } from "react";
import Choice from "../Choice/Choice";
import DetermineWinner from "../DetermineWinner/DetermineWinner";
import styles from "./Battle.module.css";

const choices = ["rock", "paper", "scissors"];
const generateRandomIndex = () => Math.floor(Math.random() * choices.length);
const getRandomChoice = () => choices[generateRandomIndex()];

function Battle({ userChoice, setScore, setUserChoice }) {
  const [houseChoice, setHouseChoice] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const randomChoice = getRandomChoice();
      setHouseChoice(randomChoice);
    }, 300);
  }, []);

  return (
    <div className={styles.battle}>
      <div className={styles.choices}>
        <div className={styles.choice}>
          <p>You picked</p>
          <Choice choice={userChoice} />
        </div>

        <div className={styles.choice}>
          {houseChoice ? (
            <>
              <p>House picked</p>
              <Choice choice={houseChoice} />
            </>
          ) : (
            <>
              <p>House picked</p>
              <div className={styles.houseChoiceContainer}></div>
            </>
          )}
        </div>
      </div>

      {houseChoice && (
        <DetermineWinner
          userChoice={userChoice}
          houseChoice={houseChoice}
          setScore={setScore}
          setUserChoice={setUserChoice}
        />
      )}
    </div>
  );
}

export default Battle;
