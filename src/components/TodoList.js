import React from "react";
import "style/TodoList.css";

const TodoList = ({todos}) => {

    const todoResult = todos.map((oneTodo, index) => 
        <li key={index}>
            {oneTodo.todo}
        </li>
    );

    return (
        <>
       <div className="todoList">
           <ul>{todoResult}</ul>
       </div>
        </>
    )
};

export default TodoList;