import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { deleteList } from "../../stores";
import { useDispatch } from "react-redux";

export default function TaskHeading({ list }) {
  const [expend, setExpend] = useState(false);
  const dispatch = useDispatch();

  let content;

  if (expend)
    content = (
      <div className="absolute top-full left-full h-screen/2 bg-slate-800 rounded shadow z-10">
        <button
          className="h-10 w-48 m-2 text-center p-2 rounded bg-slate-700 "
          onClick={() => dispatch(deleteList(list))}
        >
          Delete
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
          onClick={() => setExpend(!expend)}
        />
        {content}
      </div>
    </header>
  );
}
