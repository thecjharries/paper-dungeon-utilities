import DiceTable from "./DiceTable";
import { AbstractDie } from "./Die";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: AbstractDie.rollDice(),
    };
  }

  render() {
    return (
      <div className="App">
        <DiceTable dice={this.state.dice} />
        <button
          onClick={() =>
            this.setState({
              dice: AbstractDie.rollDice(),
            })
          }
        >
          Roll Dice
        </button>
      </div>
    );
  }
}

export default App;
