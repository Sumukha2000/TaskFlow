import "./app.css"
function App() {
  return (
    <>
      <div>
        <h1>Task Flow</h1>
        <div className="main-wrapper">
        <div className="todo-wrapper">
          <div className="todo-heading">To Do</div>
          <div className="tasks-wrapper"></div>
        </div>
        <div className="inprogress-wrapper">
          <div className="inprogress-heading">In Progress</div> 
          <div className="tasks-wrapper"></div>
        </div>
        <div className="done-wrapper">
          <div className="done-heading">Done</div>
          <div className="tasks-wrapper"></div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
