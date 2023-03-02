import React from "react";
import Image from "next/image";

const Header = (props: { title: string; terminal: string; icon: any }) => {
  return (
    <div className="flex flex-row p-8 justify-between">
      <div className="flex">
        <div
          className="flex h-12 w-12 rounded-md justify-center items-center iconnamepageshadow"
          style={{
            background: "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)",
          }}
        >
          <Image src={props.icon} alt="icon" />
        </div>
        <h1 className="flex pl-4 items-center tittlepage">{props.title}</h1>
      </div>
      {/* <a className="flex h-12 w-72 rounded-md cursor-pointer items-center loctshadow loctfont bg-[#FFFFFF]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#1FA5F7"
          className="w-6 h-6 ml-4"
        >
          <path
            fill-rule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>

        <h1 className="pl-3">{props.terminal}</h1>
      </a> */}
    </div>
  );
};

export default Header;
