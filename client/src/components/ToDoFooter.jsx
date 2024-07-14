import React from "react";

function ToDoFooter() {
  return (
    <div className="w-full flex items-end justify-center px-5 pb-2">
      <p className="text-sm">
        Copyright {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default ToDoFooter;
