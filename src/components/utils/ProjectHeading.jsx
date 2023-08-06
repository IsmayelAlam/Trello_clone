import { useState } from "react";
import { createPortal } from "react-dom";
import { BsSave, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";

import useLocalStorage from "../../hooks/useLocalStorage";
import Clock from "./Clock";
import Modal from "./Modal";
import { setBoard } from "../../stores";

const portal = document.getElementById("portal");

export default function ProjectHeading({ saveList, setSaveList, currentList }) {
  const [user, setUser] = useLocalStorage("user", "");
  const [usernameChange, setUsernameChange] = useState(Boolean(user) || false);
  const dispatch = useDispatch();

  document.title = Boolean(user) ? `${user}'s Board` : "kanban board";

  let content = (
    <header className="w-screen fixed bg-slate-700/50 text-white h-14 flex items-center justify-between pr-10 gap-2 shadow">
      <h1
        className="text-xl ml-10 capitalize cursor-pointer"
        onClick={() => setUsernameChange(false)}
      >
        {Boolean(user) ? `${user}'s Board` : "kanban board"}
      </h1>

      <Clock />

      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setSaveList([]);
            dispatch(setBoard([]));
          }}
          className={saveList.length || "hidden"}
        >
          <BsTrash className="border-2 w-7 h-7 p-1 rounded-lg cursor-pointer" />
        </button>
        <button
          className="bg-white px-4 py-1 text-black rounded-md hover:bg-slate-100 font-semibold uppercase flex items-center justify-center gap-1"
          onClick={() => setSaveList(currentList)}
        >
          <BsSave className="w-4 h-4" />
          <span>save</span>
        </button>
        {usernameChange ||
          createPortal(
            <Modal setUser={setUser} setUsernameChange={setUsernameChange} />,
            portal
          )}
      </div>
    </header>
  );

  return content;
}
