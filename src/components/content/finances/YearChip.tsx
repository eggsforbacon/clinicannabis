"use client";

import {BiMinus, BiPlus} from "react-icons/bi";
import {ReactNode, useState} from "react";

export default function YearChip({children, year}: { children: ReactNode | ReactNode[] , year : string}) {

  const [open, setOpen] = useState(false);

  return (
      <div className={"flex flex-col items-stretch justify-start gap-10 p-6 w-full border-2 border-neutral-500 rounded-lg text-xl transition-all ease-in-out duration-300"}>
        <button onClick={() => setOpen(!open)} className={"w-full flex items-center justify-between"}>
          <label className={"text-3xl font-bold text-caribbean-green"}>{year}</label>
          {open ? <BiMinus/> : <BiPlus/>}
        </button>
        {open &&
          <div className={"flex flex-col gap-6 w-full"}>
            {children}
          </div>
        }
      </div>
  );
}