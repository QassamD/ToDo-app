import React, { Component } from "react";
import AddItems from "./components/addItems/addItems";
import TodoItems from "./components/todoItems/todoItems";
import "./App.css";

class App extends Component {
  state = {
    items: [],
  };

  deleteItem = (id) => {
    // let items = this.state.items,
    //   i = items.findIndex((item) => item.id === id);
    // items.splice(i, 1);

    let items = this.state.items.filter((item) => item.id !== id);

    this.setState({ items });
  };

  addItems = (item) => {
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
    item.id = items.length;
  };
  render() {
    return (
      <div className="App">
        <h1 className="h1"> To Do List</h1>
        <TodoItems
          items={this.state.items}
          deleteItem={this.deleteItem}
        ></TodoItems>
        <AddItems addItems={this.addItems} />
      </div>
    );
  }
}

export default App;
