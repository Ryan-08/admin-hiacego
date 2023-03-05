import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import iconMobil from "../../assets/icons/iconMobil.svg";
import ProtectedRoute from "../../components/ProtectedRoute";
import axios from "axios";
import { useRouter } from "next/router";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { cyrb53, getHarga } from "../../helpers";

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
  namaTravel: any;
}

const tambah = () => {
  const jadwal = [
    { sesi: "Pagi", jam: "08.00 Wib" },
    { sesi: "Siang", jam: "14.00 Wib" },
    { sesi: "Malam", jam: "21.00 Wib" },
  ];
  const statusOpt = ["on progress", "selesai", "batal"];
  const [data, setData] = useState<Data>({
    nama: "",
    noHp: "",
    noTiket: "",
    tujuan: "",
    rute: "BIR",
    jam: "",
    tanggal: "",
    harga: "",
    alamat: "",
    status: "",
    namaTravel: "hello",
  });
  const [rutes, setRute] = useState([]);
  const [travels, setTravels] = useState([]);

  const router = useRouter();

  const handleTujuan = async (event: any) => {
    var tjuan = event.target.value;
    var dt = await getHarga(tjuan);
    var fee = dt[0]["Fee"];
    data.tujuan = tjuan;
    data.rute = dt[0]["Key"];
    setData({ ...data, harga: fee });
    console.log(data);
  };
  const handleTravel = (event: any) => {
    var update = event.target.value;
    var no = cyrb53(uuidv4()).toString();
    data.namaTravel = update;
    setData({ ...data, noTiket: no });
    console.log(data);
  };
  const handleStatus = (event: any) => {
    var update = event.target.value;
    setData({ ...data, status: update });
    console.log(data);
  };
  const handleJadwal = (event: any) => {
    var update = event.target.value;
    setData({ ...data, jam: update });
    console.log(data);
  };
  const handleTanggal = (event: any) => {
    var update = event.target.value;
    var tgl = moment(update).format("DD MMMM YYYY");
    setData({ ...data, tanggal: tgl });
    console.log(data);
  };
  // const createNoTiket = () => {

  // };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(data);
    try {
      axios.post("/api/penumpang/create", data);
    } catch (error: any) {
      console.log(error.message);
    }
    router.push("/Penumpang");
  };
  useEffect(() => {
    let isMounted = true;

    const getRute = async () => {
      await axios.get(`/api/rute`).then((res) => {
        isMounted && setRute(res.data);
      });
    };
    const getTravel = async () => {
      await axios
        .get(`/api/mobil?rute=${data.rute}&jam=${data.jam}`)
        .then((res) => {
          isMounted && setTravels(res.data);
        });
    };

    getRute();
    getTravel();

    return () => {
      isMounted = false;
    };
  }, [travels, data]);
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
                title="Tambah Pesanan"
                terminal="Terminal Lueng Bata"
                icon={iconMobil}
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
                      onChange={({ target }) =>
                        setData({ ...data, nama: target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="No. HP"
                      className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                      onChange={({ target }) =>
                        setData({ ...data, noHp: target.value })
                      }
                    />
                    <div className="w-full h-[14%] px-8 py-4 border-b-2 border-black flex items-center">
                      <select
                        onChange={handleTujuan}
                        className="list-container gap-4 flex flex-col justify-between w-fit"
                      >
                        <option value={"semua"}>{"Pilih Tujuan"}</option>
                        {rutes.map((item, index) => (
                          <option key={item["Key"]} value={`${item["State"]}`}>
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
                        <option value={"semua"}>{"Pilih Jadwal"}</option>
                        {jadwal.map((item, index) => (
                          <option key={index} value={item["sesi"]}>
                            {item["jam"]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      type="date"
                      placeholder="Tanggal"
                      className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                      onChange={handleTanggal}
                    />
                    <input
                      type="text"
                      placeholder="Alamat"
                      className="flex h-[14%] items-center px-8 py-4 focus:border-b-2 outline-none border-b-2 border-black w-full"
                      onChange={({ target }) =>
                        setData({ ...data, alamat: target.value })
                      }
                    />
                    <div className="w-full h-[14%] px-8 py-4 border-b-2 border-black flex items-center">
                      <select
                        onChange={handleTravel}
                        className="list-container flex flex-col justify-between gap-4 w-fit"
                      >
                        <option value={"semua"}>{"Pilih Travel"}</option>
                        {travels.map((item, index) => (
                          <option key={index} value={item["travel"]}>
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
                          <option key={index} value={item}>
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

export default tambah;
