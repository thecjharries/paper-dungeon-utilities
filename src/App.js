import logo from "./logo.svg";
import "./App.css";
import DiceTable from "./DiceTable";
import { AbstractDie } from "./Die";

function App() {
  const dice = AbstractDie.rollDice();
  return (
    <div className="App">
      <DiceTable dice={dice} />
    </div>
  );
}

export default App;
