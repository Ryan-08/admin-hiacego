import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { icoMobil } from "../../../assets";
import ProtectedRoute from "../../../components/ProtectedRoute";
import axios from "axios";
import { useRouter } from "next/router";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { cyrb53, getHarga } from "../../../helpers";

interface Data {
  nama: any;
  noHp: any;
  noTiket: any;
  tujuan: any;
  rute: any;
  jam: any;
  tanggal: any;
  harga: any;
  alamat: any;
  status: any;
  travel: any;
  noKursi: any;
  uid: any;
}

const Ubah = () => {
  const jadwal = [
    { sesi: "Pagi", jam: "10.00 wib" },
    { sesi: "Siang", jam: "14.00 wib" },
    { sesi: "Malam", jam: "21.00 wib" },
  ];
  const statusOpt = ["on progress", "selesai", "batal"];

  const [oldData, setOldData] = useState<Data>({
    nama: "",
    noHp: "",
    noTiket: "",
    tujuan: "",
    rute: "",
    jam: "",
    tanggal: "",
    harga: "",
    alamat: "",
    status: "",
    travel: "",
    noKursi: "",
    uid: "",
  });
  const [rutes, setRute] = useState([]);
  const [travels, setTravels] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const { id } = router.query;

  const checkRute = (item: any) => {
    if (oldData.rute === item) return true;
    return false;
  };
  const checkJadwal = (item: any) => {
    if (oldData.jam === item) return true;
    return false;
  };
  const checkTravel = (item: any) => {
    if (oldData.travel === item) return true;
    return false;
  };
  const checkStatus = (item: any) => {
    if (oldData.status === item) return true;
    return false;
  };
  const getTanggal = () => {
    var tgl = moment(oldData.tanggal).format("YYYY-MM-DD");
    return tgl;
  };

  const handleTujuan = async (event: any) => {
    var tjuan = event.target.value;
    var dt = await getHarga(tjuan);
    var fee = dt[0]["Fee"];
    oldData.tujuan = tjuan;
    oldData.rute = dt[0]["Key"];
    setOldData({ ...oldData, harga: fee });
    console.log(oldData);
  };
  const handleTravel = (event: any) => {
    var update = event.target.value;
    var no = cyrb53(uuidv4()).toString();
    oldData.travel = update;
    setOldData({ ...oldData, noTiket: no });
    console.log(oldData);
  };
  const handleStatus = (event: any) => {
    var update = event.target.value;
    setOldData({ ...oldData, status: update });
    console.log(oldData);
  };
  const handleJadwal = (event: any) => {
    var update = event.target.value;
    setOldData({ ...oldData, jam: update });
    console.log(oldData);
  };
  const handleTanggal = (event: any) => {
    var update = event.target.value;
    var tgl = moment(update).format("DD MMMM YYYY");
    setOldData({ ...oldData, tanggal: tgl });
    console.log(oldData);
  };
  // const createNoTiket = () => {

  // };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(oldData);
    try {
      axios.post(`/api/penumpang/${id}`, oldData);
    } catch (error: any) {
      console.log(error.message);
    }
    router.push("/Penumpang");
  };
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const getRute = async () => {
      await axios
        .get(`/api/rute`)
        .then((res) => {
          isMounted && setRute(res.data);
        })
        .then(() => {
          setLoading(false);
        });
    };
    const getTravel = async () => {
      await axios
        .get(`/api/mobil?rute=${oldData.rute}&jam=${oldData.jam}`)
        .then((res) => {
          isMounted && setTravels(res.data);
        })
        .then(() => {
          setLoading(false);
        });
    };
    const getData = async () => {
      await axios
        .get(`/api/penumpang/${id}`)
        .then((res) => {
          isMounted && setOldData(res.data);
        })
        .then(() => {
          console.log(`oldData`);
          console.log(oldData);
        });
    };

    getRute();
    getTravel();
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
          <title>HiaceGo | Detail Penumpang</title>
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
                title="Detail Penumpang"
                terminal="Terminal Lueng Bata"
                icon={icoMobil}
              />
              <div className="flex flex-col bg-white mx-8 h-full p-8 rounded-md iconnamepageshadow mb-6 items-center gap-10">
                <div className="flex flex-row h-full w-full font-semibold">
                  <div className="flex flex-col bg-[#F6F6F6] w-1/5 h-full rounded-md pb-20">
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Nama
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      No Hp
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Tujuan
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Jam
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Tanggal
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Alamat
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Travel
                    </h3>
                    <h3 className="flex w-full h-[14%] items-center px-8 py-4">
                      Status
                    </h3>
                  </div>
                  <form
                    method="post"
                    className="flex flex-col w-4/5 h-full mx-8"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      placeholder="Nama"
                      className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                      defaultValue={oldData.nama}
                      onChange={({ target }) =>
                        setOldData({ ...oldData, nama: target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="No. HP"
                      className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                      defaultValue={oldData.noHp}
                      onChange={({ target }) =>
                        setOldData({ ...oldData, noHp: target.value })
                      }
                    />
                    <div className="w-full h-[14%] px-8 py-4 border-b-2 border-black flex items-center">
                      <select
                        onChange={handleTujuan}
                        className="list-container gap-4 flex flex-col justify-between w-fit"
                      >
                        <option value={"semua"}>{"Pilih Tujuan"}</option>
                        {rutes.map((item, index) => (
                          <option
                            selected={checkRute(item["Key"])}
                            key={item["Key"]}
                            value={`${item["State"]}`}
                          >
                            {item["State"]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full h-[14%] px-8 py-4 border-b-2 border-black flex items-center">
                      <select
                        onChange={handleJadwal}
                        className="list-container flex flex-col justify-between gap-4 w-fit"
                      >
                        <option value={"Semua"}>{"Pilih Jadwal"}</option>
                        {jadwal.map((item, index) => (
                          <option
                            selected={checkJadwal(item["jam"])}
                            key={index}
                            value={item["sesi"]}
                          >
                            {item["jam"]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      type="date"
                      placeholder="Tanggal"
                      className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                      defaultValue={getTanggal()}
                      value={getTanggal()}
                      onChange={handleTanggal}
                    />
                    <input
                      type="text"
                      placeholder="Alamat"
                      className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                      defaultValue={oldData.alamat}
                      onChange={({ target }) =>
                        setOldData({ ...oldData, alamat: target.value })
                      }
                    />
                    <div className="w-full h-[14%] px-8 py-4 border-b-2 border-black flex items-center">
                      <select
                        onChange={handleTravel}
                        className="list-container flex flex-col justify-between gap-4 w-fit"
                      >
                        <option value={"semua"}>{"Pilih Travel"}</option>
                        {travels.map((item, index) => (
                          <option
                            selected={checkTravel(item["travel"])}
                            key={index}
                            value={item["travel"]}
                          >
                            {item["travel"]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full h-[14%] px-8 py-4 border-b-2 border-black flex items-center">
                      <select
                        onChange={handleStatus}
                        className="list-container flex flex-col justify-between gap-4 w-fit"
                      >
                        <option value={"semua"}>{"Pilih Status"}</option>
                        {statusOpt.map((item, index) => (
                          <option
                            selected={checkStatus(item)}
                            key={index}
                            value={item}
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#1FA5F7] w-1/5 p-2 px-4 rounded-md mt-12 mx-auto text-white font-bold text-center"
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
