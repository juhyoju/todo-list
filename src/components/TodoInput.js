import React from "react";
import "style/TodoInput.css";

const TodoInput = ({newTodo, onChange, onKeyPress, onAddTodo, onDeleteAll}) => {

    return (
        <>
            <div className="form">
                <input
                    type="text"
                    value={newTodo}
                    onChange={onChange}
                    placeholder="things to do"
                    onKeyPress={onKeyPress}
                />
                <button onClick={onAddTodo} className="add_btn">저장하기</button>
            </div>
            
            <button onClick={onDeleteAll} className="add_btn">전체 삭제</button>
        </>
    );
};

export default TodoInput;   
