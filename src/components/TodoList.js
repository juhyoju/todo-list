import React from "react";
import "style/TodoList.css";

const TodoList = ({todos, setTodos}) => {


    const onDeleteTodo = (oneTodo, index) => {
        const deleteMsg = window.confirm("이 항목을 삭제하시겠습니까?");

        if(deleteMsg) {
            setTodos(todos.filter(oneTodo => oneTodo.index !== index));
        };
    }
    

    
    const TodoResult = todos.map((oneTodo, index) => 
        <li key={index}>
            {oneTodo.todo}
            <button onClick={onDeleteTodo} className="add_btn">삭제</button>
        </li>
    );

    // 기능하는 애 소문자시작 on~~
    // 그림그리는 애 대문자시작

    return (
        <>
        <div className="todoList">
            <ul>
                {TodoResult} 
            </ul>
        </div>
        </>
    )
};

export default TodoList;
