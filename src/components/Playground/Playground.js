import { useState } from "react";
import Battle from "../Battle/Battle";
import UserChoice from "../UserChoice/UserChoice";
import styles from "./Playground.module.css";

function Playground({ setScore }) {
  const [userChoice, setUserChoice] = useState(null);

  return (
    <div className={styles.playground}>
      {userChoice ? (
        <Battle
          userChoice={userChoice}
          setScore={setScore}
          setUserChoice={setUserChoice}
        />
      ) : (
        <UserChoice setUserChoice={setUserChoice} />
      )}
    </div>
  );
}

export default Playground;
