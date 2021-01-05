import React, { Component } from "react";

class Counter extends Component {
  /* state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"], //list
    //imageUrl: "https://picsum.photos/200",
  }; */
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

  /* handleIncrement = (product) => {
    console.log(product);
    // this.state.count++; -> React will not set the value, we need to use setState method
    this.setState({
      value: this.state.value + 1,
    });
  }; */
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get the new data from server.
    }
  }
  componentWillUnmount() {
    console.log("counter - Unmount.");
    //useful for cleanup before the app completion.
  }
  render() {
    console.log("counter - rendered.");
    return (
      <React.Fragment>
        <h5>Counter #{this.props.counter.id}</h5>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
