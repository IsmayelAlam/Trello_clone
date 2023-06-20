import { useSelector } from "react-redux";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function ProjectHeading() {
  const boards = useSelector((state) => state.board);

  return boards.map((board) =>
    board.active ? (
      <header
        className="w-screen fixed bg-slate-700 text-white h-14 flex items-center justify-start gap-2"
        key={board.id}
      >
        <h1 board={board} key={board.id} className="text-xl ml-10 capitalize">
          {board.title}
        </h1>
        <div>
          {board.favorite ? (
            <AiFillStar className="h-7 w-7 cursor-pointer p-1" />
          ) : (
            <AiOutlineStar className="h-7 w-7 cursor-pointer p-1" />
          )}
        </div>
      </header>
    ) : null
  );
}
