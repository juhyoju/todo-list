import React, { Component } from "react";
import TodoTemplate from "components/TodoTemplate";
import TodoInput from "components/TodoInput";

class App extends Component {
  render() {
    return (
      <TodoTemplate form={<TodoInput />}>

        
      </TodoTemplate>
      
    );
  }
}

export default App;
