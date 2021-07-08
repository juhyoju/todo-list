import React, {useState, useEffect} from "react";

const TodoList = () => {

    const [todos, setTodos ] = useState([]);
    const onGetTodo = window.localStorage.getItem("todoArray");
    
    console.log(onGetTodo)
    useEffect(() => {
       
        if (onGetTodo.length !== 0) {
            setTodos(JSON.parse(onGetTodo));
        }
    }, [onGetTodo]);


    console.log('todos: ', todos)
    return (

        <>
        {/* <span>일정 데이터가 담긴 배열을 TodoItme 컴포넌트로 구성된 배열로 변환해서 렌더링하는 컴포넌트</span> */}
        <div>{todos.map((oneTodo) => (
            (oneTodo.todo)
        ))}</div>
        </>
    )
};

export default TodoList;