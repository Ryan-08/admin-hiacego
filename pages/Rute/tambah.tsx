import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import iconMobil from "../../assets/icons/iconMobil.svg";
import ProtectedRoute from "../../components/ProtectedRoute";
import axios from "axios";
import { useRouter } from "next/router";

interface Data {
  tujuan: any;
  alamat: any;
  durasi: any;
  harga: any;
  key: any;
}

const tambah = () => {
  const jadwal = ["Pagi", "Siang", "Malam"];
  const [data, setData] = useState<Data>({
    tujuan: "",
    alamat: "",
    durasi: "",
    harga: "",
    key: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      axios.post("/api/rute/create", data);
    } catch (error: any) {
      console.log(error.message);
    }
    router.push("/Rute");
  };
  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>HiaceGo | Tambah Rute</title>
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
            <div className="flex flex-col min-h-screen w-full">
              <Header
                title="Tambah Mobil"
                terminal="Terminal Lueng Bata"
                icon={iconMobil}
              />
              <div className="flex flex-col bg-white mx-8 h-full p-8 rounded-md iconnamepageshadow mb-6 items-center gap-10">
                <div className="flex flex-row h-full w-full font-semibold">
                  <div className="flex flex-col bg-[#F6F6F6] w-1/5 h-full rounded-md">
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Tujuan
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Alamat
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Durasi
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Harga
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Key
                    </h3>
                  </div>
                  <form
                    method="post"
                    className="flex flex-col w-4/5 h-full mx-8"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col h-full">
                      <input
                        type="text"
                        placeholder="Tujuan"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, tujuan: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Alamat"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, alamat: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Durasi"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, durasi: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Harga"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, harga: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Key"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, key: target.value })
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#1FA5F7] w-1/5 p-2 px-4 rounded-md mx-auto text-white font-bold text-center"
                    >
                      Simpan Data
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/*END OF CONTENT */}
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
};

export default tambah;
