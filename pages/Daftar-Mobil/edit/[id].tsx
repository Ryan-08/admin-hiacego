import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { icoMobil } from "../../../assets";
import ProtectedRoute from "../../../components/ProtectedRoute";
import axios from "axios";
import { useRouter } from "next/router";

interface Data {
  travel: any;
  plat: any;
  rute: any[];
  jadwal: any[];
}

const Ubah = () => {
  const jadwal = ["Pagi", "Siang", "Malam"];
  const [data, setData] = useState<Data>({
    travel: "",
    plat: "",
    rute: [],
    jadwal: [],
  });
  const [rutes, setRute] = useState([]);
  const [checked, setChecked] = useState<any[]>([]);
  const [checkedJadwal, setCheckedJadwal] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

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
      axios.post(`/api/mobil/${id}`, data);
    } catch (error: any) {
      console.log(error.message);
    }
    router.push("/Daftar-Mobil");
  };
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const getRute = async () => {
      await axios
        .get(`/api/rute`)
        .then((res) => {
          setRute(res.data);
          setLoading(false);
        })
        .catch((err) => {
          router.push("/Daftar-Mobil");
        });
    };
    const getData = async () => {
      await axios
        .get(`/api/mobil/${id}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          router.push("/Daftar-Mobil");
        });
    };
    getData();
    getRute();

    return () => {
      isMounted = false;
    };
  }, []);
  const checkRute = (item: any) => {
    if (data.rute.length > 0) return data.rute.includes(item);
    return false;
  };
  const checkJadwal = (item: any) => {
    console.log(`data is ${data.jadwal.includes(item)}`);
    if (data.jadwal.length > 0) return data.jadwal.includes(item);
    return false;
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>HiaceGo | Ubah Mobil</title>
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
                title="Ubah Mobil"
                terminal="Terminal Lueng Bata"
                icon={icoMobil}
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
                        placeholder="travel Travel"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        defaultValue={data.travel}
                        onChange={({ target }) =>
                          setData({ ...data, travel: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="No. Plat Mobil"
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        defaultValue={data.plat}
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
                                defaultChecked={checkRute(item["Key"])}
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
                                // checked={checkJadwal(item)}
                                defaultChecked={checkJadwal(item)}
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

export default Ubah;
