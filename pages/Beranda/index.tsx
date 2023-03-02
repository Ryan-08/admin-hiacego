import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { berita } from "../../public";
import Header from "../../components/Header";
import iconHome from "../../assets/icons/iconHome.svg";
import ProtectedRoute from "../../components/ProtectedRoute";

function Beranda() {
  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>HiaceGo | Beranda</title>
          <link rel="icon" href="/usk.svg" />
        </Head>

        <div className="flex  w-full h-full">
          {/* // SIDEBAR */}
          <Sidebar />
          {/* //END OF SIDEBAR */}

          <div className="flex flex-col w-full bg-[#EEEEEE]">
            {/* NAVBAR */}
            <Navbar />
            {/* END OF NAVBAR */}

            {/* CONTENT */}
            <div className="flex flex-col">
              <Header
                title="Beranda"
                terminal="Terminal Lueng Bata"
                icon={iconHome}
              />

              {/* WRAPPER */}
              <div className="flex md:flex-row flex-col justify-between ml-8 mr-8 gap-8">
                {/* TOPCONTENT 1 */}
                <a
                  className="flex flex-col cursor-pointer h-40 w-1/3 rounded-lg topcontentshadow"
                  style={{
                    background:
                      "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)",
                  }}
                >
                  <h1 className="pt-4 pl-6 headerhome">Tambah Travel</h1>
                  <div className="flex items-center justify-center w-full h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-20 h-20 mb-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
                {/*END OF TOPCONTENT 1 */}

                {/* TOPCONTENT 2 */}
                <div
                  className="flex flex-col h-40 w-1/3 rounded-lg topcontentshadow"
                  style={{
                    background:
                      "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)",
                  }}
                >
                  <h1 className="pt-4 pl-6 headerhome">Total Penumpang</h1>
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="totalpenumpang">252</h1>
                  </div>
                </div>
                {/*END OF TOPCONTENT 2 */}

                {/* TOPCONTENT 3 */}
                <div
                  className="flex flex-col h-40 w-1/3 rounded-lg topcontentshadow"
                  style={{
                    background:
                      "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)",
                  }}
                >
                  <h1 className="pt-4 pl-6 headerhome">Jumlah Mobil</h1>
                  <div className="flex flex-col items-center justify-center pl-6 pr-6 w-full h-full">
                    <div className="flex justify-around w-full ">
                      <h1 className="jumlahmobil">14</h1>
                      <span className="jumlahmobildetail">sudah berjalan</span>
                    </div>

                    <div className="flex justify-around w-full ">
                      <h1 className="jumlahmobil">20</h1>
                      <span className="jumlahmobildetail">akan berjalan</span>
                    </div>
                  </div>
                </div>
                {/* END OF TOPCONTENT 3 */}
              </div>
              {/*END OF WRAPPER */}

              {/* WRAPPER 2 */}
              <div className="flex flex-row p-8 gap-8 ">
                {/* BOTTOM CONTENT 1 */}
                <div className="flex flex-col bg-white bottomcontentshadow p-6 rounded-lg w-3/5">
                  <div className="flex flex-row justify-between mb-6">
                    <h1 className="bottomcontentheader">Pesanan Baru</h1>
                    <a className="flex cursor-pointer">
                      <h1 className="bottomcontentdetail">Lihat semua</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1FA5F7"
                        className="w-5 h-5 ml-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between listpesanan hover:bg-[#C4C4C4] items-center p-3 rounded-md">
                      <div className="flex flex-col ]">
                        <h1 className="namapemesan">Ilham Syahputra</h1>
                        <h1 className="ptpesanan">PT. Bahtera Atakana</h1>
                      </div>
                      <div className="flex gap-4">
                        <a className="flex h-8 w-8 rounded-md justify-center cursor-pointer bg-[#1FAA59] hover:bg-[#0d8f43] items-center">
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
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between listpesanan hover:bg-[#C4C4C4] items-center p-3 rounded-md">
                      <div className="flex flex-col ]">
                        <h1 className="namapemesan">Ilham Syahputra</h1>
                        <h1 className="ptpesanan">PT. Bahtera Atakana</h1>
                      </div>
                      <div className="flex gap-4">
                        <a className="flex h-8 w-8 rounded-md justify-center cursor-pointer bg-[#1FAA59] hover:bg-[#0d8f43] items-center">
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
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between listpesanan hover:bg-[#C4C4C4] items-center p-3 rounded-md">
                      <div className="flex flex-col ]">
                        <h1 className="namapemesan">Ilham Syahputra</h1>
                        <h1 className="ptpesanan">PT. Bahtera Atakana</h1>
                      </div>
                      <div className="flex gap-4">
                        <a className="flex h-8 w-8 rounded-md justify-center cursor-pointer bg-[#1FAA59] hover:bg-[#0d8f43] items-center">
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END OF BOTTOM CONTENT 1 */}

                {/* BOTTOM CONTENT 2 */}
                <div className="flex flex-col bg-white bottomcontentshadow p-6 rounded-lg w-2/5">
                  <div className="flex flex-row justify-between mb-6">
                    <h1 className="bottomcontentheader">Berita</h1>
                    <a className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="blue"
                        className="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center  rounded-md">
                      <div className="flex flex-row listberitashadow p-4 rounded-md">
                        <div className="flex flex-col w-40 mr-4 ">
                          <div className="flex bg-[#92d7ff] mb-2 w-12 h-[21px] rounded-md items-center justify-center">
                            <h1 className="text-[#2596D7] tips">Tips</h1>
                          </div>

                          <h1 className="textberita">
                            Tetap jaga komunikasi selama di kereta
                          </h1>
                        </div>
                        <Image src={berita} alt="ico" />
                      </div>
                      <a className="flex h-10 w-10 rounded-md justify-center cursor-pointer bg-[#F54748] hover:bg-[#d32f2f] items-center">
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
                    <div className="flex flex-row justify-between items-center  rounded-md">
                      <div className="flex flex-row listberitashadow p-4 rounded-md">
                        <div className="flex flex-col w-40 mr-4 ">
                          <div className="flex bg-[#ffd1ac] mb-2 w-12 h-[21px] rounded-md items-center justify-center">
                            <h1 className="text-[#FE9B4B] update">Update</h1>
                          </div>

                          <h1 className="textberita">
                            Protokol kesehatan di kereta
                          </h1>
                        </div>
                        <Image src={berita} alt="ico" />
                      </div>
                      <a className="flex h-10 w-10 rounded-md justify-center cursor-pointer bg-[#F54748] hover:bg-[#d32f2f] items-center">
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
                  </div>
                </div>
                {/* END OF BOTTOM CONTENT 2 */}
              </div>
              {/* END OF WRAPPER 2 */}
            </div>
            {/*END OF CONTENT */}
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
}
export default Beranda;
