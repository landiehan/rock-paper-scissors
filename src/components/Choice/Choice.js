import styles from "./Choice.module.css";
import iconRock from "./icon-rock.svg";
import iconPaper from "./icon-paper.svg";
import iconScissors from "./icon-scissors.svg";

function Choice({ choice }) {
  let img;
  switch (choice) {
    case "rock":
      img = <img className={styles.icon} src={iconRock} alt={choice} />;
      break;
    case "paper":
      img = <img className={styles.icon} src={iconPaper} alt={choice} />;
      break;
    case "scissors":
      img = <img className={styles.icon} src={iconScissors} alt={choice} />;
      break;
    default:
      break;
  }

  return (
    <label className={styles.label + ` ${styles[choice]}`}>
      <input
        className="sr-only"
        type="radio"
        name="userChoice"
        value={choice}
        // onClick={handleClick}
        disabled
      />
      {img}
    </label>
  );
}

export default Choice;
