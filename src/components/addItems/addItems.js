import React, { Component } from "react";
import "./addItems.css";

class AddItems extends Component {
  state = {
    Task: "",
    Date: "",
  };

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    if (e.target.Task.value !== "" && e.target.Date.value !== "") {
      this.props.addItems(this.state);
      this.setState({
        Task: "",
        Date: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input
            className="TasK"
            type="text"
            placeholder="Enter Task ..."
            id="Task"
            onChange={this.handelChange}
            value={this.state.Task}
          />
          <input
            className="Date"
            type="date"
            id="Date"
            onChange={this.handelChange}
            value={this.state.Date}
          />
          <input className="Action" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItems;
