import React from "react";
import "style/TodoList.css";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = ({moveCard, todos, onDelete, onUpdateStatus}) => {    
    return (
        <>
        <div className="todoList">
            <DragDropContext>
                <Droppable droppableId="todos">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {todos.map(todo => (
                            <Draggable>
                                {(provided) => (
                                <TodoItem 
                                    todo={todo} 
                                    key={todos.id} 
                                    onDelete={onDelete} 
                                    onUpdateStatus={onUpdateStatus} 
                                    moveCard={moveCard}
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                />
                            )}
                            </Draggable>
                        ))}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>         
        </div>
        </>
    )
};

export default TodoList;
