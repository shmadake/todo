import React from "react";
import ToDoImage from "./components/ToDoImage";
import ToDo from "./components/ToDo";
import ToDoFooter from "./components/ToDoFooter";

function App() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1">
        <ToDoImage />
        <ToDo />
      </div>
      <ToDoFooter />
    </div>
  );
}

export default App;
