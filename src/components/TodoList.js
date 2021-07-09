import React from "react";

const TodoList = ({todos}) => {

    return (
        <>
        <div>{todos.map((oneTodo) => 
            (oneTodo.todo)
        )}</div>
        </>
    )
};

export default TodoList;