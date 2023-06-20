import { GoProject } from "react-icons/go";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

import BoardList from "../utils/BoardList";
import { useState } from "react";
import AddNewTask from "../utils/AddNewTask";

export default function SideBarLeft() {
  const boards = useSelector((state) => state.board);
  const [expend, setExpend] = useState(false);

  const handleClick = () => setExpend(!expend);

  return (
    <div className="w-72 py-10 px-5 h-screen bg-slate-500 fixed -left-68 transition-all capitalize shadow-md z-10 hover:bg-slate-900/95 hover:left-0 hover:blur-0 scrollbar">
      <div className="p-2 mb-2 flex items-center gap-3 font-semibold text-xl">
        <GoProject className="h-10 w-10 p-2 rounded-md bg-white text-black inline-block" />
        <h2>Your workspace</h2>
      </div>

      <hr />

      <div className="my-5">
        <h2 className="text-lg">favorite boards</h2>
      </div>

      {boards.map((board, index) =>
        board.favorite ? (
          <BoardList board={board} index={index} key={board.id} />
        ) : null
      )}

      <div className="my-5 flex items-center justify-between relative">
        <h2 className="text-lg">boards</h2>

        {expend ? (
          <AddNewTask
            type="board"
            collapse={handleClick}
            classes="absolute top-0 left-full"
          />
        ) : (
          <AiOutlinePlus onClick={handleClick} />
        )}
      </div>
      {boards.map((board, index) => (
        <BoardList board={board} index={index} key={board.id} />
      ))}
    </div>
  );
}
