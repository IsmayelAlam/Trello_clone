import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillStar, AiOutlineStar, AiFillDelete } from "react-icons/ai";
import { deleteBoard, setActive, setFavorite } from "../../stores";

export default function BoardList({ board }) {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const icon = board.favorite ? (
    <AiFillStar className="h-7 w-7 cursor-pointer p-1" />
  ) : (
    show && <AiOutlineStar className="h-7 w-7 cursor-pointer p-1" />
  );
  const deleteBtn = show && (
    <AiFillDelete className="h-7 w-7 cursor-pointer p-1" />
  );

  return (
    <li
      className={`h-8 p-2 my-2 ml-4 rounded flex items-center justify-between hover:bg-slate-700 cursor-pointer ${
        board.active && "bg-slate-500"
      }`}
      onMouseEnter={setShow.bind(null, !show)}
      onMouseLeave={setShow.bind(null, !show)}
      onClick={() => dispatch(setActive(board))}
    >
      <h3>{board.title}</h3>

      <div className="flex">
        <div onClick={() => dispatch(deleteBoard(board))}>{deleteBtn}</div>
        <div onClick={() => dispatch(setFavorite(board.id))}>{icon}</div>
      </div>
    </li>
  );
}
