import React from "react";
import "style/TodoList.css";


const TodoList = ({todos, onDelete}) => {

    const Todo = ({ todo: {id, todo, isDone}}) => {
        return (
            <li>
                <input type="checkbox" checked={isDone} />
                <span>{todo}</span>
                <button onClick={() => onDelete(id)}>DELETE</button>
            </li>
        )
    }

    return (
        <>
        <div className="todoList">
            <ul>
            {todos.map(todo => (
                <Todo todo={todo} key={todos.id} onDelete={onDelete} />
            ))}
            </ul>            
        </div>
        </>
    )
};

export default TodoList;
