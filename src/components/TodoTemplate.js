import React, { useState, useCallback, useRef } from "react";
import "style/TodoTemplate.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

// import { useDrag, useDrop } from 'react-dnd';
// import { ItemTypes } from "./dnd";
// import update from 'immutability-helper';

const TodoTemplate = (id) => {
    // <span>UI(타이틀, children 값으로 내부에 추가할 컴포넌트)</span>
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

        const todoAll = [...todos, {todo: newTodo, id: Date.now(), isDone: false}];
        setTodos(todoAll);
        setNewTodo("");
        onSaveTodo(todoAll);
    };

    const onKeyPress = (event) => {
        if(event.key === "Enter") {
            onAddTodo();
        }
    }

    const onDeleteAll = () => {
        const deleteMsg = window.confirm("Todo 항목을 모두 삭제하십니까?");

        if(deleteMsg) {
            window.localStorage.clear("todoArray");
            setTodos([]);
        };
    };
    // 가져오기
    const onGetTodo = window.localStorage.getItem("todoArray");
    const [todos, setTodos] = useState(JSON.parse(onGetTodo)??[]);
    
    const onDeleteTodoItem = id => { 
        const deleteMsg = window.confirm("이 항목을 삭제하십니까?");

        if(deleteMsg) {
            const onDeleteTodos = todos.filter(todos => todos.id !== id);
            setTodos(onDeleteTodos);
            window.localStorage.setItem("todoArray", JSON.stringify(onDeleteTodos));
        };
    };

    const onIsDoneItem = id => {
        const onIsDoneTodo = todos.map(todos =>
            todos.id === id ? { ...todos, isDone: !todos.isDone } : todos
        )
        setTodos(onIsDoneTodo);
        window.localStorage.setItem("todoArray", JSON.stringify(onIsDoneTodo));
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
                <TodoInput  
                    newTodo={newTodo}
                    onChange={onChange} 
                    onKeyPress={onKeyPress} 
                    onAddTodo={onAddTodo} 
                    onDeleteAll={onDeleteAll}
                />
            </div>
            <div className="todo_wrap">
                <TodoList
                    todos={todos} 
                    onDelete={onDeleteTodoItem}
                    onUpdateStatus={onIsDoneItem}
                    // moveCard={moveCard}
                >
                <TodoItem 
                    onDelete={onDeleteTodoItem} 
                    onUpdateStatus={onIsDoneItem} 
                    // moveCard={moveCard}
                    // isDragging={isDragging}
                    // ref={ref}
                />
                </TodoList>
            </div>
            
        </main>
    );
};

export default TodoTemplate;   
