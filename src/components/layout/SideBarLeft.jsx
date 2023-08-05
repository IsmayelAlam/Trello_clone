import { BsPersonWorkspace } from "react-icons/bs";
import { useDispatch } from "react-redux";

import useLocalStorage from "../../hooks/useLocalStorage";

import { previewBoard } from "../../previewBoard";
import { setBoard } from "../../stores";

export default function SideBarLeft() {
  const [user] = useLocalStorage("user", "");

  const dispatch = useDispatch();

  return (
    <div className="w-72 py-10 px-5 h-screen  fixed  transition-all capitalize shadow-md z-10 hover:blur-0 hover:left-0 hover:bg-slate-900/95 blur-xs -left-68 bg-slate-500/50">
      <div className="p-2 mb-2 flex items-center gap-3 font-semibold text-xl relative">
        <BsPersonWorkspace className="h-10 w-10 p-1 rounded-md bg-white text-black inline-block" />
        <h2>{user ? `${user}'s` : "user's"} workspace</h2>
      </div>

      <hr />

      <ul className="max-h-96 py-5 overflow-y-scroll scrollbar space-y-3">
        <li
          onClick={() => dispatch(setBoard(previewBoard))}
          className="py-2 hover:bg-slate-500 rounded-lg px-4 cursor-pointer font-semibold"
        >
          preview board
        </li>
        <li className="py-2 hover:bg-slate-500 rounded-lg px-4 cursor-pointer font-semibold">
          change background
        </li>
      </ul>
    </div>
  );
}
