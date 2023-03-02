import React, { useState } from "react";
import iconArrowDown from "../assets/icons/iconArrowDown.svg";
import Image from "next/image";

const OptionTujuan = (props: {
  data: any[];
  setTujuan: any;
  //   updateData: any;
}) => {
  const [selected, setSelected] = useState("");
  const [down, setDown] = useState(false);
  const dropdown = (tes: any) => {
    setDown((prev) => (prev = !prev));
  };
  const handleChange = (e: any) => {
    setSelected(e.target.value);
    props.setTujuan(e.target.value);
    // props.updateData();
    setDown((prev) => (prev = !prev));
  };
  return (
    <div className="flex flex-col w-3/12 font-semibold relative">
      <div
        className={` ${
          down ? "rounded-b-none" : "rounded-md "
        } " cursor-pointer list-selected bg-white p-2 justify-evenly w-full flex flex-row gap-2 font-bold"`}
        onClick={dropdown}
      >
        {selected != "" ? selected : "--Pilih Rute--"}
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
            value={opt["State"]}
            className="list cursor-pointer font-normal p-4 border-b-[2px] border-gray-200 hover:bg-gray-200"
            onClick={handleChange}
          >
            {opt["State"]}
          </option>
        ))}
      </div>
    </div>
  );
};

export default OptionTujuan;
