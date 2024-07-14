import React from "react";

function ToDoForm(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      method="post"
      action={props.action}
      className="flex px-5 gap-5 h-10"
    >
      <input
        onChange={props.onChange}
        value={props.value}
        className="w-full text-center rounded-md shadow-sm
        focus:shadow-md
        focus:border-2 focus:border-[#C6C7F7]
        focus:outline-none"
        placeholder="What is the task today?"
        required
      ></input>
      <button
        className="bg-[#5757EB] px-5 rounded-md text-white
        shadow-sm
        active:shadow-md hover:bg-[#3333ea] active:bg-[#1918A0]"
        type="submit"
      >
        {props.name}
      </button>
    </form>
  );
}

export default ToDoForm;
