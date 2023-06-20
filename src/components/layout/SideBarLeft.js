import { GoProject } from "react-icons/go";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

import BoardList from "../utils/BoardList";

export default function SideBarLeft() {
  const initData = useSelector((state) => state.board);

  return (
    <div className="w-72 py-10 px-5 h-screen bg-slate-900/80 fixed left-64 transition-all shadow-md  z-10 hover:bg-slate-900/95 capitalize">
      <div className="p-2 mb-2 flex items-center gap-3 font-semibold text-xl">
        <GoProject className="h-10 w-10 p-2 rounded-md bg-white text-black inline-block" />
        <h2>Your workspace</h2>
      </div>

      <hr />

      <div className="my-5">
        <h2 className="text-lg">favorite boards</h2>
      </div>

      {initData.map((board, index) =>
        board.favorite ? (
          <BoardList board={board} index={index} key={board.id} />
        ) : null
      )}

      <div className="my-5 flex items-center justify-between">
        <h2 className="text-lg">boards</h2>
        <AiOutlinePlus className="cursor-pointer" />
      </div>
      {initData.map((board, index) => (
        <BoardList board={board} index={index} key={board.id} />
      ))}
    </div>
  );
}
