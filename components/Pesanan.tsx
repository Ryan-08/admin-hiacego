import Link from "next/link";
import React from "react";

const Pesanan = ({ namapemesan, ptpesanan, href }: any) => {
  return (
    <Link
      href={href}
      className="flex flex-row justify-between listpesanan hover:bg-[#C4C4C4] items-center p-3 rounded-md"
    >
      <div className="flex flex-col ]">
        <h1 className="namapemesan">{namapemesan}</h1>
        <h1 className="ptpesanan">{ptpesanan}</h1>
      </div>
      <div className="flex gap-4">
        lihat detail
        {/* <a className="flex h-8 w-8 rounded-md justify-center cursor-pointer bg-[#1FAA59] hover:bg-[#0d8f43] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <a className="flex h-8 w-8 rounded-md justify-center cursor-pointer bg-[#F54748] hover:bg-[#d32f2f] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </a> */}
      </div>
    </Link>
  );
};

export default Pesanan;
