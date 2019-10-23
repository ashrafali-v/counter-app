import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value
  };
  handleIncrement = productId => {
    console.log(productId);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
