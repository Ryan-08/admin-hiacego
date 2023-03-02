import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../context/AuthContextProvider";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex items-center justify-between bg-white h-[70px] pl-24">
      <div className="flex pl-4 placeholder-black rounded-full bg-[#EEEEEE] h-10 w-80 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          placeholder="Cari ..."
          className="pl-2 placeholder-black focus:outline-none w-full bg-transparent"
        ></input>
      </div>
      <button
        className="flex cursor-pointer pr-6 gap-x-2"
        onClick={handleLogout}
      >
        <h1 className="btnlogout">Keluar</h1>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Navbar;
