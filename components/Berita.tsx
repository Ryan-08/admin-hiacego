import React from "react";
import Image from "next/image";

const Berita = ({ sourceImg, judul, handle }: any) => {
  return (
    <div className="flex flex-row justify-between items-center  rounded-md">
      <div className="flex flex-row listberitashadow p-4 rounded-md">
        <div className="flex flex-col w-40 mr-4 ">
          <div className="flex bg-[#92d7ff] mb-2 w-12 h-[21px] rounded-md items-center justify-center">
            <h1 className="text-[#2596D7] tips">News</h1>
          </div>

          <h1 className="textberita">{judul}</h1>
        </div>
        <Image src={sourceImg} alt="ico" />
      </div>
      <a
        onClick={handle}
        className="flex h-10 w-10 rounded-md justify-center cursor-pointer bg-[#F54748] hover:bg-[#d32f2f] items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default Berita;
