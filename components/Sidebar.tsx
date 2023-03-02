import React, { useState } from "react";
import Image from "next/image";
import { icBeranda, icDaftarMobil, icDataPenumpang } from "../public";
import icController from "../public/controller.svg";
import Logo from "../assets/Logo.svg";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Beranda", src: icBeranda, href: "/Beranda" },
    { title: "Daftar Mobil", src: icDaftarMobil, href: "/Daftar-Mobil" },
    { title: "Daftar Pesanan", src: icDataPenumpang, href: "/Penumpang" },
    { title: "Daftar Rute", src: icDataPenumpang, href: "/Rute" },
  ];
  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-auto bg-white sideshadow relative`}
    >
      <Image
        src={icController}
        className="absolute cursor-pointer -right-14 top-5 w-7 "
        alt="icon"
        onClick={() => setOpen(!open)}
      />
      <div className=" p-4">
        <Image
          src={Logo}
          priority
          className={`"cursor-pointer w-2/3 mb-4 " ${!open && "mx-auto"}`}
          alt="icon"
        />
        {Menus.map((menu, index) => (
          <Link
            href={menu.href}
            key={index}
            className="flex items-center justify-between gap-x-4 cursor-pointer p-2 hover:bg-[#EEEEEE] rounded-md"
          >
            <span className={`${!open && "hidden"} sidestyle`}>
              {menu.title}
            </span>
            <Image
              src={menu.src}
              alt="ico"
              className={`${!open && setOpen} origin-left duration-200`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
