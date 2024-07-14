import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, user } = useAuth0();

  return (
    <div className="row-span-1 flex justify-end items-center mx-3 gap-5">
      <p>{user.name}</p>
      <button
        className="bg-[#5757EB] py-2 px-5 rounded-md text-white
        shadow-sm
        active:shadow-md hover:bg-[#3333ea] active:bg-[#1918A0]"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
