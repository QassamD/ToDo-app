import React from "react";
import "./todoItems.css";

const TodoItems = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;

  const ListItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id} id={item.id}>
          <span className="Task"> {item.Task} </span>
          <span className="Date"> {item.Date} </span>
          <span className="Action icon" onClick={() => deleteItem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>There is NO Item to show</p>
  );

  return (
    <div className="list-items">
      <div>
        <span className="Task Title">Task</span>
        <span className="Date Title">Date</span>
        <span className="Action Title">Delete</span>
      </div>
      {ListItems}
    </div>
  );
};

export default TodoItems;
