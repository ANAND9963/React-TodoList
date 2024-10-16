import "./css/style.css";
import { useEffect, useState } from "react";

export default function Todo() {
  const [todoList, setList] = useState(localStorage.getItem("todo")&& Array.isArray(JSON.parse(localStorage.getItem("todo"))) && JSON.parse(localStorage.getItem("todo")).length !==0 ? 
                                    JSON.parse(localStorage.getItem("todo")):
                                  [
                        
                                  
                                    
                                  ]);
  const [newTodo, setTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); 
  const [currentText, setCurrentText] = useState(""); 
  console.log("todoList",todoList);

  useEffect(()=> {
    localStorage.setItem("todo",JSON.stringify(todoList))
  },[todoList])
  
  const onKeyAdd = (e) => {
  
    if (e.key === "Enter") {
      btnAddTask();
    }
  };

  const btnAddTask = () => {
    let updatedTodoList = [...todoList, {text:newTodo,completed:false}];
    setList(updatedTodoList);
   // setStorage(JSON.stringify(updatedTodoList));
    setTodo(""); 
  };

  const dltbtnlist= () => {
    setList([]);
   // setStorage([]);
  }
  // const setStorage =(array) =>{
  //   localStorage.setItem("todo",array)
  // }

  const toggleChange=  (index) =>{
    let newList = [...todoList]
    newList[index]["completed"] = !newList[index]["completed"]
    setList(newList)   
  }
  const handleEdit = (index) => {
    setEditingIndex(index);
    setCurrentText(todoList[index].text); 
  };

  const handleEditChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleKeyDownEdit = (e, index) => {
    if (e.key === "Enter") {
      let newList = [...todoList];
      newList[index].text = currentText; 
      setList(newList);
      setEditingIndex(null); 
    }
  };

  const handleBlur = (index) => {
    let newList = [...todoList];
    newList[index].text = currentText; 
    setList(newList);
    setEditingIndex(null); 
  };
  


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
                    className="checkbox-style"
                    type="checkbox"
                    name={`todoCheckbox-${index}`}
                    onChange={() => toggleChange(index)}
                    checked={item.completed}
                    id={`todoCheckbox-${index}`}
                  />
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={currentText}
                      onChange={handleEditChange}
                      onKeyDown={(e) => handleKeyDownEdit(e, index)}
                      onBlur={() => handleBlur(index)} 
                      autoFocus
                    />
                  ) : (
                    <li
                      onClick={() => handleEdit(index)} 
                      className={item.completed ? "completedTask" : "none"}
                      id={`todoLi-${index}`}
                    >
                      {item.text}
                    </li>
                  )}
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
