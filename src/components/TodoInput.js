import React from "react";
import "style/TodoInput.css";

const TodoInput = ( {value, onChange, onKeyPress, onAdd } ) => {
    return (
        <div className="form">
            <input 
                value={value} 
                onChange={onChange} 
                onKeyPress={onKeyPress}
            />
            <button className="add_btn" onClick={onAdd}>add</button>

        </div>
    );
};

export default TodoInput;   