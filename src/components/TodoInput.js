import React, {useState} from "react";
import "style/TodoInput.css";

const TodoInput = ( {value, onChange, onKeyPress } ) => {
    const [ todoElement, setTodoElement ] = useState("");
    const onAdd = e => {
        const {
            target: {value}
        } = e;
        setTodoElement(value);
    }
    return (
        <div className="form">
            <input 
                value={todoElement} 
                onChange={onAdd} 
                onKeyPress={onKeyPress}
            />
            <button className="add_btn" onClick={onAdd}>add</button>
        </div>
    );
};

export default TodoInput;   