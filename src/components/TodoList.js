import React from "react";
import "style/TodoList.css";


const TodoList = ({todos}) => {

    const Todo = ({ todo: {id, todo, isDone}}) => {
        return (
            <li>
                <input type="checkbox" checked={isDone} />
                <span>{todo}</span>
            </li>
        )
    }

    return (
        <>
        <div className="todoList">
            <ul>
            {todos.map(todo => (
                <Todo todo={todo} key={todos.id} />
            ))}
            </ul>            
        </div>
        </>
    )
};

export default TodoList;
