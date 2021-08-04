import React from "react";
import "style/TodoList.css";
import TodoItem from "./TodoItem";


const TodoList = ({moveCard, todos, onDelete, onUpdateStatus}) => {    
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
                    moveCard={moveCard}
                />
            ))}
            </ul>            
        </div>
        </>
    )
};

export default TodoList;
