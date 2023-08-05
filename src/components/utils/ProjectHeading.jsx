import { useDispatch, useSelector } from "react-redux";
import { BsSave, BsTrash } from "react-icons/bs";

import { renameBoard } from "../../stores";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Clock from "./Clock";

export default function ProjectHeading() {
  const [user, setUser] = useLocalStorage("user", "username");

  console.log(user);

  let content = (
    <header className="w-screen fixed bg-slate-700/50 text-white h-14 flex items-center justify-between pr-10 gap-2 shadow">
      <h1 className="text-xl ml-10 capitalize">{`${user}'s Board`}</h1>

      <Clock />

      <div className="flex items-center gap-4">
        <BsTrash className="border-2 w-7 h-7 p-1 rounded-lg cursor-pointer" />
        <button className="bg-white px-4 py-1 text-black rounded-md hover:bg-slate-100 font-semibold uppercase flex items-center justify-center gap-1">
          <BsSave className="w-4 h-4" />
          <span>save</span>
        </button>
      </div>
    </header>
  );

  return content;
}
