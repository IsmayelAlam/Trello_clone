import { GoProject } from "react-icons/go";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  BsFillPlusSquareFill,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import BoardList from "../utils/BoardList";
import AddNewTask from "../utils/AddNewTask";

export default function SideBarLeft() {
  const boards = useSelector((state) => state.board);
  const [expend, setExpend] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => setExpend(!expend);
  const handleShow = () => setShow(!show);

  return (
    <div
      className={`w-72 py-10 px-5 h-screen  fixed  transition-all capitalize shadow-md z-10 ${
        show
          ? "blur-0 left-0 bg-slate-900/95"
          : "hover:blur-sm -left-68 bg-slate-500 hover:bg-slate-300"
      }`}
      onMouseDown={!show ? handleShow : setShow.bind(null, true)}
    >
      <div className="p-2 mb-2 flex items-center gap-3 font-semibold text-xl relative">
        <GoProject className="h-10 w-10 p-2 rounded-md bg-white text-black inline-block" />
        <h2>Your workspace</h2>
        <div className="absolute -right-16" onClick={handleShow}>
          {show && <BsFillArrowLeftCircleFill className="p-1 h-10 w-10" />}
        </div>
      </div>

      <hr />

      <div className="my-5">
        <h2 className="text-lg">favorite boards</h2>
      </div>

      <ul className="max-h-64 overflow-y-scroll scrollbar">
        {boards.map((board, index) =>
          board.favorite ? (
            <BoardList board={board} index={index} key={board.id} />
          ) : null
        )}
      </ul>

      <div className="my-5 flex items-center justify-between relative">
        <h2 className="text-lg">boards</h2>

        {expend ? (
          <AddNewTask
            type="board"
            collapse={handleClick}
            classes="absolute top-0 left-full"
          />
        ) : (
          <BsFillPlusSquareFill onClick={handleClick} />
        )}
      </div>

      <ul className="max-h-96 overflow-y-scroll scrollbar">
        {boards.map((board) => (
          <BoardList board={board} key={board.id} />
        ))}
      </ul>
    </div>
  );
}
