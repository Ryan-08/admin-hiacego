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
  nama: any;
  plat: any;
  rute: any[];
  jadwal: any[];
}

const tambah = () => {
  const jadwal = ["Pagi", "Siang", "Malam"];
  const [data, setData] = useState<Data>({
    nama: "",
    plat: "",
    rute: [],
    jadwal: [],
  });
  const [rutes, setRute] = useState([]);
  const [checked, setChecked] = useState<any[]>([]);
  const [checkedJadwal, setCheckedJadwal] = useState<any[]>([]);
  const router = useRouter();

  const handleRute = (event: any) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    setData({ ...data, rute: updatedList });
  };
  const handleJadwal = (event: any) => {
    var updatedList = [...checkedJadwal];
    if (event.target.checked) {
      updatedList = [...checkedJadwal, event.target.value];
    } else {
      updatedList.splice(checkedJadwal.indexOf(event.target.value), 1);
    }
    setCheckedJadwal(updatedList);
    setData({ ...data, jadwal: updatedList });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      axios.post("/api/mobil/create", data);
    } catch (error: any) {
      console.log(error.message);
    }
    router.push("/Daftar-Mobil");
  };
  useEffect(() => {
    let isMounted = true;

    const getRute = async () => {
      const res = await axios.get(`/api/rute`);
      isMounted && setRute(res.data);
    };

    getRute();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>HiaceGo | Tambah Mobil</title>
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
                      Nama Travel
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Plat Mobil
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Rute
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Jadwal
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
                        placeholder="Nama Travel"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, nama: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="No. Plat Mobil"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, plat: target.value })
                        }
                      />
                      <div className="w-full px-8 py-4 border-b-2 border-black flex items-center">
                        <div className="list-container h-[14%]  gap-4 flex justify-between  w-fit">
                          {rutes.map((item, index) => (
                            <div
                              key={index}
                              className="gap-2 flex items-center"
                            >
                              <input
                                value={item["Key"]}
                                type="checkbox"
                                onChange={handleRute}
                              />
                              <span>{item["Key"]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-full px-8 py-4 border-b-2 border-black flex items-center">
                        <div className="list-container h-[14%]  flex justify-between gap-4 w-fit">
                          {jadwal.map((item, index) => (
                            <div
                              key={index}
                              className="gap-2 flex items-center"
                            >
                              <input
                                value={item}
                                type="checkbox"
                                onChange={handleJadwal}
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
