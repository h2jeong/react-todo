import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div>
      <li>{item.title}</li>
    </div>
  );
};

export default TodoItem;
