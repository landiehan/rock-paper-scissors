import styles from "./Scoreboard.module.css";
import logo from "./logo.svg";

function Scoreboard({ score }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <img src={logo} alt="rock paper scissors" />
      </h1>
      <h2 className={styles.score} data-score={score} aria-live="polite">
        <span className={styles.scoreText}>Score</span>
      </h2>
    </header>
  );
}

export default Scoreboard;
