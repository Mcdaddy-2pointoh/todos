import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Todo.css";
import Box from "./Box";

const Todo = () => {
  const [data, changeData] = useState([]);
  const [details, changeDetails] = useState("");
  const change = (obj) => {
    const val = obj.target.value;
    changeDetails(val);
  };
  const add = (obj) => {
    obj.preventDefault();
    const val = { details };
    changeData([...data, val]);
    changeDetails("");
  };
  const deleteItem = (id) => {
    changeData((data) => {
      return data.filter((x, index) => {
        return index !== id;
      });
    });
  };
  const crossItem = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="Main">
        <div className="Center">
          <div className="Header">
            Your ToDo List
            <br />
          </div>
          <div className="Adder">
            <form onSubmit={add}>
              <input
                type="text"
                id="Todo input"
                label="Task to do"
                onChange={change}
                value={details}
                required
                placeholder="Enter a task"
              />
              <button>
                <AddIcon style={{ color: "white" }} />
              </button>
            </form>
          </div>
          <div className="Display">
            {data.map((obj, index) => {
              return (
                <Box
                  details={obj.details}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                  onClick={crossItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
