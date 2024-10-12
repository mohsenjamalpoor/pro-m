"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";


function LogoutButton() {
  return (
    <button 
    className="flex bg-none  cursor-pointer text-[#db0505] text-right text-base w-full border-none mt-5"
     onClick={()=>signOut()}>
      <FiLogOut className="text-[#db0505] ml-1 text-xl"/>
      خروج
    </button>
  );
}

export default LogoutButton;
