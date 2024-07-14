import React from "react";

function ToDoGreet() {
  const time = new Date().getHours();
  let greet = "";
  //console.log(time);
  if (time >= 6 && time < 12) {
    greet = "Good Morning !";
  } else if (time >= 12 && time < 18) {
    greet = "Good Afternoon !";
  } else if (time >= 18 && time < 21) {
    greet = "Good Evening";
  } else {
    greet = "Good Night !";
  }
  return (
    <div className="row-span-2 flex items-center justify-center m-5">
      <p className="sm:text-4xl text-2xl p-5 font-semibold">{greet}</p>
    </div>
  );
}

export default ToDoGreet;
