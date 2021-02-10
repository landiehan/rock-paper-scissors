import styles from "./UserChoice.module.css";
import iconRock from "./icon-rock.svg";
import iconPaper from "./icon-paper.svg";
import iconScissors from "./icon-scissors.svg";

function UserChoice({ setUserChoice }) {
  const handleClick = ({ target }) => setUserChoice(target.value);

  return (
    <form className={styles.form}>
      <label className={`${styles.label} ${styles.paper}`}>
        <input
          className="sr-only"
          type="radio"
          name="userChoice"
          value="paper"
          onClick={handleClick}
        />
        <img className={styles.icon} src={iconPaper} alt="paper" />
      </label>

      <label className={`${styles.label} ${styles.scissors}`}>
        <input
          className="sr-only"
          type="radio"
          name="userChoice"
          value="scissors"
          onClick={handleClick}
        />
        <img className={styles.icon} src={iconScissors} alt="scissors" />
      </label>

      <label className={`${styles.label} ${styles.rock}`}>
        <input
          className="sr-only"
          type="radio"
          name="userChoice"
          value="rock"
          onClick={handleClick}
        />
        <img className={styles.icon} src={iconRock} alt="rock" />
      </label>
    </form>
  );
}

export default UserChoice;
