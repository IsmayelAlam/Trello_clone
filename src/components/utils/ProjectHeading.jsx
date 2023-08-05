import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { renameBoard, setFavorite } from "../../stores";
import { useState } from "react";

export default function ProjectHeading() {
  const boards = useSelector((state) => state.board);
  const [activeBoard] = boards.filter((board) => board.active);

  const title = activeBoard ? activeBoard.title : "";
  const id = activeBoard ? activeBoard.id : "";
  const favorite = activeBoard ? activeBoard.favorite : "";

  const dispatch = useDispatch();

  const [rename, setRename] = useState(false);
  const [newTitle, setTitle] = useState(title);

  const handleChange = (e) => setTitle(e.target.value);
  const handleRename = (e) => {
    setRename(!rename);
    dispatch(renameBoard({ id: activeBoard.id, newTitle }));
  };

  let content = (
    <header
      className="w-screen fixed bg-slate-700 text-white h-14 flex items-center justify-start gap-2"
      key={id}
    >
      <h1
        board={activeBoard}
        key={id}
        className="text-xl ml-10 capitalize"
        onClick={handleRename}
      >
        {rename ? (
          <input
            type="text"
            autoFocus
            className="rounded text-black"
            onBlur={handleRename}
            onChange={handleChange}
            value={newTitle}
          />
        ) : (
          title
        )}
      </h1>
      {activeBoard && (
        <div onClick={() => dispatch(setFavorite(id))}>
          {favorite ? (
            <AiFillStar className="h-7 w-7 cursor-pointer p-1" />
          ) : (
            <AiOutlineStar className="h-7 w-7 cursor-pointer p-1" />
          )}
        </div>
      )}
    </header>
  );

  return content;
}
