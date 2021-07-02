import React from "react";
import "style/TodoTemplate.css";



const TodoTemplate = ( {form, children} ) => {
    // <span>UI(타이틀, children 값으로 내부에 추가할 컴포넌트)</span>

    return ( 
        <main className="todo_template">
            <h1 className="title">
                TASKS <strong>LIST</strong>
            </h1>
            <div className="form_wrap">
                {form}
            </div>
            <div className="todo_wrap">
                { children }
            </div>
            
        </main>
    );
};

export default TodoTemplate;   