import React, { useState } from "react";
import "style/TodoTemplate.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";



const TodoTemplate = () => {
    // <span>UI(타이틀, children 값으로 내부에 추가할 컴포넌트)</span>

    const onGetTodo = window.localStorage.getItem("todoArray");
    const [todos, setTodos] = useState(JSON.parse(onGetTodo)??[]);
    


    return ( 
        <main className="todo_template">
            <h1 className="title">
                TASKS <strong>LIST</strong>
            </h1>
            <div className="form_wrap">
                <TodoInput  todos={todos} setTodos={setTodos} />
            </div>
            <div className="todo_wrap">
                <TodoList todos={todos} />
            </div>
            
        </main>
    );
};

export default TodoTemplate;   