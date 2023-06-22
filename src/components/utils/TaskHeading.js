import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import {
  AiFillDelete,
  AiFillPlusSquare,
  AiOutlineCloseCircle,
} from "react-icons/ai";

import { deleteList } from "../../stores";
import { useDispatch } from "react-redux";

export default function TaskHeading({ list, collapse }) {
  const [expend, setExpend] = useState(false);
  const dispatch = useDispatch();

  let content;

  if (expend)
    content = (
      <div className="absolute h-screen/2 bg-slate-800 rounded shadow z-10">
        <button className="m-2 p-1 w-48 flex justify-between capitalize">
          <span>list action</span>
          <AiOutlineCloseCircle
            className="h-7 w-7 cursor-pointer"
            onClick={setExpend.bind(null, !expend)}
          />
        </button>
        <hr />
        <button
          className="h-10 w-48 m-2 text-center p-2 rounded bg-slate-700 flex items-center justify-center capitalize"
          onClickCapture={collapse}
          onClick={setExpend.bind(null, !expend)}
        >
          <AiFillPlusSquare className="h-7 w-7 cursor-pointer p-1" />
          <span>add Card</span>
        </button>
        <button
          className="h-10 w-48 m-2 text-center p-2 rounded bg-slate-700 flex items-center justify-center capitalize"
          onClick={() => dispatch(deleteList(list))}
          autoFocus
        >
          <AiFillDelete className="h-7 w-7 cursor-pointer p-1" />
          <span>Delete</span>
        </button>
      </div>
    );

  return (
    <header className="flex p-2 items-center justify-between overflow-visible">
      <h2 className="text-lg font-semibold capitalize px-4 rounded-lg">
        {list.title}
      </h2>
      <div className="relative">
        <TbDotsVertical
          className="h-7 w-7 cursor-pointer p-1 rounded hover:bg-slate-500"
          onClick={setExpend.bind(null, !expend)}
        />
        {content}
      </div>
    </header>
  );
}
