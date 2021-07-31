import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";



const TodoItem = ({onDelete, onUpdateStatus, onEditTodo, todo: {id, todo, isDone}}) => {
    const [edited, setEdited] = useState(false);
    const onClickEditButton = () => { 
        setEdited(true); 
    };
    return (
    //<span>각 일정 렌더링함 (완료 체크박스, 삭제 등)</span>;
        <li className={isDone ? "done" : "ing"}>
            <input 
                type="checkbox" 
                checked={isDone} 
                onChange={() => onUpdateStatus(id)} 
            />
            <span className="todoText">
                {todo} 
                {/* {isDone ? "(완료)" : "(진행중)"} */}
            </span>
            
            <span className="btn_right">
                <button onClick={onEditTodo} className="add_btn" onClick={onClickEditButton}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                
                <button onClick={() => onDelete(id)} className="add_btn">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </span>
        </li>
    );
};
export default TodoItem;   