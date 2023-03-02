import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ProtectedRoute from "../../components/ProtectedRoute";
import Sidebar from "../../components/Sidebar";
import iconMobil from "../../assets/icons/iconMobil.svg";
import iconPlus from "../../assets/icons/iconPlus.svg";
import iconEdit from "../../assets/icons/iconEdit.svg";
import iconDelete from "../../assets/icons/iconDelete.svg";
import axios from "axios";
import OptionTujuan from "../../components/OptionTujuan";

const rute = () => {
  const [rutes, setRute] = useState([]);
  const [tujuan, setTujuan] = useState("");
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
  }, [tujuan]);
  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>HiaceGo | Daftar rute</title>
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
                title="Daftar rute"
                terminal="Terminal Lueng Bata"
                icon={iconMobil}
              />
              {/* ROW */}
              <div className="flex flex-row p-8 pt-0 items-center justify-end">
                {/* BUTTON PLUS */}
                <Link href={"/Rute/tambah"} className="flex">
                  <div
                    className="flex h-12 w-12 rounded-md justify-center items-center iconnamepageshadow"
                    style={{
                      background:
                        "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)",
                    }}
                  >
                    <Image src={iconPlus} alt="icon" />
                  </div>
                </Link>
                {/* END OF BUTTON */}
              </div>
              {/* END OF ROW */}
              {/* TABLE DATA */}
              <div className="flex flex-col mx-8">
                <table className="table-auto flex flex-col w-full p-4 bg-white">
                  <thead className="w-full bg-[#F6F6F6] p-4 ">
                    <tr className="flex w-full">
                      <th className="flex w-1/12 font-normal">No.</th>
                      <th className="flex w-1/5 font-normal">Tujuan</th>
                      <th className="flex w-1/5 font-normal">Alamat</th>
                      <th className="flex w-1/6 font-normal">Durasi Hp</th>
                      <th className="flex w-1/6 font-normal">Harga</th>
                      <th className="flex w-1/12 font-normal">Key</th>
                      <th className="flex w-1/6 font-normal justify-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="flex flex-col w-full p-4">
                    {rutes.map((entry, index) => (
                      <tr className="flex w-full items-center py-4 border-b-2">
                        <td className="flex w-1/12">{index + 1}</td>
                        <td className="flex w-1/5">{entry["State"]}</td>
                        <td className="flex w-1/5">{`${entry["Address"]}`}</td>
                        <td className="flex w-1/6">{`${entry["Duration"]}`}</td>
                        <td className="flex w-1/6">{`${entry["Fee"]}`}</td>
                        <td className="flex w-1/12">{`${entry["Key"]}`}</td>
                        <td className="flex w-1/6 justify-around items-center">
                          <Link
                            href={""}
                            className={
                              "p-2 bg-[#1FAA59] rounded-md hover:bg-[#3edd81]"
                            }
                          >
                            <Image src={iconEdit} alt={"edit"} width={20} />
                          </Link>
                          <Link
                            href={""}
                            className={
                              "p-2 bg-[#F54748] rounded-md hover:bg-[#ff7373]"
                            }
                          >
                            <Image src={iconDelete} alt={"delete"} width={20} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* END OF TABLE */}
            </div>
            {/*END OF CONTENT */}
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
};

export default rute;
