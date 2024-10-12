"use client";
import React from 'react'
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";


export default function Header() {

  const { data } = useSession();

  return (
    <header className="bg-[#304ffe] text-white rounded-[12px] my-5 p-5 items-center justify-between flex ">
      <div>
        <ul className="flex list-none ">
            <li className="ml-7">
                <Link href="/">صفحه اصلی </Link>
            </li>
            <li className="ml-7">
                <Link href="/buy-residential"> آگهی ها </Link>
            </li>
        </ul>
      </div>
      { data ? ( <div>
        <Link className="flex items-center bg-white rounded-[5px] px-2 py-1 text-[#304ffe] transition ease-in delay-150 hover:bg-[#304ffe] hover:text-white"href="/dashboard">
               <FaUserAlt className="text-2xl" />
               
             </Link>
         </div>) : (
        <div>
        <Link className="flex items-center bg-white rounded-[5px] px-2 py-1 text-[#304ffe] transition ease-in delay-150 hover:bg-[#304ffe] hover:text-white" href="/signin">
               <FiLogIn className="text-2xl" />
               <span className="mr-1">ورود</span>
             </Link>
         </div>
      )}
    </header>
  )
}
