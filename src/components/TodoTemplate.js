import React from "react";
import "style/TodoTemplate.css";



const TodoTemplate = ( {form, children} ) => {
    // <span>UI(타이틀, children 값으로 내부에 추가할 컴포넌트)</span>

    return ( 
        <main className="todo_template">
            <h1 className="title">
                TASKS <strong>LIST</strong>
            </h1>
            <section className="form_wrap">
                {form}
            </section>
            <sectoin className="todo_wrap">
                { children }
            </sectoin>
            
        </main>
    );
};

export default TodoTemplate;   