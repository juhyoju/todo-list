import React from "react";

const TodoItem = ({onDelete, onUpdateStatus, todo: {id, todo, isDone}}) => {
    return (
    //<span>각 일정 렌더링함 (완료 체크박스, 삭제 등)</span>;
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
    );
};

export default TodoItem;   