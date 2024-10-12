import "./css/style.css";

export default function Todo() {
  console.log("hghgfhg");
  return (
    <>
      <div className="main">
        <div className="todo_container">
          <h2 className="header">To Do List</h2>
          <div className="input_container">
            <input className="txtinput" placeholder="Add a task"></input>
            <button className="btnadd">ADD</button>
          </div>
          <ul className="scroll">
            <li>Task1</li>
            <li>swathi</li>
            <li>swathi</li>
            <li>saiesh</li>
            <li>swathi</li>
            <li>swathi</li>
            <li>swathi</li>
            <li>swathi</li>
            <li>swathi</li>
          </ul>
          <hr className="counter"></hr>
          <div className="counter_container">
            <p>
              Item total:<span>{1}</span>
            </p>
            <button className="delbtn">Delete All</button>
          </div>
        </div>
        <footer className="footer_txt">
          <span>© Developed by Anand Yannamaneni</span>
        </footer>
      </div>
    </>
  );
}
