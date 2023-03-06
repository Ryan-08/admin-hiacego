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
  Address: any;
  Duration: any;
  Fee: any;
  Key: any;
  State: any;
}

const Ubah = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Data>({
    Address: "",
    Duration: "",
    Fee: "",
    Key: "",
    State: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      axios.post(`/api/rute/${id}`, data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const { id } = router.query;
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const getData = async () => {
      await axios.get(`/api/rute/${id}`).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    };
    getData();

    return () => {
      isMounted = false;
    };
  }, []);

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
                        defaultValue={data.State}
                        onChange={({ target }) =>
                          setData({ ...data, State: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Alamat"
                        defaultValue={data.Address}
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, Address: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Durasi"
                        defaultValue={data.Duration}
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, Duration: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Harga"
                        defaultValue={data.Fee}
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, Fee: target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Key"
                        defaultValue={data.Key}
                        className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                        onChange={({ target }) =>
                          setData({ ...data, Key: target.value })
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

export default Ubah;
