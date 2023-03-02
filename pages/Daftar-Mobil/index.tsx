import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import iconMobil from "../../assets/icons/iconMobil.svg";
import iconPlus from "../../assets/icons/iconPlus.svg";
import iconEdit from "../../assets/icons/iconEdit.svg";
import iconDelete from "../../assets/icons/iconDelete.svg";
import OptionMobil from "../../components/OptionMobil";
import Link from "next/link";
import ProtectedRoute from "../../components/ProtectedRoute";
import axios from "axios";
import { useRouter } from "next/router";
const daftarMobil = () => {
  const [entries, setEntries] = useState([]);
  const [mobil, setMobil] = useState([]);
  const [travel, setTravel] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async (id: any) => {
    setLoading(true);
    console.log(id);
    await axios
      .delete(`/api/mobil/${id}`)
      .then(() => router.push("/Daftar-Mobil"))
      .catch((err) => setLoading(false));
  };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const getData = async () => {
      await axios
        .get(`/api/mobil?travel=${travel}`)
        .then((res) => {
          isMounted && setEntries(res.data);
        })
        .then(() => {
          setLoading(false);
        });
    };
    const getMobil = async () => {
      await axios
        .get(`/api/mobil`)
        .then((res) => {
          isMounted && setMobil(res.data);
        })
        .then(() => {
          setLoading(false);
        });
    };
    getData();
    getMobil();

    return () => {
      isMounted = false;
    };
  }, [travel]);

  if (isLoading) return <p></p>;

  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>HiaceGo | Daftar Mobil</title>
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
                title="Daftar Mobil"
                terminal="Terminal Lueng Bata"
                icon={iconMobil}
              />
              {/* ROW */}
              <div className="flex flex-row p-8 pt-0 items-center justify-between">
                {/* OPTION MOBIL */}
                <OptionMobil data={mobil} setTravel={setTravel} />
                {/* END OF OPTION */}
                {/* BUTTON PLUS */}
                <Link href={"/Daftar-Mobil/tambah"} className="flex">
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
                      <th className="flex w-1/5 font-normal">Travel</th>
                      <th className="flex w-1/5 font-normal">Rute</th>
                      <th className="flex w-1/6 font-normal">Plat Mobil</th>
                      <th className="flex w-1/6 font-normal">Jadwal</th>
                      <th className="flex w-1/6 font-normal justify-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="flex flex-col w-full p-4">
                    {entries.map((entry, index) => (
                      <tr className="flex w-full items-center py-4">
                        <td className="flex w-1/12">{index + 1} </td>
                        <td className="flex w-1/5">{entry["travel"]}</td>
                        <td className="flex w-1/5">{`${entry["rute"]}`}</td>
                        <td className="flex w-1/6">{entry["plat"]}</td>
                        <td className="flex w-1/6">{`${entry["jadwal"]}`}</td>
                        <td className="flex w-1/6 justify-around items-center">
                          <Link
                            href={`/Daftar-Mobil/edit/${entry["_key"]}`}
                            className={
                              "p-2 bg-[#1FAA59] rounded-md hover:bg-[#3edd81]"
                            }
                          >
                            <Image src={iconEdit} alt={"edit"} width={20} />
                          </Link>
                          <button
                            onClick={() => handleDelete(entry["_key"])}
                            className={
                              "p-2 bg-[#F54748] rounded-md hover:bg-[#ff7373]"
                            }
                          >
                            <Image src={iconDelete} alt={"delete"} width={20} />
                          </button>
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

export default daftarMobil;
