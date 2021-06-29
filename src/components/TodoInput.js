import React, {useState } from "react";
import "style/TodoInput.css";

const TodoInput = () => {
    const [todos, setTodos ] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    //const [check, setCheck] = useState(false);
    
    const saveData = (newTodos) => {
        window.localStorage.setItem("todos", JSON.stringify(newTodos));
    };
    
    // useEffect(() => {
    //     if (window.localStorage.getItem("todos")) {
    //         setTodos(JSON.parse(localStorage.getItem("todos")));
    //     }
    // }, []);

    const onChange = (event) => {  
        setNewTodo(event.target.value);
    };

    const onAddTodo = () => {
        if (newTodo.trim()) {
            const newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
            setTodos(newTodos);
            setNewTodo("");
            saveData(newTodos);
        }
    };

    return (
        <div className="form">
            <input
                type="text"
                value={newTodo}
                onChange={onChange}
                placeholder="things to do"
            />
            <button onClick={onAddTodo} className="add_btn">저장하기</button>
        </div>
    );
};

export default TodoInput;   