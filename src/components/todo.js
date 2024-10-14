import "./css/style.css";
import { useState } from "react";

export default function Todo() {
  const [todoList, setList] = useState(localStorage.getItem("todo")&& Array.isArray(JSON.parse(localStorage.getItem("todo"))) && JSON.parse(localStorage.getItem("todo")).length !==0 ? 
                                    JSON.parse(localStorage.getItem("todo")):[]);
  const [newTodo, setTodo] = useState("");
  console.log("todoList",todoList);
  
  const onKeyAdd = (e) => {
  
    if (e.key === "Enter") {
      btnAddTask();
    }
  };

  const btnAddTask = () => {
    let updatedTodoList = [...todoList, newTodo];
    setList(updatedTodoList);
    setStorage(JSON.stringify(updatedTodoList));
    setTodo(""); 
  };

  const dltbtnlist= () => {
    setList([]);
    setStorage([]);
  }
  const setStorage =(array) =>{
    localStorage.setItem("todo",array)
  }

  return (
    <>
      <div className="main">
        <div className="todo-container">
          <h2 className="header">To Do List</h2>
          <div className="input-container">
            <input
              id="newTodoInput"
              name="newTodo"
              className="txtinput"
              placeholder="Add a task"
              value={newTodo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyUp={onKeyAdd}
            />
            <button className="btnadd" onClick={btnAddTask}>
              ADD
            </button>
          </div>

          <ul className="scroll">
            {todoList.map((item, index) => {
              return (
                <div key={index} className="list-container">
                  <input
                    type="checkbox"
                    name={`todoCheckbox-${index}`}
                    id={`todoCheckbox-${index}`}
                  />
                  <li id={`todoLi-${index}`} key={index}>{item}</li>
                </div>
              );
            })}
          </ul>

          <hr className="counter"></hr>
          <div className="counter-container">
            <p>
              Item total: <span>{todoList.length}</span>
            </p>
            <button className="delbtn" onClick={(e)=>dltbtnlist()}>Delete All</button>
          </div>
        </div>
        <footer className="footer-txt">
          <span>© Developed by Anand Yannamaneni</span>
        </footer>
      </div>
    </>
  );
}
