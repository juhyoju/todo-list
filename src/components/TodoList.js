import React from "react";
import "style/TodoList.css";
import TodoItem from "./TodoItem";


const TodoList = ({todos, onDelete, onUpdateStatus}) => {    
    return (
        <>
        <div className="todoList">
            <ul>
            {todos.map(todo => (
                <TodoItem 
                    todo={todo} 
                    key={todos.id} 
                    onDelete={onDelete} 
                    onUpdateStatus={onUpdateStatus} 
                />
            ))}
            </ul>            
        </div>
        </>
    )
};

export default TodoList;
