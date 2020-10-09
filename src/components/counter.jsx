import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"], //list
    //imageUrl: "https://picsum.photos/200",
  };
  //Instead of Constructor-> we can use this using Arrow functions
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    //obj.method -> this refers to the object
    //function -> this refers to window object
  }*/

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  handleIncrement = (product) => {
    console.log(product);
    // this.state.count++; -> React will not set the value, we need to use setState method
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={(product) => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
