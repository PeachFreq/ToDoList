import React from "react";

function ToDoItem(props) {
    return <li style={{ textDecoration: props.done ? "line-through" : "none" }} onClick={props.onClick}>{props.text}</li>
}

export default ToDoItem;