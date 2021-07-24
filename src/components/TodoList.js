import React from "react";
import "style/TodoList.css";


const TodoList = ({todos, onDelete, onUpdateStatus}) => {

    const Todo = ({ todo: {id, todo, isDone}}) => {
        return (
            <li>
                <input 
                    type="checkbox" 
                    checked={isDone} 
                    onChange={() => onUpdateStatus(id)} 
                />
                <span>
                    {todo} 
                    {isDone ? "(완료)" : "(진행중)"}
                </span>
                
                <button onClick={() => onDelete(id)} className="add_btn">삭제</button>
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
