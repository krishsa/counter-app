import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    console.log("counters - rendered.");
    //Object Destructuring...
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}
