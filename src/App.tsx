import { useState } from "react";
import "./App.css";
import TodoList from "./todoList";
// import Parent from "./Employee/Parent";

const App = () => {
  const [valueText, setValueText] = useState<string>("");
  return (
    <div className="App">
      <TodoList valueText={valueText} setValueText={setValueText} />
    </div>
  );
};

export default App;
