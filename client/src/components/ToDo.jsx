import React from "react";
import ToDoGreet from "./ToDoGreet";
import ToDoContent from "./ToDoContent";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./ToDoLogin";
import LogoutButton from "./ToDoLogout";

function ToDo() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div className="grid grid-rows-8 p-5">
      <LogoutButton />
      <ToDoGreet />
      <ToDoContent />
    </div>
  ) : (
    <div className="flex flex-col justify-center gap-5 p-5">
      <p className="text-4xl text-center font-semibold my-5 py-5">Get things done with ToDo</p>
      <p className="text-lg">
        Welcome to our intuitive and efficient To-Do List website, where
        productivity meets simplicity! Streamline your tasks, prioritize your
        day, and stay organized effortlessly. Our user-friendly interface allows
        you to create, edit, and manage your to-do items with ease.
      </p>
      <LoginButton />
    </div>
  );
}

export default ToDo;
