import { useState } from "react";
import Playground from "../Playground/Playground";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Scoreboard score={score} />
      <Playground setScore={setScore} />
    </div>
  );
}

export default App;
