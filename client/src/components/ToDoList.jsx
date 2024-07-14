import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDoList(props) {
  return (
    <div className="flex flex-col gap-1 py-5 px-5 my-10">
      <ul>
        {props.taskList.map((item) => {
          return (
            <div key={item.id} className="flex justify-between items-center">
              <li className="text-lg px-5 rounded-md hover:shadow-sm w-full py-2">
                {item.task}
              </li>
              <div className="flex gap-3 px-1">
                <button onClick={() => props.handleEdit(item.id, item.task)}>
                  <EditIcon />
                </button>
                <button onClick={() => props.handleDelete(item.id)}>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
