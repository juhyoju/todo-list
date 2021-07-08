import React, { Component } from "react";
import TodoTemplate from "components/TodoTemplate";
import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";

class App extends Component {
  
  render() {

    const onGetTodo = window.localStorage.getItem("todoArray");
    
    return (
      <TodoTemplate form={<TodoInput onGetTodo={onGetTodo}/>}>

        <TodoList onGetTodo={onGetTodo}/>
      </TodoTemplate>
      
    );
  }
}

export default App;
