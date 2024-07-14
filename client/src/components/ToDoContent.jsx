import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function ToDoContent() {
  const { user } = useAuth0();
  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [isClicked, setClicked] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/${user.email}`);
        //console.log(response.data);
        setTaskList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [taskList]);

  const handleAdd = (event) => {
    event.preventDefault();
    const postData = async () => {
      try {
        await axios.post("http://localhost:4000/add", {
          inputTask: taskInput,
          email: user.email,
        });
        //console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    postData();
    setTaskInput("");
  };

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleDelete = async (id) => {
    //console.log(id);
    try {
      await axios.delete(`http://localhost:4000/delete/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const sendEditData = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:4000/edit/${id}`, {
        inputTask: taskInput,
      });
    } catch (error) {
      console.error(error);
    }
    setClicked(false);
    setTaskInput("");
  };

  const handleEdit = (id, task) => {
    setClicked(true);
    setId(id);
    setTaskInput(task);
  };

  return (
    <div className="row-span-5">
      {isClicked ? (
        <ToDoForm
          onSubmit={sendEditData}
          action="/edit"
          onChange={handleChange}
          value={taskInput}
          name="Edit"
        />
      ) : (
        <ToDoForm
          onSubmit={handleAdd}
          action="/add"
          onChange={handleChange}
          value={taskInput}
          name="Add"
        />
      )}
      <ToDoList
        taskList={taskList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default ToDoContent;
