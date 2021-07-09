import React, { useState } from "react";
import "style/TodoInput.css";

const TodoInput = ({todos, setTodos}) => {

    const [newTodo, setNewTodo] = useState("");
    
    const onChange = (event) => {  
        setNewTodo(event.target.value);
    };

    const onSaveTodo = (newTodo) => {
        window.localStorage.setItem("todoArray", JSON.stringify(newTodo));
    };   

    const onAddTodo = () => {
        if(newTodo === ""){
            alert("⚠ 내용이 입력되지 않았습니다.");
            return
        }

        const todoAll = [...todos, {todo: newTodo}];
        setTodos(todoAll);
        setNewTodo("");
        onSaveTodo(todoAll);
    };

    const onDeleteTodo = () => {
        const deleteMsg = window.confirm("Are you sure you want to delete all?");

        if(deleteMsg) {
            window.localStorage.clear("todoArray");
            setTodos([]);
        };
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
            
            <button onClick={onDeleteTodo} className="add_btn">전체 삭제</button>

        </>
    );
};

export default TodoInput;   