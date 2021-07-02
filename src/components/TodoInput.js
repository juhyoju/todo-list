import React, { useState, useEffect } from "react";
import "style/TodoInput.css";

const TodoInput = () => {
    const [todos, setTodos ] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    
    const onChange = (event) => {  
        setNewTodo(event.target.value);
    };

    const onSaveTodo = (newTodo) => {
        window.localStorage.setItem("todoArray", JSON.stringify(newTodo));
    };   

    const onGetTodo = window.localStorage.getItem("todoArray");
    useEffect(() => {
        if (onGetTodo) {
            setTodos(JSON.parse(onGetTodo));
        }
    }, []);

    const onAddTodo = () => {
        const todoAll = [...todos, {todo: newTodo}];
        setTodos(todoAll);
        setNewTodo("");
        onSaveTodo(todoAll);
    };

    return (
        <>
            <div className="form">
                <input
                    type="text"
                    value={newTodo}
                    onChange={onChange}
                    placeholder="things to do"
                />
                <button onClick={onAddTodo} className="add_btn">저장하기</button>
            </div>
            <div style={{margin:50}}>{onGetTodo}</div>
            
            <button onClick={onDeleteTodo} className="add_btn">전체 삭제</button>

        </>
    );
};

export default TodoInput;   