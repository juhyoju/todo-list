import React, { useState } from "react";
import "style/TodoTemplate.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";



const TodoTemplate = () => {
    // <span>UI(타이틀, children 값으로 내부에 추가할 컴포넌트)</span>

    // 가져오기
    const onGetTodo = window.localStorage.getItem("todoArray");
    const [todos, setTodos] = useState(JSON.parse(onGetTodo)??[]);
    
    const onDeleteTodoItem = id => { 
        const onDeleteTodos = todos.filter(todos => todos.id !== id);
        setTodos(onDeleteTodos);
        window.localStorage.setItem("todoArray", JSON.stringify(onDeleteTodos));
    };

    const onIsDoneTodo = id => {
        setTodos(
            todos.map(todos =>
                todos.id === id ? { ...todos, isDone: !todos.isDone } : todos
            )
        );
    };
    
    const Today = new Date();
    const DateString = Today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday : 'long'
    });
    
    

    return ( 
        <main className="todo_template">
            <h1 className="title">
                TASKS <strong>LIST</strong>
            </h1>
            <p style={{textAlign:'center'}}>{DateString}</p>
            <div className="form_wrap">
                <TodoInput  todos={todos} setTodos={setTodos} />
            </div>
            <div className="todo_wrap">
                <TodoList
                    todos={todos} 
                    onDelete={onDeleteTodoItem}
                    onUpdateStatus={onIsDoneTodo}
                >
                    <TodoItem 
                        onDelete={onDeleteTodoItem} 
                        onUpdateStatus={onIsDoneTodo} 
                    />
                </TodoList>
            </div>
            
        </main>
    );
};

export default TodoTemplate;   