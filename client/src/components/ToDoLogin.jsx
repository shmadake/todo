import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="row-span-1 flex justify-center">
      <button
        className="bg-[#5757EB] py-2 px-5 rounded-md text-white
        shadow-sm
        active:shadow-md hover:bg-[#3333ea] active:bg-[#1918A0]"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginButton;
