import { useState } from "react";

interface TodoListProps {
  valueText: string;
  setValueText: Function;
}

const TodoList = (props: TodoListProps) => {
  const [todoListApp, setTodoListApp] = useState<any>([]);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [indexNumber, setIndexNumber] = useState<number>();

  const addTodoValue = () => {
    const arr: string[] = [];
    if (props.valueText.length !== 0) {
      arr.push(...todoListApp, props.valueText);
      setTodoListApp(arr);
      props.setValueText("");
    } else {
      alert("Add ");
    }
  };

  const deletetodolist = (index: number) => {
    setTodoListApp(todoListApp.filter((item: any, i: number) => i !== index));
  };
  const edittolist = (item: string, index: number) => {
    props.setValueText(item);
    setIndexNumber(index);
    setIsEditable(true);
  };

  // Update TodoList
  const handleUpdateTodoList = () => {
    const update = [...todoListApp];
    update[indexNumber!] = props.valueText;
    setTodoListApp(update);
    setIsEditable(false);
    props.setValueText("");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>This is My todo List App</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <input
          type="text"
          value={props.valueText}
          onChange={(e) => props.setValueText(e.target.value)}
          placeholder="Enter Your Todo List App"
        />
        <button
          onClick={() => {
            if (isEditable) {
              handleUpdateTodoList();
            } else {
              addTodoValue();
            }
          }}
        >
          {isEditable ? "Update" : "Add"}
        </button>
      </div>
      <div>
        {todoListApp.map((item: any, index: number) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <div>{item}</div>
                <button onClick={() => edittolist(item, index)}>Edit</button>
                <button onClick={() => deletetodolist(index)}>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default TodoList;
