import React, { useState } from "react";
import iconArrowDown from "../assets/icons/iconArrowDown.svg";
import Image from "next/image";

const OptionMobil = (props: { data: any[]; setTravel: any }) => {
  const [selected, setSelected] = useState("");
  const [down, setDown] = useState(false);
  const dropdown = (tes: any) => {
    setDown((prev) => (prev = !prev));
  };
  const handleChange = (e: any) => {
    setSelected(e.target.value);
    props.setTravel(e.target.value);
    setDown((prev) => (prev = !prev));
  };
  // const options = [
  //   {
  //     label: "PT Bahtera Atakana",
  //     value: "PT Bahtera Atakana",
  //   },
  //   {
  //     label: "PT Bahtera Atakana1",
  //     value: "PT Bahtera Atakana1",
  //   },
  //   {
  //     label: "PT Bahtera Atakana2",
  //     value: "PT Bahtera Atakana2",
  //   },
  //   {
  //     label: "PT Bahtera Atakana3",
  //     value: "PT Bahtera Atakana3",
  //   },
  //   {
  //     label: "PT Bahtera Atakana4",
  //     value: "PT Bahtera Atakana4",
  //   },
  //   {
  //     label: "PT Bahtera Atakana5",
  //     value: "PT Bahtera Atakana5",
  //   },
  // ];
  return (
    <div className="flex flex-col w-3/12 font-semibold relative">
      <div
        className={` ${
          down ? "rounded-b-none" : "rounded-md "
        } " cursor-pointer list-selected bg-white p-2 justify-evenly w-full flex flex-row gap-2 font-bold"`}
        onClick={dropdown}
      >
        {selected != "" ? selected : "--Pilih Travel--"}
        <Image src={iconArrowDown} alt="icon" width={16} />
      </div>

      <div
        className={`"flex-col font-semibold w-full bg-white absolute top-11 left-0 " ${
          down ? "block" : "hidden"
        } `}
      >
        <option
          value={"Semua"}
          className="list cursor-pointer font-normal p-4 border-b-[2px] border-gray-200 hover:bg-gray-200"
          onClick={handleChange}
        >
          Semua
        </option>
        {props.data.map((opt: any) => (
          <option
            value={opt["travel"]}
            className="list cursor-pointer font-normal p-4 border-b-[2px] border-gray-200 hover:bg-gray-200"
            onClick={handleChange}
          >
            {opt["travel"]}
          </option>
        ))}
      </div>
    </div>
  );
};

export default OptionMobil;
